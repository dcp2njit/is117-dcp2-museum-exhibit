export function InterpretabilityGapDiagram() {
  return (
    <figure
      className="visualization-card"
      aria-labelledby="interpretability-gap-title"
    >
      <svg
        viewBox="0 0 760 380"
        role="img"
        aria-labelledby="interpretability-gap-title interpretability-gap-desc"
        className="visualization-svg"
      >
        <title id="interpretability-gap-title">
          Interpretability gap diagram
        </title>
        <desc id="interpretability-gap-desc">
          A schematic showing training and scaling leading to strong observed
          behavior and public deployment, while interpretability research yields
          partial insight but not full mechanistic understanding.
        </desc>

        <defs>
          <marker
            id="viz-arrow-gap"
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
          x="42"
          y="58"
          width="190"
          height="72"
          rx="20"
          className="viz-node"
        />
        <text x="137" y="88" textAnchor="middle" className="viz-node__label">
          Training and scaling
        </text>
        <text x="137" y="111" textAnchor="middle" className="viz-node__meta">
          data, compute, optimization
        </text>

        <rect
          x="286"
          y="58"
          width="192"
          height="72"
          rx="20"
          className="viz-node viz-node--accent"
        />
        <text x="382" y="88" textAnchor="middle" className="viz-node__label">
          Strong observed behavior
        </text>
        <text x="382" y="111" textAnchor="middle" className="viz-node__meta">
          useful outputs, benchmarks, fluency
        </text>

        <rect
          x="532"
          y="58"
          width="188"
          height="72"
          rx="20"
          className="viz-node"
        />
        <text x="626" y="88" textAnchor="middle" className="viz-node__label">
          Public deployment
        </text>
        <text x="626" y="111" textAnchor="middle" className="viz-node__meta">
          search, chat, coding, classrooms
        </text>

        <path d="M 232 94 L 286 94" className="viz-link viz-link--gap" />
        <path d="M 478 94 L 532 94" className="viz-link viz-link--gap" />

        <rect
          x="116"
          y="220"
          width="208"
          height="72"
          rx="20"
          className="viz-node"
        />
        <text x="220" y="250" textAnchor="middle" className="viz-node__label">
          Interpretability research
        </text>
        <text x="220" y="273" textAnchor="middle" className="viz-node__meta">
          circuits, features, induction heads
        </text>

        <rect
          x="396"
          y="220"
          width="232"
          height="72"
          rx="20"
          className="viz-node viz-node--warning"
        />
        <text x="512" y="250" textAnchor="middle" className="viz-node__label">
          Partial mechanistic insight
        </text>
        <text x="512" y="273" textAnchor="middle" className="viz-node__meta">
          some circuits found, full account missing
        </text>

        <path d="M 220 130 L 220 220" className="viz-link viz-link--gap" />
        <path d="M 324 256 L 396 256" className="viz-link viz-link--gap" />

        <path
          d="M 626 130 C 626 188, 592 210, 584 220"
          className="viz-link viz-link--gap"
        />
        <path
          d="M 382 130 C 382 186, 446 208, 468 220"
          className="viz-link viz-link--gap"
        />

        <rect
          x="214"
          y="318"
          width="344"
          height="32"
          rx="14"
          className="viz-gap-band"
        />
        <text
          x="386"
          y="339"
          textAnchor="middle"
          className="viz-gap-band__label"
        >
          capability and deployment advance faster than full reverse engineering
        </text>
      </svg>
      <figcaption className="visualization-caption">
        This is the interpretability gap in plain language: model capability and
        public use can move ahead even while mechanistic understanding remains
        partial.
      </figcaption>
    </figure>
  );
}
