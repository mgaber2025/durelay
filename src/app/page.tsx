import Link from "next/link";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const trustFacts = [
  ["≤50ms", "p95 accept time"],
  ["Parallel", "destination fan-out"],
  ["Per-tenant", "data isolation"],
  ["HMAC", "signed in and out"],
];

const securityItems = [
  {
    number: "01",
    title: "Signed requests, both directions",
    body: "Inbound requests are HMAC-verified before anything happens; outbound deliveries can be signed per destination so receivers can verify Durelay as the source.",
  },
  {
    number: "02",
    title: "Isolation by default",
    body: "Every tenant’s configuration, data, and traffic is kept separate at the platform level, not bolted on.",
  },
  {
    number: "03",
    title: "Scoped, short-lived credentials",
    body: "Direct Connect access is narrowly scoped per queue and expires on a schedule you control, not a standing secret.",
  },
];

const editionRows = [
  ["Max Relay Endpoints", "3", "25", "Unlimited"],
  ["Max Queue Endpoints", "1", "10", "Unlimited"],
  ["Max destinations per Relay Endpoint", "3", "10", "Unlimited"],
  ["Requests / minute per endpoint", "60", "600", "Negotiated"],
  ["Requests / month per account", "100,000", "2,000,000", "Negotiated"],
  ["Max queue token TTL", "1 hour", "12 hours", "24 hours"],
  ["Log retention", "7 days", "30 days", "90+ days"],
  ["Large payload add-on (up to 100MB)", "—", "Add-on", "Included"],
  ["Outbound destination signing", "—", "Included", "Included"],
  ["Idempotency keys", "—", "Included", "Included"],
];

const faqs = [
  [
    "What’s the difference between a Relay Endpoint and a Queue Endpoint?",
    "A Relay Endpoint fans a single inbound request out to multiple outbound HTTP destinations. A Queue Endpoint writes the inbound request straight into a dedicated, durable queue instead of calling anything directly.",
  ],
  [
    "How fast is delivery?",
    "Requests are accepted and verified in well under 50ms at the 95th percentile. Fan-out to your destinations happens in parallel afterward, so five destinations resolve about as fast as one.",
  ],
  [
    "What happens if a destination is down?",
    "Durelay retries automatically on a backoff schedule and keeps a live, inspectable log with manual retry available for anything that still fails.",
  ],
  [
    "Is my data isolated from other tenants?",
    "Yes. Isolation is enforced at the platform level for every tenant, by default.",
  ],
  [
    "Can I skip the relay and connect directly to my queue?",
    "Yes — Direct Connect issues short-lived, scoped credentials so your application can read and write a Queue Endpoint’s queue directly over the wire.",
  ],
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero section-grid" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span /> Webhook infrastructure</p>
              {/* A/B option: The webhook relay layer built to never drop a delivery. */}
              {/* A/B option: Webhook delivery that doesn't flinch. */}
              <h1 id="hero-title">Relay webhooks.<br /><span>Reliably.</span> At scale.</h1>
              <p className="hero-description">
                Durelay accepts, verifies, and delivers webhook traffic in milliseconds — then keeps retrying until it lands. One relay layer for every tenant, every destination, every queue.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary button-large" href="/signup">Start Building <span aria-hidden="true">→</span></Link>
                <Link className="button button-secondary button-large" href="/docs">View the docs</Link>
              </div>
              <p className="hero-note"><span>202</span> Accept quickly. Deliver durably.</p>
            </div>
            <ArchitectureDiagram />
          </div>
        </section>

        <section className="trust-bar" aria-labelledby="technical-proof">
          <h2 id="technical-proof" className="sr-only">Durelay technical proof points</h2>
          <div className="shell trust-grid">
            {trustFacts.map(([value, label]) => (
              <div className="trust-item" key={label}>
                <strong>{value}</strong><span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section problem-section" id="product" aria-labelledby="why-durelay">
          <div className="shell split-heading">
            <div><p className="eyebrow">Why Durelay</p><h2 id="why-durelay">Every team rebuilds webhook fan-out. You shouldn’t have to.</h2></div>
            <p>Accepting webhooks reliably, fanning them out to every destination a customer configures, retrying the ones that fail, and keeping an inspectable log of what happened — it’s the same plumbing every platform team ends up building from scratch. Durelay is that layer, built once, done right.</p>
          </div>
        </section>

        <section className="section features-section" aria-labelledby="how-it-works">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">How it works</p>
              <h2 id="how-it-works">One relay layer. Three durable paths.</h2>
              <p>Accept once. Choose how each tenant’s traffic moves from there.</p>
            </div>
            <article className="feature-row">
              <div className="feature-copy">
                <p className="feature-index">01 / Relay Endpoints</p>
                <h3>One inbound URL. Every outbound destination.</h3>
                <p>Point a webhook source at a single Durelay URL and fan it out to every destination that needs it — in parallel, with automatic retries on a backoff schedule, and a live delivery log you can inspect and replay from. Your source gets a fast <code>202 Accepted</code> the moment the request is verified; Durelay handles delivery from there.</p>
                <p className="supporting-detail"><span>↳</span> Per-destination signing is optional and configurable independently for each destination on the same Relay Endpoint.</p>
              </div>
              <div className="feature-visual relay-visual" aria-label="Relay endpoint delivery log example">
                <div className="visual-header"><span>deliveries</span><span>live</span></div>
                {["api.customer-a.com", "hooks.customer-b.io", "events.internal"].map((endpoint, index) => (
                  <div className="delivery-row" key={endpoint}>
                    <span className={`delivery-state state-${index}`} />
                    <code>{endpoint}</code>
                    <small>{index === 1 ? "retrying" : "delivered"}</small>
                    <b>{index === 1 ? "503" : index === 0 ? "204" : "200"}</b>
                  </div>
                ))}
                <div className="visual-timeline"><span /><span /><span /><span /><span /></div>
              </div>
            </article>
            <article className="feature-row feature-row-reverse">
              <div className="feature-copy">
                <p className="feature-index">02 / Queue Endpoints</p>
                <h3>Turn inbound webhooks into a durable queue.</h3>
                <p>Every Queue Endpoint gets its own dedicated, isolated queue, so inbound traffic lands somewhere durable instead of straight into your application. Configurable token time-to-live, strict per-tenant isolation, and headroom for payloads up to 100MB when your default limit isn’t enough.</p>
              </div>
              <div className="feature-visual queue-visual" aria-label="Isolated queue endpoint example">
                <div className="queue-top"><span>queue / tenant_08</span><strong>isolated</strong></div>
                <div className="queue-stack">
                  <span style={{ "--depth": 3 } as React.CSSProperties}>evt_4fe2 · 42 KB</span>
                  <span style={{ "--depth": 2 } as React.CSSProperties}>evt_4fe1 · 18 KB</span>
                  <span style={{ "--depth": 1 } as React.CSSProperties}>evt_4fe0 · 64 KB</span>
                </div>
                <div className="queue-metrics"><span><small>depth</small><b>003</b></span><span><small>token ttl</small><b>12h</b></span></div>
              </div>
            </article>
            <article className="feature-row">
              <div className="feature-copy">
                <p className="feature-index">03 / Direct Connect</p>
                <h3>Let your app talk to the queue directly.</h3>
                <p>When you need the shortest possible path, Direct Connect mints short-lived, narrowly scoped credentials so your application reads and writes a Queue Endpoint’s queue directly — no payload ever passes through Durelay’s relay layer.</p>
              </div>
              <div className="feature-visual token-visual" aria-label="Short-lived Direct Connect token example">
                <div className="token-label">scoped credential</div>
                <code>dc_live_••••••••••8k2p</code>
                <div className="scope-row"><span>queue</span><b>q_tenant_08</b></div>
                <div className="scope-row"><span>scope</span><b>read:write</b></div>
                <div className="token-expiry"><span>expires in</span><strong>00:47:32</strong></div>
              </div>
            </article>
          </div>
        </section>

        <section className="section security-section" id="security" aria-labelledby="security-title">
          <div className="shell">
            <div className="section-heading narrow-heading">
              <p className="eyebrow">Security & isolation</p>
              <h2 id="security-title">Built to isolate. Built to verify.</h2>
              <p>Standard SaaS-grade security practices, enforced at the request, destination, and tenant boundaries.</p>
            </div>
            <div className="security-grid">
              {securityItems.map((item) => (
                <article className="security-card" key={item.number}>
                  <span>{item.number}</span><h3>{item.title}</h3><p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section editions-section" id="editions" aria-labelledby="editions-title">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Editions</p>
              <h2 id="editions-title">Start small. Keep the same delivery model.</h2>
              <p>Feature limits scale with your traffic. Pricing is being finalized.</p>
            </div>
            <div className="table-wrap" tabIndex={0} aria-label="Scrollable Durelay editions comparison">
              <table className="editions-table">
                <caption className="sr-only">Durelay Starter, Growth, and Enterprise feature comparison</caption>
                <thead>
                  <tr>
                    <th scope="col"><span className="table-label">Compare editions</span></th>
                    <th scope="col"><div className="tier-head"><span>Starter</span><b>Pricing pending</b><Link href="/signup" className="button button-secondary">Start Building</Link></div></th>
                    <th scope="col" className="featured-tier"><div className="tier-head"><span>Growth <i>Recommended</i></span><b>Pricing pending</b><Link href="/signup?edition=growth" className="button button-primary">Start Building</Link></div></th>
                    <th scope="col"><div className="tier-head"><span>Enterprise</span><b>Talk to us</b><Link href="/signup?edition=enterprise" className="button button-secondary">Contact Us</Link></div></th>
                  </tr>
                </thead>
                <tbody>
                  {editionRows.map(([feature, starter, growth, enterprise]) => (
                    <tr key={feature}>
                      <th scope="row">{feature}</th><td>{starter}</td><td className="featured-tier">{growth}</td><td>{enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section developer-section" aria-labelledby="developer-title">
          <div className="shell developer-grid">
            <div className="developer-copy">
              <p className="eyebrow">Developer experience</p>
              <h2 id="developer-title">A few lines, not a few sprints.</h2>
              <p>Send a signed request to one Relay Endpoint. Durelay acknowledges it, creates a delivery, and handles the fan-out from there.</p>
              <Link className="text-link" href="/docs">Read the docs <span aria-hidden="true">→</span></Link>
            </div>
            <div className="code-window" aria-label="Illustrative Durelay API request and response">
              <div className="code-titlebar"><span /><span /><span /><small>Illustrative API example</small></div>
              <pre><code><span className="code-muted">$</span> curl -X POST \\{`\n`}  https://api.durelay.com/v1/relay/rel_01HQ7K \\{`\n`}  -H <span className="code-string">&quot;X-Durelay-Signature: sha256=…&quot;</span> \\{`\n`}  -d <span className="code-string">&apos;{`{"event":"invoice.paid"}`}&apos;</span>{`\n\n`}<span className="code-muted">HTTP/1.1</span> <span className="code-blue">202 Accepted</span>{`\n`}{`{"deliveryId":"dlv_01J8N4…","status":"accepted"}`}</code></pre>
            </div>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-title">
          <div className="shell faq-layout">
            <div className="faq-heading"><p className="eyebrow">FAQ</p><h2 id="faq-title">The details engineers ask first.</h2></div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary><span>{question}</span><i aria-hidden="true" /></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-cta-title">
          <div className="shell final-cta-inner">
            <div><p className="eyebrow">The relay layer is ready</p><h2 id="final-cta-title">Stop rebuilding webhook plumbing.</h2></div>
            <Link className="button button-primary button-large" href="/signup">Start Building <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
