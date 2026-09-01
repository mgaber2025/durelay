import type { Metadata } from "next";
import { InteriorShell } from "@/components/interior-shell";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Durelay integration documentation placeholder.",
  alternates: { canonical: "/docs" },
};

export default function DocsPage() {
  return (
    <InteriorShell eyebrow="Documentation" title="Integrate against one durable surface." description="The full Durelay reference is being prepared. This Preview captures the core integration model and reserves the permanent documentation route." secondaryLink={{ href: "/signup", label: "Start Building" }}>
      <div className="docs-panel">
        <div className="docs-nav"><span>Quick start</span><a href="#relay">Relay Endpoint</a><a href="#queue">Queue Endpoint</a><a href="#signing">Signing</a></div>
        <div className="docs-content" id="relay"><p className="eyebrow">Relay Endpoint</p><h2>Accept once. Deliver in parallel.</h2><p>Point your webhook producer at its Durelay endpoint. Verified requests receive a fast acknowledgement while delivery continues independently.</p><pre><code>POST https://api.durelay.com/v1/relay/rel_…</code></pre><div className="docs-notice"><span>Reference status</span><p>Endpoint shapes shown here are illustrative until the public API contract is finalized.</p></div></div>
      </div>
    </InteriorShell>
  );
}
