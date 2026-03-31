export function FoundationModelTurningPointsDiagram() {
  return (
    <figure
      className="visualization-card"
      aria-labelledby="foundation-turning-points-title"
    >
      <svg
        viewBox="0 0 960 320"
        role="img"
        aria-labelledby="foundation-turning-points-title foundation-turning-points-desc"
        className="visualization-svg"
      >
        <title id="foundation-turning-points-title">
          Foundation-model turning points diagram
        </title>
        <desc id="foundation-turning-points-desc">
          A schematic lineage from neural probabilistic language models and
          transformers through GPT-3, foundation-model framing, instruction
          tuning, and public deployment.
        </desc>

        <defs>
          <marker
            id="viz-arrow-foundation"
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
          x="32"
          y="56"
          width="128"
          height="86"
          rx="20"
          className="viz-node"
        />
        <text x="96" y="84" textAnchor="middle" className="viz-node__label">
          2003
        </text>
        <text x="96" y="107" textAnchor="middle" className="viz-node__meta">
          neural language
        </text>
        <text x="96" y="125" textAnchor="middle" className="viz-node__meta">
          model
        </text>

        <rect
          x="188"
          y="56"
          width="128"
          height="86"
          rx="20"
          className="viz-node"
        />
        <text x="252" y="84" textAnchor="middle" className="viz-node__label">
          2017
        </text>
        <text x="252" y="107" textAnchor="middle" className="viz-node__meta">
          transformer
        </text>
        <text x="252" y="125" textAnchor="middle" className="viz-node__meta">
          architecture
        </text>

        <rect
          x="344"
          y="56"
          width="128"
          height="86"
          rx="20"
          className="viz-node viz-node--accent"
        />
        <text x="408" y="84" textAnchor="middle" className="viz-node__label">
          2020
        </text>
        <text x="408" y="107" textAnchor="middle" className="viz-node__meta">
          GPT-3 and
        </text>
        <text x="408" y="125" textAnchor="middle" className="viz-node__meta">
          scale effects
        </text>

        <rect
          x="500"
          y="56"
          width="128"
          height="86"
          rx="20"
          className="viz-node"
        />
        <text x="564" y="84" textAnchor="middle" className="viz-node__label">
          2021
        </text>
        <text x="564" y="107" textAnchor="middle" className="viz-node__meta">
          foundation model
        </text>
        <text x="564" y="125" textAnchor="middle" className="viz-node__meta">
          framing
        </text>

        <rect
          x="656"
          y="56"
          width="128"
          height="86"
          rx="20"
          className="viz-node"
        />
        <text x="720" y="84" textAnchor="middle" className="viz-node__label">
          2022
        </text>
        <text x="720" y="107" textAnchor="middle" className="viz-node__meta">
          instruction
        </text>
        <text x="720" y="125" textAnchor="middle" className="viz-node__meta">
          following
        </text>

        <rect
          x="812"
          y="56"
          width="116"
          height="86"
          rx="20"
          className="viz-node viz-node--warning"
        />
        <text x="870" y="84" textAnchor="middle" className="viz-node__label">
          2022-26
        </text>
        <text x="870" y="107" textAnchor="middle" className="viz-node__meta">
          public AI
        </text>
        <text x="870" y="125" textAnchor="middle" className="viz-node__meta">
          infrastructure
        </text>

        <path d="M 160 99 L 188 99" className="viz-link viz-link--foundation" />
        <path d="M 316 99 L 344 99" className="viz-link viz-link--foundation" />
        <path d="M 472 99 L 500 99" className="viz-link viz-link--foundation" />
        <path d="M 628 99 L 656 99" className="viz-link viz-link--foundation" />
        <path d="M 784 99 L 812 99" className="viz-link viz-link--foundation" />

        <rect
          x="148"
          y="198"
          width="664"
          height="76"
          rx="22"
          className="viz-gap-band"
        />
        <text
          x="480"
          y="229"
          textAnchor="middle"
          className="viz-gap-band__label"
        >
          one modern line of descent: learned representations to reusable base
          models to public deployment
        </text>
        <text x="480" y="251" textAnchor="middle" className="viz-store__meta">
          architecture, scale, framing, alignment, and interface each add a new
          historical layer
        </text>
      </svg>
      <figcaption className="visualization-caption">
        This diagram does not claim that one paper alone caused the modern era.
        It shows one compact line of continuity that students can hold in memory
        while reading the larger chronology.
      </figcaption>
    </figure>
  );
}
