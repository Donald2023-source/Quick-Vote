
export function VotingAnimation() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        {/* Ballot Box */}
        <rect x="300" y="180" width="60" height="80" fill="#4a5568" rx="5" />
        <rect x="315" y="170" width="30" height="15" fill="#4a5568" rx="3" />
        <rect x="325" y="140" width="10" height="30" fill="#4a5568" />
        <rect x="320" y="200" width="20" height="10" fill="#e2e8f0" />

        {/* Ground */}
        <line x1="50" y1="260" x2="350" y2="260" stroke="#a0aec0" strokeWidth="2" />

        {/* Person */}
        <g id="person">
          {/* Head */}
          <circle cx="100" cy="150" r="15" fill="#2d3748" />

          {/* Body */}
          <line x1="100" y1="165" x2="100" y2="210" stroke="#2d3748" strokeWidth="4" />

          {/* Arms */}
          <line x1="100" y1="180" x2="80" y2="200" stroke="#2d3748" strokeWidth="3">
            <animate attributeName="x2" values="80;85;80" dur="1s" repeatCount="indefinite" />
          </line>
          <line x1="100" y1="180" x2="120" y2="200" stroke="#2d3748" strokeWidth="3">
            <animate attributeName="x2" values="120;115;120" dur="1s" repeatCount="indefinite" />
          </line>

          {/* Legs */}
          <line x1="100" y1="210" x2="90" y2="250" stroke="#2d3748" strokeWidth="3">
            <animate attributeName="x2" values="90;100;90" dur="1s" repeatCount="indefinite" />
          </line>
          <line x1="100" y1="210" x2="110" y2="250" stroke="#2d3748" strokeWidth="3">
            <animate attributeName="x2" values="110;100;110" dur="1s" repeatCount="indefinite" />
          </line>

          {/* Ballot */}
          <rect x="120" y="190" width="15" height="10" fill="#e2e8f0" />

          {/* Animation for the entire person */}
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="180 0"
            dur="5s"
            repeatCount="indefinite"
          />
        </g>

       
      </svg>
    </div>
  )
}

