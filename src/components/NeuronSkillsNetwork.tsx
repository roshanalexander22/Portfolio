import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, Cpu } from 'lucide-react';
import { sound } from '../utils/audio';

export interface NeuronNode {
  id: string;
  name: string;
  category: 'ai' | 'mobile' | 'web' | 'backend' | 'datascience' | 'languages';
  level: number; // 0 - 100
  tier: 'core' | 'hub' | 'leaf';
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: string[]; // ids of connected nodes
  description: string;
  projects: string[];
}

interface ElectricalImpulse {
  fromId: string;
  toId: string;
  progress: number;
  speed: number;
  color: string;
}

const CATEGORY_META = {
  ai: { label: 'AI, RAG & LLMs', color: '#CCFF00', glow: 'rgba(204, 255, 0, 0.6)' },
  mobile: { label: 'Mobile & Flutter', color: '#88aaff', glow: 'rgba(136, 170, 255, 0.6)' },
  web: { label: 'Web & Frontend', color: '#aaffcc', glow: 'rgba(170, 255, 204, 0.6)' },
  backend: { label: 'Backend & Systems', color: '#ff88aa', glow: 'rgba(255, 136, 170, 0.6)' },
  datascience: { label: 'Data Science & CV', color: '#ffcc66', glow: 'rgba(255, 204, 102, 0.6)' },
  languages: { label: 'Core Languages', color: '#d8b4fe', glow: 'rgba(216, 180, 254, 0.6)' },
};

const getTierLabel = (tier: 'core' | 'hub' | 'leaf') => {
  switch (tier) {
    case 'core':
      return 'Core Pillar';
    case 'hub':
      return 'Primary Specialization';
    case 'leaf':
      return 'Applied Production Stack';
  }
};

// Initial nodes data
const INITIAL_NODES: Omit<NeuronNode, 'x' | 'y' | 'vx' | 'vy'>[] = [
  // CENTRAL SOMA
  {
    id: 'soma',
    name: 'ROSHAN // CORE',
    category: 'ai',
    level: 100,
    tier: 'core',
    radius: 22,
    connections: ['hub_ai', 'hub_mobile', 'hub_web', 'hub_backend', 'hub_datascience', 'hub_languages'],
    description: 'Central Intelligence Hub synthesizing local LLMs, cross-platform mobile architecture, and distributed systems.',
    projects: ['IndicClaimVerifier', 'ProofMesh', 'GeoSeize', 'μFIFA 2026'],
  },

  // 1. AI HUB
  {
    id: 'hub_ai',
    name: 'AI & RAG Hub',
    category: 'ai',
    level: 96,
    tier: 'hub',
    radius: 15,
    connections: ['rag', 'ollama', 'langchain', 'pytorch', 'agentic_ai', 'nlp', 'faiss'],
    description: 'Core cognitive architecture specializing in Retrieval-Augmented Generation, local inference, and autonomous agents.',
    projects: ['IndicClaimVerifier', 'Customer Support Triage'],
  },
  {
    id: 'rag',
    name: 'RAG Pipelines',
    category: 'ai',
    level: 95,
    tier: 'leaf',
    radius: 10,
    connections: ['ollama', 'langchain', 'faiss'],
    description: 'Vector chunking, multi-stage retrieval, reranking, and context injection with domain-specific knowledge bases.',
    projects: ['IndicClaimVerifier', 'Software Doc Assistant'],
  },
  {
    id: 'ollama',
    name: 'Ollama & Local LLMs',
    category: 'ai',
    level: 92,
    tier: 'leaf',
    radius: 9,
    connections: ['qwen', 'rag'],
    description: 'Offline private LLM execution with Qwen and Llama models. Zero cloud latency for sensitive enterprise workflows.',
    projects: ['IndicClaimVerifier', 'Local RAG Bot'],
  },
  {
    id: 'qwen',
    name: 'Qwen & Open Models',
    category: 'ai',
    level: 88,
    tier: 'leaf',
    radius: 8,
    connections: ['ollama'],
    description: 'Fine-tuning & prompting open-weights multilingual models optimized for Indic dialect reasoning.',
    projects: ['IndicClaimVerifier'],
  },
  {
    id: 'langchain',
    name: 'LangChain & Agents',
    category: 'ai',
    level: 88,
    tier: 'leaf',
    radius: 9,
    connections: ['agentic_ai'],
    description: 'Chaining tools, stateful memory, and autonomous multi-agent task execution.',
    projects: ['Customer Support Triage', 'Software Doc Assistant'],
  },
  {
    id: 'agentic_ai',
    name: 'Agentic AI & MCP',
    category: 'ai',
    level: 84,
    tier: 'leaf',
    radius: 9,
    connections: ['hub_ai'],
    description: 'Tool use, Model Context Protocol integration, recursive reasoning loops, and multi-agent coordination.',
    projects: ['Customer Support Ticket Triage'],
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'ai',
    level: 82,
    tier: 'leaf',
    radius: 9,
    connections: ['hub_datascience'],
    description: 'Custom neural network architectures, loss function optimization, and tensor calculations.',
    projects: ['Automated Waste Classification'],
  },
  {
    id: 'faiss',
    name: 'FAISS & ChromaDB',
    category: 'ai',
    level: 90,
    tier: 'leaf',
    radius: 8,
    connections: ['rag'],
    description: 'High-speed approximate nearest neighbor vector indexing and similarity cosine search.',
    projects: ['IndicClaimVerifier'],
  },
  {
    id: 'nlp',
    name: 'NLP & Tokenization',
    category: 'ai',
    level: 86,
    tier: 'leaf',
    radius: 8,
    connections: ['hub_ai'],
    description: 'Multilingual text pre-processing, embedding generation, semantic similarity, and sentiment evaluation.',
    projects: ['IndicClaimVerifier'],
  },

  // 2. MOBILE & FLUTTER HUB
  {
    id: 'hub_mobile',
    name: 'Flutter Hub',
    category: 'mobile',
    level: 95,
    tier: 'hub',
    radius: 15,
    connections: ['dart', 'firebase', 'maps_api', 'state_mgmt', 'cross_platform', 'android_widget'],
    description: 'Production-grade cross-platform application development with smooth 60/120fps animations and native APIs.',
    projects: ['GeoSeize', 'Stress Level Detector', 'Karuthal', 'U & me'],
  },
  {
    id: 'firebase',
    name: 'Firebase & Firestore',
    category: 'mobile',
    level: 90,
    tier: 'leaf',
    radius: 9,
    connections: ['hub_mobile'],
    description: 'Real-time database sync, Auth, Cloud Functions, and push notification infrastructure.',
    projects: ['GeoSeize', 'U & me'],
  },
  {
    id: 'maps_api',
    name: 'Google Maps API',
    category: 'mobile',
    level: 92,
    tier: 'leaf',
    radius: 9,
    connections: ['hub_mobile'],
    description: 'Geospatial queries, live GPS polygon geofencing, territory conquest logic, and map clustering.',
    projects: ['GeoSeize'],
  },
  {
    id: 'state_mgmt',
    name: 'State Management',
    category: 'mobile',
    level: 90,
    tier: 'leaf',
    radius: 8,
    connections: ['hub_mobile'],
    description: 'Predictable reactive state architecture (Bloc, Provider, Riverpod) with clean separation of concerns.',
    projects: ['GeoSeize', 'Stress Level Detector'],
  },
  {
    id: 'cross_platform',
    name: 'Cross-Platform Build',
    category: 'mobile',
    level: 88,
    tier: 'leaf',
    radius: 8,
    connections: ['hub_mobile'],
    description: 'Deploying unified codebases seamlessly across Android, iOS, Web, and Desktop targets.',
    projects: ['Stress Level Detector'],
  },
  {
    id: 'android_widget',
    name: 'Android Widgets',
    category: 'mobile',
    level: 86,
    tier: 'leaf',
    radius: 8,
    connections: ['hub_mobile'],
    description: 'Native home-screen live widget integration with background worker sync.',
    projects: ['U & me'],
  },

  // 3. WEB & FRONTEND HUB
  {
    id: 'hub_web',
    name: 'Web & UI Hub',
    category: 'web',
    level: 92,
    tier: 'hub',
    radius: 14,
    connections: ['react', 'typescript', 'tailwind', 'threejs', 'uiux'],
    description: 'Crafting high-fidelity, cybernetic digital experiences with responsive layout dynamics and WebGL shaders.',
    projects: ['Portfolio', 'Nothing X Web', 'μLearn GECI'],
  },
  {
    id: 'react',
    name: 'React 19 & Next',
    category: 'web',
    level: 90,
    tier: 'leaf',
    radius: 9,
    connections: ['hub_web', 'typescript'],
    description: 'Modern component lifecycle, hooks, concurrent rendering, and server components.',
    projects: ['Portfolio', 'μLearn GECI'],
  },
  {
    id: 'threejs',
    name: 'Three.js & WebGL',
    category: 'web',
    level: 82,
    tier: 'leaf',
    radius: 8,
    connections: ['hub_web'],
    description: '3D particle clouds, interactive scene lighting, camera matrices, and real-time mesh shaders.',
    projects: ['Portfolio 3D Scene'],
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS v4',
    category: 'web',
    level: 94,
    tier: 'leaf',
    radius: 8,
    connections: ['hub_web'],
    description: 'Modern utility-first styling with custom theme definitions and hardware-accelerated animations.',
    projects: ['Portfolio', 'Nothing X Web'],
  },
  {
    id: 'uiux',
    name: 'Cyber UI & Design',
    category: 'web',
    level: 90,
    tier: 'leaf',
    radius: 8,
    connections: ['hub_web'],
    description: 'Futuristic HUD interfaces, sound-enhanced micro-interactions, and accessible typography.',
    projects: ['Nothing X Web', 'Portfolio'],
  },

  // 4. BACKEND & SYSTEMS HUB
  {
    id: 'hub_backend',
    name: 'Systems & Backend',
    category: 'backend',
    level: 88,
    tier: 'hub',
    radius: 14,
    connections: ['fastapi', 'rest_apis', 'databases', 'docker', 'git_actions'],
    description: 'Resilient APIs, cryptographic integrity frameworks, containerization, and automated CI/CD pipelines.',
    projects: ['ProofMesh', 'μFIFA 2026', 'μLearn CI/CD'],
  },
  {
    id: 'fastapi',
    name: 'FastAPI & Flask',
    category: 'backend',
    level: 88,
    tier: 'leaf',
    radius: 9,
    connections: ['hub_backend', 'python'],
    description: 'High-performance asynchronous Python REST backends with Pydantic validation.',
    projects: ['μFIFA 2026 Tournament Engine'],
  },
  {
    id: 'rest_apis',
    name: 'API Architecture',
    category: 'backend',
    level: 90,
    tier: 'leaf',
    radius: 8,
    connections: ['hub_backend'],
    description: 'RESTful endpoint design, rate limiting, token authentication, and WebSocket live feeds.',
    projects: ['GeoSeize API', 'μFIFA 2026'],
  },
  {
    id: 'databases',
    name: 'SQL & MongoDB',
    category: 'backend',
    level: 86,
    tier: 'leaf',
    radius: 8,
    connections: ['hub_backend'],
    description: 'Schema modeling, indexing, ACID transactions, and document storage.',
    projects: ['Academic Analytics', 'ProofMesh'],
  },
  {
    id: 'docker',
    name: 'Docker & DevOps',
    category: 'backend',
    level: 80,
    tier: 'leaf',
    radius: 8,
    connections: ['hub_backend', 'git_actions'],
    description: 'Containerized deployment setups, multi-stage Dockerfiles, and reproducible environments.',
    projects: ['μFIFA 2026 Engine'],
  },
  {
    id: 'git_actions',
    name: 'GitHub Actions CI/CD',
    category: 'backend',
    level: 88,
    tier: 'leaf',
    radius: 8,
    connections: ['hub_backend'],
    description: 'Automated continuous integration, test runners, artifact build pipelines, and production deployments.',
    projects: ['μLearn GECI Website'],
  },

  // 5. DATA SCIENCE & CV HUB
  {
    id: 'hub_datascience',
    name: 'Data Science & CV',
    category: 'datascience',
    level: 90,
    tier: 'hub',
    radius: 14,
    connections: ['opencv', 'numpy_pandas', 'scikit_learn', 'data_viz'],
    description: 'Machine learning classification, predictive statistical modeling, and real-time computer vision.',
    projects: ['Trace', 'Automated Waste Classification', 'Churn Analytics'],
  },
  {
    id: 'opencv',
    name: 'OpenCV & Gesture AI',
    category: 'datascience',
    level: 86,
    tier: 'leaf',
    radius: 9,
    connections: ['hub_datascience'],
    description: 'Real-time camera feed processing, contour detection, hand gesture landmark tracking, and vision triggers.',
    projects: ['Trace'],
  },
  {
    id: 'numpy_pandas',
    name: 'NumPy & Pandas',
    category: 'datascience',
    level: 92,
    tier: 'leaf',
    radius: 8,
    connections: ['hub_datascience'],
    description: 'High-dimensional array manipulation, vectorized operations, feature engineering, and data cleaning.',
    projects: ['Telecom Churn', 'Student Analytics'],
  },
  {
    id: 'scikit_learn',
    name: 'Scikit-Learn ML',
    category: 'datascience',
    level: 88,
    tier: 'leaf',
    radius: 8,
    connections: ['hub_datascience'],
    description: 'Supervised classification, regression, random forests, clustering, and cross-validation pipelines.',
    projects: ['Employee Attrition', 'Customer Churn'],
  },
  {
    id: 'data_viz',
    name: 'Data Analytics',
    category: 'datascience',
    level: 88,
    tier: 'leaf',
    radius: 8,
    connections: ['hub_datascience'],
    description: 'Statistical distribution plotting, correlation matrices, and executive metric dashboards.',
    projects: ['Workplace Analytics'],
  },

  // 6. CORE LANGUAGES HUB
  {
    id: 'hub_languages',
    name: 'Core Languages',
    category: 'languages',
    level: 94,
    tier: 'hub',
    radius: 14,
    connections: ['python', 'dart', 'cpp', 'typescript', 'c_lang', 'java'],
    description: 'Polyglot programming foundations spanning dynamic AI scripting to low-level systems and typed web engines.',
    projects: ['All Projects'],
  },
  {
    id: 'python',
    name: 'Python 3',
    category: 'languages',
    level: 96,
    tier: 'leaf',
    radius: 10,
    connections: ['hub_languages', 'hub_ai'],
    description: 'Primary weapon for AI, RAG, machine learning, backend microservices, and automation scripting.',
    projects: ['IndicClaimVerifier', 'ProofMesh', 'μFIFA 2026'],
  },
  {
    id: 'dart',
    name: 'Dart',
    category: 'languages',
    level: 94,
    tier: 'leaf',
    radius: 10,
    connections: ['hub_languages', 'hub_mobile'],
    description: 'Object-oriented language powering all cross-platform Flutter mobile applications and state machines.',
    projects: ['GeoSeize', 'Stress Level Detector', 'Karuthal', 'U & me'],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'languages',
    level: 90,
    tier: 'leaf',
    radius: 9,
    connections: ['hub_languages', 'hub_web'],
    description: 'Type-safe scalable JavaScript for resilient frontends, custom hooks, and full-stack web applications.',
    projects: ['Portfolio', 'Nothing X Web', 'Trace'],
  },
  {
    id: 'cpp',
    name: 'C / C++',
    category: 'languages',
    level: 85,
    tier: 'leaf',
    radius: 8,
    connections: ['hub_languages'],
    description: 'Data structures, algorithms, memory management, and competitive programming foundations.',
    projects: ['Academic Coursework @ GECI & IITG'],
  },
  {
    id: 'java',
    name: 'Java',
    category: 'languages',
    level: 82,
    tier: 'leaf',
    radius: 8,
    connections: ['hub_languages'],
    description: 'Object-oriented programming, design patterns, and Android platform internals.',
    projects: ['Academic Coursework'],
  },
];

interface NeuronSkillsNetworkProps {
  onNotify?: (msg: string) => void;
}

export default function NeuronSkillsNetwork({ onNotify }: NeuronSkillsNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedNode, setSelectedNode] = useState<NeuronNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<NeuronNode | null>(null);
  const [viewMode, setViewMode] = useState<'network' | 'grid'>('network');

  const nodesRef = useRef<NeuronNode[]>([]);
  const impulsesRef = useRef<ElectricalImpulse[]>([]);
  const animationFrameRef = useRef<number>(0);
  const mousePosRef = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });

  const spawnImpulses = useCallback((count: number) => {
    const newImpulses: ElectricalImpulse[] = [];
    const nodes = nodesRef.current;
    if (nodes.length < 2) return;

    for (let i = 0; i < count; i++) {
      const fromNode = nodes[Math.floor(Math.random() * nodes.length)];
      if (fromNode.connections.length > 0) {
        const toId = fromNode.connections[Math.floor(Math.random() * fromNode.connections.length)];
        const categoryColor = CATEGORY_META[fromNode.category]?.color || '#CCFF00';
        newImpulses.push({
          fromId: fromNode.id,
          toId,
          progress: Math.random(),
          speed: 0.006 + Math.random() * 0.012,
          color: categoryColor,
        });
      }
    }
    impulsesRef.current = newImpulses;
  }, []);

  // Initialize nodes positions in organic cluster arrangement around central soma
  const initializeNodes = useCallback((width: number, height: number) => {
    const cx = width / 2;
    const cy = height / 2;

    const clusterAngles: Record<string, number> = {
      ai: -Math.PI / 2, // Top (12 o'clock)
      mobile: -Math.PI / 6, // Top-Right (2 o'clock)
      web: Math.PI / 6, // Bottom-Right (4 o'clock)
      backend: Math.PI / 2, // Bottom (6 o'clock)
      datascience: (5 * Math.PI) / 6, // Bottom-Left (8 o'clock)
      languages: (-5 * Math.PI) / 6, // Top-Left (10 o'clock)
    };

    const initialNodes: NeuronNode[] = INITIAL_NODES.map((raw) => {
      let x = cx;
      let y = cy;

      if (raw.id === 'soma') {
        x = cx;
        y = cy;
      } else if (raw.tier === 'hub') {
        const angle = clusterAngles[raw.category] || 0;
        const dist = Math.min(width, height) * 0.28;
        x = cx + Math.cos(angle) * dist;
        y = cy + Math.sin(angle) * dist;
      } else {
        // Leaf nodes orbit around their hub
        const baseAngle = clusterAngles[raw.category] || 0;
        const leafAngle = baseAngle + (Math.random() - 0.5) * 1.0;
        const dist = Math.min(width, height) * (0.36 + Math.random() * 0.12);
        x = cx + Math.cos(leafAngle) * dist;
        y = cy + Math.sin(leafAngle) * dist;
      }

      return {
        ...raw,
        x,
        y,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      };
    });

    nodesRef.current = initialNodes;

    // Pre-populate electrical impulses
    spawnImpulses(12);
  }, [spawnImpulses]);

  // Trigger high-intensity electrical wave
  const pulseElectricalWave = () => {
    sound.playClick();
    spawnImpulses(35);
    if (onNotify) onNotify('⚡ Synaptic wave discharged across neural network!');
  };

  // Canvas loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let containerW = containerRef.current?.clientWidth || window.innerWidth;
    let containerH = 620;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = containerW * dpr;
    canvas.height = containerH * dpr;
    canvas.style.width = `${containerW}px`;
    canvas.style.height = `${containerH}px`;
    ctx.scale(dpr, dpr);

    initializeNodes(containerW, containerH);

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, containerW, containerH);

      const nodes = nodesRef.current;
      const impulses = impulsesRef.current;

      // Soft background cyber grid
      ctx.strokeStyle = 'rgba(136, 170, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < containerW; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, containerH);
        ctx.stroke();
      }
      for (let y = 0; y < containerH; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(containerW, y);
        ctx.stroke();
      }

      // Check reduced motion preference
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Physics: gentle floating organic drift + boundary constraints (skipped if reduced motion)
      if (!prefersReducedMotion) {
        nodes.forEach((node) => {
          if (node.id !== 'soma') {
            node.x += node.vx + Math.sin(time + node.radius) * 0.15;
            node.y += node.vy + Math.cos(time + node.radius) * 0.15;

            // Keep in bounds
            const pad = 40;
            if (node.x < pad) { node.x = pad; node.vx *= -1; }
            if (node.x > containerW - pad) { node.x = containerW - pad; node.vx *= -1; }
            if (node.y < pad) { node.y = pad; node.vy *= -1; }
            if (node.y > containerH - pad) { node.y = containerH - pad; node.vy *= -1; }
          }
        });
      }

      // Map lookup
      const nodeMap = new Map<string, NeuronNode>();
      nodes.forEach((n) => nodeMap.set(n.id, n));

      // 1. Draw Synapses (Axon & Dendrite connections)
      nodes.forEach((node) => {
        const isFiltered = activeFilter !== 'all' && node.category !== activeFilter && node.id !== 'soma';

        node.connections.forEach((targetId) => {
          const target = nodeMap.get(targetId);
          if (!target) return;

          const isConnectionActive =
            hoveredNode && (hoveredNode.id === node.id || hoveredNode.id === target.id);
          const isSelectedActive =
            selectedNode && (selectedNode.id === node.id || selectedNode.id === target.id);

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);

          // Subtle organic curvature
          const midX = (node.x + target.x) / 2 + Math.sin(time + node.x * 0.01) * 4;
          const midY = (node.y + target.y) / 2 + Math.cos(time + node.y * 0.01) * 4;
          ctx.quadraticCurveTo(midX, midY, target.x, target.y);

          if (isSelectedActive) {
            ctx.strokeStyle = '#CCFF00';
            ctx.lineWidth = 2.2;
            ctx.shadowColor = '#CCFF00';
            ctx.shadowBlur = 12;
          } else if (isConnectionActive) {
            ctx.strokeStyle = 'rgba(204, 255, 0, 0.7)';
            ctx.lineWidth = 1.8;
            ctx.shadowColor = 'rgba(204, 255, 0, 0.5)';
            ctx.shadowBlur = 8;
          } else if (isFiltered) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
            ctx.lineWidth = 0.5;
            ctx.shadowBlur = 0;
          } else {
            const catColor = CATEGORY_META[node.category]?.color || '#88aaff';
            ctx.strokeStyle = `${catColor}20`; // translucent
            ctx.lineWidth = node.tier === 'core' || target.tier === 'core' ? 1.4 : 0.8;
            ctx.shadowBlur = 0;
          }

          ctx.stroke();
          ctx.shadowBlur = 0; // reset
        });
      });

      // 2. Draw Moving Electrical Impulses (Action Potentials)
      for (let i = impulses.length - 1; i >= 0; i--) {
        const impulse = impulses[i];
        const from = nodeMap.get(impulse.fromId);
        const to = nodeMap.get(impulse.toId);

        if (!from || !to) {
          impulses.splice(i, 1);
          continue;
        }

        impulse.progress += impulse.speed;
        if (impulse.progress >= 1) {
          // Re-spawn or cycle
          impulse.progress = 0;
          impulse.fromId = impulse.toId;
          const nextTargets = to.connections;
          if (nextTargets.length > 0) {
            impulse.toId = nextTargets[Math.floor(Math.random() * nextTargets.length)];
          } else {
            impulse.toId = 'soma';
          }
        }

        // Interpolate along curve
        const t = impulse.progress;
        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2;
        const px = (1 - t) * (1 - t) * from.x + 2 * (1 - t) * t * midX + t * t * to.x;
        const py = (1 - t) * (1 - t) * from.y + 2 * (1 - t) * t * midY + t * t * to.y;

        // Draw glowing spark
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = impulse.color;
        ctx.shadowColor = impulse.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 3. Draw Neurons (Nodes)
      nodes.forEach((node) => {
        const isHovered = hoveredNode?.id === node.id;
        const isSelected = selectedNode?.id === node.id;
        const isFiltered = activeFilter !== 'all' && node.category !== activeFilter && node.id !== 'soma';

        const catMeta = CATEGORY_META[node.category] || { color: '#ffffff', glow: 'rgba(255,255,255,0.3)' };
        const radius = isSelected ? node.radius * 1.3 : isHovered ? node.radius * 1.2 : node.radius;

        // Outer synaptic glow aura
        if (isSelected || isHovered || node.tier === 'core') {
          const auraRadius = radius * (1.8 + Math.sin(time * 3 + node.radius) * 0.2);
          const gradient = ctx.createRadialGradient(node.x, node.y, radius * 0.5, node.x, node.y, auraRadius);
          gradient.addColorStop(0, catMeta.color);
          gradient.addColorStop(1, 'transparent');

          ctx.beginPath();
          ctx.arc(node.x, node.y, auraRadius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.globalAlpha = isSelected ? 0.45 : isHovered ? 0.35 : 0.2;
          ctx.fill();
          ctx.globalAlpha = 1;
        }

        // Neuron Body
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);

        if (isFiltered) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        } else {
          ctx.fillStyle = node.tier === 'core' ? '#030014' : '#0a0a1a';
          ctx.strokeStyle = isSelected ? '#CCFF00' : isHovered ? catMeta.color : `${catMeta.color}aa`;
        }

        ctx.lineWidth = node.tier === 'core' ? 3 : node.tier === 'hub' ? 2 : 1.5;
        ctx.fill();
        ctx.stroke();

        // Inner glowing nucleus
        ctx.beginPath();
        const innerRadius = radius * (node.tier === 'core' ? 0.45 : 0.4);
        ctx.arc(node.x, node.y, innerRadius, 0, Math.PI * 2);
        ctx.fillStyle = isFiltered ? 'rgba(255,255,255,0.1)' : catMeta.color;
        ctx.fill();

        // Node Label
        const showLabel = node.tier !== 'leaf' || isHovered || isSelected || activeFilter === node.category;
        if (showLabel && !isFiltered) {
          ctx.font = `${node.tier === 'core' ? 'bold 11px' : node.tier === 'hub' ? '600 10px' : '9px'} "IBM Plex Mono", monospace`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';

          ctx.fillStyle = isSelected ? '#CCFF00' : isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.7)';
          ctx.fillText(node.name, node.x, node.y + radius + 5);

          // Proficiency badge on hub or selected
          if (isSelected || isHovered) {
            ctx.font = '8px "IBM Plex Mono", monospace';
            ctx.fillStyle = '#CCFF00';
            ctx.fillText(`${node.level}% SYNAPSE`, node.x, node.y + radius + 17);
          }
        }
      });

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      mousePosRef.current = { x: mx, y: my };

      // Find hovered node
      let found: NeuronNode | null = null;
      for (const node of nodesRef.current) {
        const dx = node.x - mx;
        const dy = node.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist <= node.radius + 8) {
          found = node;
          break;
        }
      }

      if (found !== hoveredNode) {
        if (found) sound.playHover();
        setHoveredNode(found);
      }
    };

    const handleClick = () => {
      if (hoveredNode) {
        sound.playClick();
        setSelectedNode((prev) => (prev?.id === hoveredNode.id ? null : hoveredNode));
      }
    };

    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const nw = containerRef.current.clientWidth;
      const nh = 620;
      containerW = nw;
      containerH = nh;
      canvas.width = nw * dpr;
      canvas.height = nh * dpr;
      canvas.style.width = `${nw}px`;
      canvas.style.height = `${nh}px`;
      ctx.scale(dpr, dpr);
      initializeNodes(nw, nh);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [initializeNodes, activeFilter, hoveredNode, selectedNode]);

  // Set default selected node for initial preview
  useEffect(() => {
    if (!selectedNode && nodesRef.current.length > 0) {
      const aiHub = nodesRef.current.find((n) => n.id === 'hub_ai');
      if (aiHub) setSelectedNode(aiHub);
    }
  }, [selectedNode]);

  return (
    <section id="skills" className="relative py-24 px-6 md:px-12 lg:px-20 border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(204,255,0,0.04) 0%, rgba(136,170,255,0.03) 40%, transparent 70%)',
        }}
      />

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-[#CCFF00] tracking-[0.3em] uppercase">
              <Brain size={14} className="text-[#CCFF00]" />
              <span>COGNITIVE ARCHITECTURE &amp; SYNAPSES</span>
            </div>
            <h2
              className="text-4xl md:text-6xl text-white uppercase font-bold tracking-tight"
              style={{ fontFamily: '"Anton", sans-serif', lineHeight: 1.1 }}
            >
              NEURON SKILLS <span className="text-[#CCFF00]">NETWORK</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg mt-4 max-w-2xl font-sans leading-relaxed">
              An interactive biological neural model representing competencies as interconnected cognitive lobes.
              Hover over neurons to trace synaptic pathways or click any node for architectural telemetry.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={pulseElectricalWave}
              className="flex items-center gap-2 px-4 py-2 border border-[#CCFF00]/40 text-[#CCFF00] text-xs font-mono tracking-wider uppercase rounded-sm hover:bg-[#CCFF00]/10 transition-colors"
            >
              <Zap size={13} className="text-[#CCFF00] animate-pulse" />
              <span>FIRE SYNAPSES</span>
            </button>

            {/* View Mode Toggle */}
            <div className="flex items-center border border-white/10 rounded-sm p-0.5 bg-white/[0.02]">
              <button
                onClick={() => {
                  sound.playClick();
                  setViewMode('network');
                }}
                className={`px-3 py-1.5 text-xs font-mono rounded-sm transition-all ${
                  viewMode === 'network'
                    ? 'bg-[#CCFF00] text-black font-semibold'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                SYNAPSE CANVAS
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setViewMode('grid');
                }}
                className={`px-3 py-1.5 text-xs font-mono rounded-sm transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[#CCFF00] text-black font-semibold'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                CLUSTER MATRIX
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto no-scrollbar pb-2">
          <span className="text-[10px] text-white/30 font-mono tracking-widest uppercase flex-shrink-0 mr-2">
            LOBE FILTER:
          </span>
          <button
            onClick={() => {
              sound.playClick();
              setActiveFilter('all');
            }}
            className={`px-3 py-1 text-xs font-mono rounded-full border transition-all select-none whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-[#CCFF00] text-black border-[#CCFF00] font-bold'
                : 'border-white/10 text-white/50 hover:border-white/30'
            }`}
          >
            ALL LOBES (35 NODES)
          </button>
          {Object.entries(CATEGORY_META).map(([key, meta]) => {
            const isActive = activeFilter === key;
            return (
              <button
                key={key}
                onClick={() => {
                  sound.playClick();
                  setActiveFilter(isActive ? 'all' : key);
                }}
                className={`px-3 py-1 text-xs font-mono rounded-full border transition-all select-none whitespace-nowrap flex items-center gap-1.5`}
                style={{
                  borderColor: isActive ? meta.color : 'rgba(255,255,255,0.1)',
                  background: isActive ? `${meta.color}25` : 'transparent',
                  color: isActive ? meta.color : 'rgba(255,255,255,0.6)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: meta.color }}
                />
                <span>{meta.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Display */}
      <div className="relative max-w-7xl mx-auto">
        {viewMode === 'network' ? (
          <div
            ref={containerRef}
            className="relative w-full rounded-xl border border-white/[0.08] overflow-hidden"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(10,16,36,0.6) 0%, rgba(3,0,20,0.95) 100%)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            }}
          >
            {/* Top HUD bar */}
            <div className="absolute top-4 left-6 z-20 flex items-center gap-3 text-white/40 text-[10px] font-mono pointer-events-none">
              <span className="inline-flex items-center gap-1.5 text-[#CCFF00]">
                <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
                NEURAL SIMULATION: ACTIVE
              </span>
              <span>·</span>
              <span>6 PRIMARY LOBES</span>
              <span>·</span>
              <span>35 SYNAPSE NODES</span>
            </div>

            <div className="absolute top-4 right-6 z-20 text-white/30 text-[10px] font-mono pointer-events-none hidden sm:block">
              CLICK A NEURON TO INSPECT TELEMETRY
            </div>

            {/* Canvas */}
            <canvas
              ref={canvasRef}
              className="cursor-crosshair block w-full"
              style={{ minHeight: '620px' }}
            />

            {/* Selected Neuron Telemetry Panel (Bottom Floating HUD) */}
            <AnimatePresence>
              {selectedNode && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="absolute bottom-5 left-5 right-5 md:left-auto md:right-5 md:w-96 z-30 p-5 rounded-lg border border-white/15 backdrop-blur-xl shadow-2xl"
                  style={{
                    background: 'rgba(10, 12, 28, 0.92)',
                    boxShadow: '0 0 40px rgba(0,0,0,0.8), inset 0 0 20px rgba(204,255,0,0.05)',
                  }}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          background: CATEGORY_META[selectedNode.category]?.color || '#CCFF00',
                          boxShadow: `0 0 10px ${CATEGORY_META[selectedNode.category]?.color || '#CCFF00'}`,
                        }}
                      />
                      <span
                        className="text-[10px] tracking-widest font-mono uppercase font-bold"
                        style={{ color: CATEGORY_META[selectedNode.category]?.color || '#CCFF00' }}
                      >
                        {CATEGORY_META[selectedNode.category]?.label}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedNode(null)}
                      className="text-white/40 hover:text-white text-xs font-mono"
                    >
                      ✕
                    </button>
                  </div>

                  <h3
                    className="text-white text-2xl font-bold tracking-wide leading-tight mb-2.5"
                    style={{ fontFamily: '"Anton", sans-serif' }}
                  >
                    {selectedNode.name}
                  </h3>

                  <p className="text-white/80 text-sm leading-relaxed mb-5 font-sans" style={{ lineHeight: 1.75 }}>
                    {selectedNode.description}
                  </p>

                  {/* Competency Level Badge */}
                  <div className="mb-4 p-3 rounded-lg border border-white/10 bg-white/[0.03]">
                    <div className="flex justify-between items-center text-[10px] font-mono text-white/50 mb-1">
                      <span>COMPETENCY LEVEL</span>
                      <span className="text-[#CCFF00] font-bold uppercase tracking-wider">
                        {getTierLabel(selectedNode.tier)}
                      </span>
                    </div>
                    <div className="text-xs text-white/75 font-mono leading-relaxed">
                      {selectedNode.tier === 'core' &&
                        'Primary architectural pillar integrated across flagship systems.'}
                      {selectedNode.tier === 'hub' &&
                        'Key domain capability with extensive hands-on system building and research.'}
                      {selectedNode.tier === 'leaf' &&
                        'Production-ready framework actively applied in software and AI projects.'}
                    </div>
                  </div>

                  {/* Connected Projects */}
                  {selectedNode.projects.length > 0 && (
                    <div className="pt-3 border-t border-white/[0.08]">
                      <div className="text-[10px] text-white/40 font-mono tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
                        <Cpu size={11} className="text-[#CCFF00]" />
                        <span>INTEGRATED IN FLAGSHIP PROJECTS:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedNode.projects.map((proj) => (
                          <span
                            key={proj}
                            className="text-[10px] px-2 py-0.5 rounded font-mono border border-white/10 text-white/80 bg-white/[0.03]"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          /* Structured Cluster Matrix View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(CATEGORY_META).map(([categoryKey, meta]) => {
              const clusterNodes = INITIAL_NODES.filter(
                (n) => n.category === categoryKey && n.id !== 'soma'
              );

              return (
                <motion.div
                  key={categoryKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl border border-white/[0.08] relative group hover:border-white/20 transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                  }}
                >
                  {/* Neon Top line accent */}
                  <div
                    className="absolute top-0 left-6 right-6 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${meta.color}, transparent)`,
                    }}
                  />

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: meta.color }}
                      />
                      <h3
                        className="text-white text-lg font-bold uppercase tracking-wide"
                        style={{ fontFamily: '"Anton", sans-serif' }}
                      >
                        {meta.label}
                      </h3>
                    </div>
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded"
                      style={{ background: `${meta.color}15`, color: meta.color }}
                    >
                      {clusterNodes.length} SKILLS
                    </span>
                  </div>

                  <div className="space-y-3">
                    {clusterNodes.map((node) => (
                      <div
                        key={node.id}
                        onClick={() => {
                          sound.playClick();
                          setSelectedNode({ ...node, x: 0, y: 0, vx: 0, vy: 0 });
                          setViewMode('network');
                        }}
                        className="p-2.5 rounded border border-white/5 bg-white/[0.015] hover:border-white/15 hover:bg-white/[0.04] transition-all cursor-pointer group/item"
                      >
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-white/90 font-mono font-medium group-hover/item:text-[#CCFF00] transition-colors">
                            {node.name}
                          </span>
                          <span className="text-[10px] font-mono text-[#CCFF00]/80 px-2 py-0.5 rounded bg-white/[0.04] border border-white/5">
                            {getTierLabel(node.tier)}
                          </span>
                        </div>
                        <p className="text-[11px] text-white/50 mt-1 leading-snug font-sans line-clamp-1">
                          {node.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
