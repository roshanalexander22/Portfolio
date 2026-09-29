export default function FooterMarquee() {
  const TEXT =
    'ROSHAN ALEXANDER \u00a0//\u00a0 COMPUTER SCIENCE & AI \u00a0//\u00a0 IIT GUWAHATI \u00a0//\u00a0 GEC IDUKKI \u00a0//\u00a0 FLUTTER · PYTHON · AI/ML \u00a0//\u00a0 ';

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-20 overflow-hidden pointer-events-none"
      style={{ height: 'clamp(36px, 7vw, 88px)' }}
    >
      {/* Gradient fade left/right */}
      <div
        className="absolute inset-y-0 left-0 w-32 z-10"
        style={{ background: 'linear-gradient(to right, #030014, transparent)' }}
      />
      <div
        className="absolute inset-y-0 right-0 w-32 z-10"
        style={{ background: 'linear-gradient(to left, #030014, transparent)' }}
      />

      <div className="flex whitespace-nowrap marquee-track items-center h-full">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="flex-shrink-0 pr-4"
            style={{
              fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
              fontSize: 'clamp(22px, 5.5vw, 70px)',
              lineHeight: 1,
              WebkitTextStroke: '1px rgba(255,255,255,0.08)',
              color: 'transparent',
              opacity: 0.6,
            }}
          >
            {TEXT}
          </span>
        ))}
      </div>
    </div>
  );
}
