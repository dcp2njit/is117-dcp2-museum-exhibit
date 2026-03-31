export function LogicToAiDiagram() {
  return (
    <figure className="visualization-card" aria-labelledby="logic-to-ai-title">
      <svg
        viewBox="0 0 860 420"
        role="img"
        aria-labelledby="logic-to-ai-title logic-to-ai-desc"
        className="visualization-svg"
      >
        <title id="logic-to-ai-title">Logic to AI convergence diagram</title>
        <desc id="logic-to-ai-desc">
          A schematic showing Turing&apos;s computability work, Shannon&apos;s
          logic and information work, and McCulloch-Pitts neural abstraction
          converging into the Dartmouth naming moment.
        </desc>

        <defs>
          <marker
            id="viz-arrow-logic-to-ai"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#9f3f24" />
          </marker>
        </defs>

        <rect
          x="54"
          y="54"
          width="188"
          height="86"
          rx="20"
          className="viz-node"
        />
        <text x="148" y="84" textAnchor="middle" className="viz-node__label">
          Turing 1936
        </text>
        <text x="148" y="107" textAnchor="middle" className="viz-node__meta">
          computability
        </text>
        <text x="148" y="125" textAnchor="middle" className="viz-node__meta">
          rigorous procedure
        </text>

        <rect
          x="334"
          y="54"
          width="188"
          height="86"
          rx="20"
          className="viz-node"
        />
        <text x="428" y="84" textAnchor="middle" className="viz-node__label">
          Shannon 1938-1948
        </text>
        <text x="428" y="107" textAnchor="middle" className="viz-node__meta">
          logic in circuits
        </text>
        <text x="428" y="125" textAnchor="middle" className="viz-node__meta">
          information theory
        </text>

        <rect
          x="614"
          y="54"
          width="192"
          height="86"
          rx="20"
          className="viz-node"
        />
        <text x="710" y="84" textAnchor="middle" className="viz-node__label">
          McCulloch-Pitts 1943
        </text>
        <text x="710" y="107" textAnchor="middle" className="viz-node__meta">
          threshold neurons
        </text>
        <text x="710" y="125" textAnchor="middle" className="viz-node__meta">
          neural abstraction
        </text>

        <rect
          x="272"
          y="246"
          width="316"
          height="94"
          rx="24"
          className="viz-node viz-node--accent"
        />
        <text x="430" y="280" textAnchor="middle" className="viz-node__label">
          Dartmouth 1955-1956
        </text>
        <text x="430" y="304" textAnchor="middle" className="viz-node__meta">
          field formation
        </text>
        <text x="430" y="324" textAnchor="middle" className="viz-node__meta">
          AI named and consolidated
        </text>

        <path
          d="M 148 140 C 148 202, 250 222, 340 246"
          fill="none"
          stroke="#9f3f24"
          strokeWidth="3"
          strokeLinecap="round"
          markerEnd="url(#viz-arrow-logic-to-ai)"
        />
        <path
          d="M 428 140 L 428 246"
          fill="none"
          stroke="#9f3f24"
          strokeWidth="3"
          strokeLinecap="round"
          markerEnd="url(#viz-arrow-logic-to-ai)"
        />
        <path
          d="M 710 140 C 710 202, 606 222, 520 246"
          fill="none"
          stroke="#9f3f24"
          strokeWidth="3"
          strokeLinecap="round"
          markerEnd="url(#viz-arrow-logic-to-ai)"
        />

        <rect
          x="140"
          y="360"
          width="580"
          height="30"
          rx="14"
          className="viz-gap-band"
        />
        <text
          x="430"
          y="380"
          textAnchor="middle"
          className="viz-gap-band__label"
        >
          the field emerges from convergence across computation, engineering,
          and neural modeling
        </text>
      </svg>
      <figcaption className="visualization-caption">
        The point of this diagram is not that one node caused the others. It
        shows why Dartmouth works best as a naming moment: several earlier lines
        of work had already made the field intellectually possible.
      </figcaption>
    </figure>
  );
}
