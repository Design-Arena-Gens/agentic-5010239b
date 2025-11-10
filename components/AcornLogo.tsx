export default function AcornLogo() {
  return (
    <figure className="logo">
      <svg
        role="img"
        aria-labelledby="acornTitle acornDesc"
        viewBox="0 0 240 280"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="acornTitle">Oak &amp; Kin Family Crest</title>
        <desc id="acornDesc">
          Stylized acorn resting within a protective oak leaf crest to
          symbolize family unity and growth.
        </desc>
        <defs>
          <linearGradient id="capGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#714427" />
            <stop offset="100%" stopColor="#4a2d17" />
          </linearGradient>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#dcbf7c" />
            <stop offset="100%" stopColor="#9c7238" />
          </linearGradient>
          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3f6f3b" />
            <stop offset="100%" stopColor="#284927" />
          </linearGradient>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="10" stdDeviation="12" floodOpacity="0.2" />
          </filter>
        </defs>
        <g filter="url(#softShadow)">
          <path
            d="M120 260c-62 0-96-45-96-98 0-47 30-87 74-99 0-26 19-46 22-48 3 2 22 22 22 48 44 12 74 52 74 99 0 53-34 98-96 98Z"
            fill="url(#leafGradient)"
            stroke="#1d301d"
            strokeWidth="6"
          />
          <path
            d="M120 75c-28 0-56 5-56 20 0 6 5 12 12 15-5 11-8 24-8 38 0 35 21 68 52 68s52-33 52-68c0-14-3-27-8-38 7-3 12-9 12-15 0-15-28-20-56-20Z"
            fill="url(#bodyGradient)"
            stroke="#6f4a25"
            strokeWidth="5"
          />
          <path
            d="M68 95c15 7 34 11 52 11s37-4 52-11c0 0 4-3 4-10 0-15-28-25-56-25s-56 10-56 25c0 7 4 10 4 10Z"
            fill="url(#capGradient)"
            stroke="#3a240f"
            strokeWidth="5"
          />
          <path
            d="M116 40c-2-12 10-23 14-27"
            stroke="#eedfbf"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.4"
          />
          <path
            d="M120 190c-16 0-28-14-28-40"
            stroke="#8e632f"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M120 190c16 0 28-14 28-40"
            stroke="#8e632f"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M99 135c14 5 28 5 42 0"
            stroke="#f4e7c9"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.35"
          />
        </g>
      </svg>
      <figcaption>
        Oakleaf crest cradling an acorn core—heritage, resilience, kinship.
      </figcaption>
    </figure>
  );
}
