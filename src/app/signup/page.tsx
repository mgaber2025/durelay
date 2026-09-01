import type { Metadata } from "next";
import Link from "next/link";
import { InteriorShell } from "@/components/interior-shell";
import { requestSignup } from "./actions";

export const metadata: Metadata = {
  title: "Start Building",
  description: "Create your Durelay workspace and start routing webhooks reliably.",
  alternates: { canonical: "/signup" },
};

type SignupPageProps = { searchParams?: Promise<{ submitted?: string; edition?: string }> };

export default async function SignupPage({ searchParams }: SignupPageProps) {
  const params = await searchParams;
  const submitted = params?.submitted === "1";
  const edition = params?.edition;

  return (
    <InteriorShell
      eyebrow="Start building"
      title="Create your Durelay workspace."
      description="The signup backend is not connected in this Preview. Submit the form to validate the complete product flow without creating an account."
      secondaryLink={{ href: "/docs", label: "Review the integration model" }}
    >
      {submitted ? (
        <div className="form-success" role="status">
          <span aria-hidden="true">✓</span>
          <div><h2>Signup flow confirmed.</h2><p>Your details were not stored. Account creation will be connected before launch.</p></div>
          <Link className="button button-secondary" href="/">Return home</Link>
        </div>
      ) : (
        <form className="signup-form" action={requestSignup}>
          <div className="form-heading">
            <span>Workspace setup</span>
            {edition ? <b>{edition === "enterprise" ? "Enterprise inquiry" : "Growth edition"}</b> : <b>Starter edition</b>}
          </div>
          <label>Work email<input type="email" name="email" autoComplete="email" placeholder="you@company.com" required /></label>
          <label>Company<input type="text" name="company" autoComplete="organization" placeholder="Company name" required /></label>
          <label>Primary use case<select name="useCase" defaultValue="relay"><option value="relay">Webhook fan-out</option><option value="queue">Durable webhook queue</option><option value="direct">Direct queue access</option></select></label>
          <button className="button button-primary button-large" type="submit">Start Building <span aria-hidden="true">→</span></button>
          <p>Preview only. No account or credentials will be created.</p>
        </form>
      )}
    </InteriorShell>
  );
}
