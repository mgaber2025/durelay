export function ArchitectureDiagram() {
  return (
    <div
      className="architecture-diagram"
      role="img"
      aria-label="An inbound webhook enters Durelay and fans out in parallel to three destinations"
    >
      <div className="diagram-toolbar">
        <span className="diagram-status"><i /> relay endpoint</span>
        <span className="diagram-id">rel_01HQ7K</span>
      </div>
      <div className="diagram-canvas">
        <div className="diagram-node source-node">
          <span className="node-kicker">source</span>
          <strong>POST /events</strong>
          <small>HMAC verified</small>
        </div>
        <div className="connector connector-in" aria-hidden="true">
          <span className="request-pulse" />
        </div>
        <div className="diagram-node relay-node">
          <span className="relay-mark">D</span>
          <strong>Durelay</strong>
          <small>202 Accepted</small>
        </div>
        <svg className="fan-lines" viewBox="0 0 160 230" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 115 C58 115 64 30 160 30" />
          <path d="M0 115 H160" />
          <path d="M0 115 C58 115 64 200 160 200" />
          <circle className="fan-pulse pulse-one" cx="0" cy="115" r="4" />
          <circle className="fan-pulse pulse-two" cx="0" cy="115" r="4" />
          <circle className="fan-pulse pulse-three" cx="0" cy="115" r="4" />
        </svg>
        <div className="destination-stack">
          <div className="diagram-node destination-node">
            <span className="destination-dot cyan" />
            <span><strong>billing.service</strong><small>delivered · 204</small></span>
          </div>
          <div className="diagram-node destination-node">
            <span className="destination-dot blue" />
            <span><strong>audit.internal</strong><small>delivered · 200</small></span>
          </div>
          <div className="diagram-node destination-node">
            <span className="destination-dot violet" />
            <span><strong>customer.app</strong><small>retry 2 · queued</small></span>
          </div>
        </div>
      </div>
      <div className="diagram-footer">
        <span><i className="ok-dot" /> 2 delivered</span>
        <span><i className="retry-dot" /> 1 retrying</span>
        <span>parallel fan-out</span>
      </div>
    </div>
  );
}
