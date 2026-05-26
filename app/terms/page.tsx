import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Pearl River Design",
  description: "Terms of Service for Pearl River Design, a website design and hosting service based in Pearl River, New York.",
};

export default function TermsPage() {
  return (
    <main style={{ background: "#fff", minHeight: "100vh", padding: "clamp(64px, 8vw, 120px) 0" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>

        <p className="font-label text-xs" style={{ color: "var(--muted)", letterSpacing: "0.12em", marginBottom: "16px" }}>
          PEARL RIVER DESIGN · PEARL RIVER, NEW YORK
        </p>

        <h1 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "clamp(32px, 4vw, 48px)", marginBottom: "8px" }}>
          Terms of Service
        </h1>
        <p className="font-sans" style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "48px" }}>
          Last updated: May 26, 2026
        </p>

        <div className="font-sans" style={{ color: "var(--charcoal)", fontSize: "16px", lineHeight: 1.8 }}>

          <p style={{ marginBottom: "40px", paddingBottom: "32px", borderBottom: "1px solid var(--border)" }}>
            <strong>By using pearlriverdesign.dev, submitting our contact form, or engaging our services, you agree to these Terms of Service.</strong> If you do not agree, do not use our site or services.
          </p>
          <p style={{ marginBottom: "40px", paddingBottom: "32px", borderBottom: "1px solid var(--border)", color: "var(--muted)", fontSize: "14px" }}>
            These Terms of Service are governed by the laws of the State of New York and comply with the New York FAIR Business Practices Act (effective February 2026) and applicable federal consumer protection law.
          </p>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              1. Our Services
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Pearl River Design builds and hosts custom websites for small businesses and contractors. Current offerings:
            </p>
            <p style={{ marginBottom: "8px" }}>
              <strong>Starter — $1,000 one-time fee</strong>
              <br />
              Includes a custom website built around your business, mobile-optimized, with contact form, SEO setup for your city and service area, SSL certificate, and managed hosting on pearlriverdesign.dev subdomains.
            </p>
            <p style={{ marginBottom: "16px" }}>
              <strong>Pro — $1,200 one-time fee + $50/month</strong> <span style={{ color: "var(--muted)", fontSize: "14px" }}>(Coming soon)</span>
              <br />
              Includes everything in Starter, plus a cinematic video hero built for your trade, a custom domain (yourbusiness.com), and same-day updates upon request. The $50/month subscription covers domain registration, managed hosting, and ongoing update support.
            </p>
            <p>
              We will clearly communicate which plan applies to your project before any payment is collected.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              2. Payment Terms
            </h2>
            <p style={{ marginBottom: "12px" }}>
              Payment is due in full before work begins. We will not begin building your site until payment is confirmed.
            </p>
            <p style={{ marginBottom: "12px" }}>
              We accept the payment method communicated to you at the time of sale. We do not accept returns or issue refunds once work has begun, as the service is custom-built to your specifications.
            </p>
            <p>
              If you dispute a charge, contact us first at{" "}
              <a href="mailto:jackson@pearlriverdesign.dev" style={{ color: "var(--charcoal)", textDecoration: "underline" }}>
                jackson@pearlriverdesign.dev
              </a>. We will work in good faith to resolve any issue before any third-party dispute process.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              3. What We Will Deliver
            </h2>
            <p style={{ marginBottom: "12px" }}>
              We will build your website based on the information you provide in our intake form. Your site will be live within 24 hours of receiving a completed intake form and confirmed payment, barring unforeseen technical issues.
            </p>
            <p>
              You are responsible for providing accurate and complete information. We are not liable for errors in the content you submit, including typos, incorrect phone numbers, or inaccurate business details.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              4. Subscriptions and Cancellation (Pro Plan)
            </h2>
            <p style={{ marginBottom: "12px" }}>
              The Pro plan includes a $50/month subscription. This subscription renews automatically each month. You may cancel at any time with 30 days written notice sent to{" "}
              <a href="mailto:jackson@pearlriverdesign.dev" style={{ color: "var(--charcoal)", textDecoration: "underline" }}>
                jackson@pearlriverdesign.dev
              </a>.
            </p>
            <p style={{ marginBottom: "12px" }}>
              Upon cancellation, your site will remain live until the end of your last paid billing period, then be taken offline. We will provide you with a copy of your site content upon request.
            </p>
            <p>
              There are no hidden renewal fees. You will not be charged beyond the amounts described in Section 1.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              5. Intellectual Property
            </h2>
            <p style={{ marginBottom: "12px" }}>
              The content on your website — your business name, logo, photos, and written copy — belongs to you.
            </p>
            <p style={{ marginBottom: "12px" }}>
              The underlying website template, code structure, and design system used to build your site remain the property of Pearl River Design. You may not resell, sublicense, or redistribute the template itself.
            </p>
            <p>
              Pearl River Design retains the right to display your completed website as an example of our work in our portfolio, unless you request otherwise in writing.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              6. Your Responsibilities
            </h2>
            <p style={{ marginBottom: "12px" }}>You agree to:</p>
            <ul style={{ paddingLeft: "24px" }}>
              <li style={{ marginBottom: "6px" }}>Provide accurate business information in the intake form</li>
              <li style={{ marginBottom: "6px" }}>Ensure any customer reviews or testimonials you submit are real and were given knowingly by the reviewer</li>
              <li style={{ marginBottom: "6px" }}>Not use your website for any unlawful, deceptive, or harmful purpose</li>
              <li style={{ marginBottom: "6px" }}>Not use your website to infringe on the intellectual property rights of others</li>
            </ul>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              7. Hosting and Uptime
            </h2>
            <p>
              We host client websites on Vercel. We target maximum uptime but cannot guarantee uninterrupted service, as hosting depends on third-party infrastructure. We are not liable for downtime caused by Vercel, DNS providers, or internet infrastructure outside our control.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              8. Limitation of Liability
            </h2>
            <p style={{ marginBottom: "12px" }}>
              Pearl River Design&apos;s total liability for any claim arising from our services is limited to the amount you paid us for the specific service in question.
            </p>
            <p style={{ marginBottom: "12px" }}>
              We are not liable for indirect, incidental, consequential, or punitive damages, including lost business or lost revenue, even if we were advised of the possibility of such damages.
            </p>
            <p>
              Nothing in these terms limits liability for fraud, gross negligence, or willful misconduct.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              9. Dispute Resolution
            </h2>
            <p style={{ marginBottom: "12px" }}>
              If you have a dispute with us, contact{" "}
              <a href="mailto:jackson@pearlriverdesign.dev" style={{ color: "var(--charcoal)", textDecoration: "underline" }}>
                jackson@pearlriverdesign.dev
              </a>{" "}
              first. We will make a good-faith effort to resolve it within 14 days.
            </p>
            <p>
              If we cannot resolve the dispute informally, it will be handled in the courts of Rockland County, New York. You consent to personal jurisdiction in New York for any dispute arising from these terms.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              10. NY FAIR Business Practices Act
            </h2>
            <p>
              We operate in compliance with New York&apos;s consumer protection laws, including the FAIR Business Practices Act (effective February 2026). We will not engage in unfair, deceptive, or abusive acts or practices. All material terms of our services — including pricing, what is included, and cancellation rights — are disclosed clearly before you pay.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              11. Changes to These Terms
            </h2>
            <p>
              We may update these terms as our business changes. Updates will be posted at pearlriverdesign.dev/terms with a new &ldquo;Last updated&rdquo; date. Continued use of our services after changes are posted constitutes acceptance of the updated terms.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              12. Severability
            </h2>
            <p>
              If any provision of these terms is found unenforceable, the remaining provisions continue in full force.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              13. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of the State of New York, without regard to conflict of law provisions.
            </p>
          </section>

          <section style={{ marginBottom: "40px", paddingTop: "32px", borderTop: "1px solid var(--border)" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              14. Contact
            </h2>
            <p style={{ marginBottom: "4px" }}>Pearl River Design</p>
            <p style={{ marginBottom: "4px" }}>Pearl River, New York</p>
            <p style={{ marginBottom: "24px" }}>
              <a href="mailto:jackson@pearlriverdesign.dev" style={{ color: "var(--charcoal)", textDecoration: "underline" }}>
                jackson@pearlriverdesign.dev
              </a>
            </p>
            <p style={{ color: "var(--muted)", fontSize: "14px" }}>
              These Terms of Service should be read alongside our{" "}
              <Link href="/privacy" style={{ color: "var(--charcoal)", textDecoration: "underline" }}>
                Privacy Policy
              </Link>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
