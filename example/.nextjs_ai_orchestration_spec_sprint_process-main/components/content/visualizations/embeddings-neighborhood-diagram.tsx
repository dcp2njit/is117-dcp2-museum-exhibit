export function EmbeddingsNeighborhoodDiagram() {
  return (
    <figure
      className="visualization-card"
      aria-labelledby="embeddings-diagram-title"
    >
      <svg
        viewBox="0 0 760 420"
        role="img"
        aria-labelledby="embeddings-diagram-title embeddings-diagram-desc"
        className="visualization-svg"
      >
        <title id="embeddings-diagram-title">
          Embeddings neighborhood diagram
        </title>
        <desc id="embeddings-diagram-desc">
          A schematic embeddings workflow showing a user query becoming a query
          vector, comparing against stored document vectors, retrieving nearest
          neighbors, and passing retrieved context into an LLM response.
        </desc>

        <defs>
          <marker
            id="viz-arrow"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" className="viz-arrow-head" />
          </marker>
        </defs>

        <rect
          x="36"
          y="42"
          width="146"
          height="62"
          rx="18"
          className="viz-node"
        />
        <text x="109" y="68" textAnchor="middle" className="viz-node__label">
          User query
        </text>
        <text x="109" y="89" textAnchor="middle" className="viz-node__meta">
          find similar notes
        </text>

        <rect
          x="228"
          y="42"
          width="168"
          height="62"
          rx="18"
          className="viz-node"
        />
        <text x="312" y="68" textAnchor="middle" className="viz-node__label">
          Embedding model
        </text>
        <text x="312" y="89" textAnchor="middle" className="viz-node__meta">
          maps text to coordinates
        </text>

        <rect
          x="442"
          y="42"
          width="132"
          height="62"
          rx="18"
          className="viz-node viz-node--accent"
        />
        <text x="508" y="68" textAnchor="middle" className="viz-node__label">
          Query vector
        </text>
        <text x="508" y="89" textAnchor="middle" className="viz-node__meta">
          [0.12, -0.40, ...]
        </text>

        <path d="M 182 73 L 228 73" className="viz-link" />
        <path d="M 396 73 L 442 73" className="viz-link" />

        <rect
          x="498"
          y="150"
          width="214"
          height="188"
          rx="26"
          className="viz-store"
        />
        <text x="605" y="180" textAnchor="middle" className="viz-store__title">
          Vector store
        </text>
        <circle
          cx="558"
          cy="238"
          r="20"
          className="viz-point viz-point--query"
        />
        <circle
          cx="606"
          cy="214"
          r="16"
          className="viz-point viz-point--near"
        />
        <circle
          cx="648"
          cy="252"
          r="18"
          className="viz-point viz-point--near"
        />
        <circle
          cx="616"
          cy="284"
          r="15"
          className="viz-point viz-point--near"
        />
        <circle cx="684" cy="206" r="14" className="viz-point" />
        <circle cx="543" cy="294" r="13" className="viz-point" />
        <circle cx="667" cy="300" r="12" className="viz-point" />
        <path d="M 558 238 L 606 214" className="viz-neighborhood" />
        <path d="M 558 238 L 648 252" className="viz-neighborhood" />
        <path d="M 558 238 L 616 284" className="viz-neighborhood" />
        <text x="605" y="326" textAnchor="middle" className="viz-store__meta">
          nearest neighbors cluster around the query
        </text>

        <path d="M 542 104 L 578 150" className="viz-link" />

        <rect
          x="46"
          y="170"
          width="184"
          height="56"
          rx="16"
          className="viz-node"
        />
        <text x="138" y="194" textAnchor="middle" className="viz-node__label">
          Retrieved chunks
        </text>
        <text x="138" y="214" textAnchor="middle" className="viz-node__meta">
          doc A, doc B, doc C
        </text>

        <rect
          x="274"
          y="170"
          width="172"
          height="56"
          rx="16"
          className="viz-node"
        />
        <text x="360" y="194" textAnchor="middle" className="viz-node__label">
          Context bundle
        </text>
        <text x="360" y="214" textAnchor="middle" className="viz-node__meta">
          ranked passages + query
        </text>

        <rect
          x="228"
          y="294"
          width="264"
          height="72"
          rx="20"
          className="viz-node viz-node--accent"
        />
        <text x="360" y="323" textAnchor="middle" className="viz-node__label">
          LLM response
        </text>
        <text x="360" y="346" textAnchor="middle" className="viz-node__meta">
          retrieval uses vector similarity before generation
        </text>

        <path d="M 498 240 C 446 240, 432 198, 446 198" className="viz-link" />
        <path d="M 230 198 L 274 198" className="viz-link" />
        <path d="M 360 226 L 360 294" className="viz-link" />
      </svg>
      <figcaption className="visualization-caption">
        Schematic, not literal. The goal is to show why embeddings are useful:
        learned coordinates make nearest-neighbor retrieval possible before the
        language model writes an answer.
      </figcaption>
    </figure>
  );
}
