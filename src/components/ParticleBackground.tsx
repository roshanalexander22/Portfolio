import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Simple post-processing without additional libs
export default function ParticleBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;
    const w = window.innerWidth;
    const h = window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x030014, 1);
    mount.appendChild(renderer.domElement);

    // Particles
    const particleCount = 10000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    const baseColor = new THREE.Color(0x0a1628);
    const accentColor = new THREE.Color(0xccff00);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 200;
      const z = (Math.random() - 0.5) * 100;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      colors[i * 3] = baseColor.r;
      colors[i * 3 + 1] = baseColor.g;
      colors[i * 3 + 2] = baseColor.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Energy lines
    const lineCount = 80;
    const lineGroup = new THREE.Group();
    const lineObjects: { mesh: THREE.Line; speed: number; startZ: number }[] = [];

    for (let i = 0; i < lineCount; i++) {
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x88aaff,
        transparent: true,
        opacity: 0.08 + Math.random() * 0.1,
        blending: THREE.AdditiveBlending,
      });

      const length = 10 + Math.random() * 30;
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, length),
      ]);

      const line = new THREE.Line(lineGeo, lineMat);
      line.position.set(
        (Math.random() - 0.5) * 160,
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 80
      );
      line.rotation.x = Math.random() * Math.PI;
      line.rotation.y = Math.random() * Math.PI;

      lineGroup.add(line);
      lineObjects.push({ mesh: line, speed: 0.05 + Math.random() * 0.15, startZ: line.position.z });
    }
    scene.add(lineGroup);

    // Mouse interaction
    const mouse = new THREE.Vector2(-9999, -9999);
    const mouse3D = new THREE.Vector3();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse3D.set(mouse.x * 80, mouse.y * 60, 0);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize
    const handleResize = () => {
      const nw = window.innerWidth;
      const nh = window.innerHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', handleResize);

    // Animation
    let frameId: number;
    let time = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      time += 0.005;

      // Rotate particles slowly
      particles.rotation.y = time * 0.03;
      particles.rotation.x = time * 0.01;

      // Mouse repulsion on particles
      const posArr = particleGeo.attributes.position.array as Float32Array;
      const colArr = particleGeo.attributes.color.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;
        const px = posArr[ix];
        const py = posArr[ix + 1];

        const dx = px - mouse3D.x;
        const dy = py - mouse3D.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 25) {
          const force = (25 - dist) / 25;
          const nx = (dx / dist) * force * 0.12;
          const ny = (dy / dist) * force * 0.12;
          posArr[ix] += nx;
          posArr[ix + 1] += ny;

          // Color shift to accent
          const mix = force * 0.6;
          colArr[ix] = baseColor.r + (accentColor.r - baseColor.r) * mix;
          colArr[ix + 1] = baseColor.g + (accentColor.g - baseColor.g) * mix;
          colArr[ix + 2] = baseColor.b + (accentColor.b - baseColor.b) * mix;
        } else {
          // Spring back
          posArr[ix] += (originalPositions[ix] - posArr[ix]) * 0.04;
          posArr[ix + 1] += (originalPositions[ix + 1] - posArr[ix + 1]) * 0.04;
          posArr[ix + 2] += (originalPositions[ix + 2] - posArr[ix + 2]) * 0.04;

          // Fade back to base color
          colArr[ix] += (baseColor.r - colArr[ix]) * 0.05;
          colArr[ix + 1] += (baseColor.g - colArr[ix + 1]) * 0.05;
          colArr[ix + 2] += (baseColor.b - colArr[ix + 2]) * 0.05;
        }

        // Subtle drift
        posArr[ix] += velocities[ix];
        posArr[ix + 1] += velocities[ix + 1];
        velocities[ix] += (originalPositions[ix] - posArr[ix]) * 0.0001;
        velocities[ix + 1] += (originalPositions[ix + 1] - posArr[ix + 1]) * 0.0001;
      }

      particleGeo.attributes.position.needsUpdate = true;
      particleGeo.attributes.color.needsUpdate = true;

      // Move lines forward
      lineObjects.forEach(({ mesh, speed }) => {
        mesh.position.z += speed;
        if (mesh.position.z > 60) {
          mesh.position.z = -60;
        }
        const mat = mesh.material as THREE.LineBasicMaterial;
        mat.opacity = Math.sin(time * 2 + mesh.position.x) * 0.06 + 0.06;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Cleanup Three.js resources
      particleGeo.dispose();
      particleMat.dispose();
      lineObjects.forEach(({ mesh }) => {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
