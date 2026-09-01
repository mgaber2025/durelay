import type { Metadata } from "next";
import { InteriorShell } from "@/components/interior-shell";

export const metadata: Metadata = {
  title: "Status",
  description: "Durelay public service status placeholder.",
  alternates: { canonical: "/status" },
};

export default function StatusPage() {
  return (
    <InteriorShell eyebrow="Service status" title="Public status reporting is being configured." description="This route will publish component health and incident updates. No public availability history or SLA is published yet." secondaryLink={{ href: "/", label: "Return to Durelay" }}>
      <div className="status-panel">
        <div className="status-banner"><span /><div><strong>Status page pending</strong><p>Health reporting will appear here before public launch.</p></div></div>
        {["Webhook acceptance", "Relay delivery", "Queue endpoints", "Control plane"].map((component) => <div className="status-row" key={component}><span>{component}</span><b>Not yet published</b></div>)}
      </div>
    </InteriorShell>
  );
}
