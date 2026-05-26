import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pearl River Design",
  description: "Privacy Policy for Pearl River Design, a website design and hosting service based in Pearl River, New York.",
};

export default function PrivacyPage() {
  return (
    <main style={{ background: "#fff", minHeight: "100vh", padding: "clamp(64px, 8vw, 120px) 0" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>

        <p className="font-label text-xs" style={{ color: "var(--muted)", letterSpacing: "0.12em", marginBottom: "16px" }}>
          PEARL RIVER DESIGN · PEARL RIVER, NEW YORK
        </p>

        <h1 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "clamp(32px, 4vw, 48px)", marginBottom: "8px" }}>
          Privacy Policy
        </h1>
        <p className="font-sans" style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "48px" }}>
          Last updated: May 26, 2026
        </p>

        <div className="font-sans" style={{ color: "var(--charcoal)", fontSize: "16px", lineHeight: 1.8 }}>

          <p style={{ marginBottom: "40px", paddingBottom: "32px", borderBottom: "1px solid var(--border)" }}>
            By using pearlriverdesign.dev or submitting any form on our site, you acknowledge this Privacy Policy.
          </p>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              1. Who We Are
            </h2>
            <p>
              Pearl River Design is a website design and hosting service based in Pearl River, New York. We build and host websites for small businesses and contractors in the Rockland County area and surrounding regions.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              2. What Information We Collect
            </h2>
            <p style={{ marginBottom: "12px" }}>
              <strong>From the contact form on pearlriverdesign.dev:</strong>
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "20px" }}>
              <li style={{ marginBottom: "6px" }}>Your name</li>
              <li style={{ marginBottom: "6px" }}>Your business name</li>
              <li style={{ marginBottom: "6px" }}>Phone number</li>
              <li style={{ marginBottom: "6px" }}>Email address</li>
              <li style={{ marginBottom: "6px" }}>Services you are interested in</li>
            </ul>
            <p style={{ marginBottom: "12px" }}>
              <strong>From the client intake form (Google Form) when you become a client:</strong>
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "20px" }}>
              <li style={{ marginBottom: "6px" }}>Business name and owner name</li>
              <li style={{ marginBottom: "6px" }}>Phone number and email address</li>
              <li style={{ marginBottom: "6px" }}>Business location and service area</li>
              <li style={{ marginBottom: "6px" }}>Services offered</li>
              <li style={{ marginBottom: "6px" }}>Years in business</li>
              <li style={{ marginBottom: "6px" }}>Customer reviews you provide for your website</li>
            </ul>
            <p>
              We do not collect payment card numbers or bank account information through our website or forms.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              3. How We Use Your Information
            </h2>
            <p style={{ marginBottom: "12px" }}>We use the information you provide to:</p>
            <ul style={{ paddingLeft: "24px", marginBottom: "20px" }}>
              <li style={{ marginBottom: "6px" }}>Contact you about your website project</li>
              <li style={{ marginBottom: "6px" }}>Build and deploy your website</li>
              <li style={{ marginBottom: "6px" }}>Send transactional emails about your site (confirmation, launch notice, updates)</li>
            </ul>
            <p>
              We do not sell your personal information to third parties. We do not use your information for targeted advertising.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              4. Third-Party Services
            </h2>
            <p style={{ marginBottom: "12px" }}>
              We use the following services to operate our business. Each processes data on our behalf and has its own privacy policy:
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "20px" }}>
              <li style={{ marginBottom: "6px" }}><strong>Google Forms</strong> (Alphabet Inc.) — client intake forms</li>
              <li style={{ marginBottom: "6px" }}><strong>Zapier</strong> — workflow automation between services</li>
              <li style={{ marginBottom: "6px" }}><strong>Vercel</strong> — website hosting and deployment</li>
              <li style={{ marginBottom: "6px" }}><strong>Resend</strong> — transactional email delivery</li>
              <li style={{ marginBottom: "6px" }}><strong>Pexels</strong> — stock photography for client sites</li>
            </ul>
            <p>
              Some of these services may process data outside of New York State or the United States. By using our services, you acknowledge that your information may be transferred internationally as part of normal operations. All third-party providers we use maintain reasonable data security practices.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              5. Data Security — NY SHIELD Act Compliance
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Pearl River Design maintains reasonable safeguards to protect the personal information we collect, consistent with the requirements of the New York SHIELD Act (NY General Business Law § 899-bb).
            </p>
            <p style={{ marginBottom: "12px" }}>Our security program includes:</p>
            <p style={{ marginBottom: "8px" }}>
              <strong>Administrative safeguards:</strong> We limit access to personal information to those who need it to operate our business. We review our data practices periodically.
            </p>
            <p style={{ marginBottom: "8px" }}>
              <strong>Technical safeguards:</strong> We use HTTPS on all our sites. We do not store raw form submissions on public servers. API keys and secrets are stored as environment variables, not in code.
            </p>
            <p style={{ marginBottom: "16px" }}>
              <strong>Physical safeguards:</strong> We do not maintain physical records of client personal information. All data is stored with cloud providers that maintain industry-standard physical security.
            </p>
            <p>
              In the event of a data breach affecting your personal information, we will notify affected individuals in accordance with New York law.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              6. Your Rights
            </h2>
            <p style={{ marginBottom: "12px" }}>You have the right to:</p>
            <ul style={{ paddingLeft: "24px", marginBottom: "20px" }}>
              <li style={{ marginBottom: "6px" }}><strong>Access</strong> the personal information we hold about you</li>
              <li style={{ marginBottom: "6px" }}><strong>Correct</strong> inaccurate information</li>
              <li style={{ marginBottom: "6px" }}><strong>Request deletion</strong> of your personal information</li>
              <li style={{ marginBottom: "6px" }}><strong>Opt out</strong> of any future communications from us</li>
            </ul>
            <p>
              To exercise any of these rights, email{" "}
              <a href="mailto:jackson@pearlriverdesign.dev" style={{ color: "var(--charcoal)", textDecoration: "underline" }}>
                jackson@pearlriverdesign.dev
              </a>{" "}
              with your request. We will respond within 30 days.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              7. Your Website Content
            </h2>
            <p>
              When we build your website, the information you provide — including your business name, phone number, services, and customer reviews — is published publicly on your site. You are responsible for ensuring that any content you submit, including customer reviews, was provided with the reviewer&apos;s knowledge and permission.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              8. Data Retention
            </h2>
            <p>
              We retain your contact and project information for as long as we have an active business relationship with you, or as required by law. When you request deletion, we will remove your information from our active systems within 30 days.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              9. Cookies
            </h2>
            <p>
              Our marketing site (pearlriverdesign.dev) does not use tracking cookies or behavioral advertising cookies. Client websites we build do not include analytics or tracking by default.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              10. Children&apos;s Privacy — COPPA Compliance
            </h2>
            <p>
              Our services are not directed at children under 13. We do not knowingly collect personal information from anyone under 13. If you believe a child under 13 has submitted information through our site, contact us at{" "}
              <a href="mailto:jackson@pearlriverdesign.dev" style={{ color: "var(--charcoal)", textDecoration: "underline" }}>
                jackson@pearlriverdesign.dev
              </a>{" "}
              and we will delete it promptly.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              11. CAN-SPAM Compliance
            </h2>
            <p>
              Any emails we send in connection with your project are transactional in nature. If we ever send promotional communications, they will include a clear way to opt out. We comply with the federal CAN-SPAM Act.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              12. Changes to This Policy
            </h2>
            <p>
              We may update this policy as our business changes. When we do, we will update the &ldquo;Last updated&rdquo; date at the top. Continued use of our services after changes are posted constitutes acceptance of the updated policy.
            </p>
          </section>

          <section style={{ marginBottom: "40px", paddingTop: "32px", borderTop: "1px solid var(--border)" }}>
            <h2 className="font-heading" style={{ color: "var(--charcoal)", fontSize: "22px", marginBottom: "16px" }}>
              13. Contact
            </h2>
            <p style={{ marginBottom: "4px" }}>Pearl River Design</p>
            <p style={{ marginBottom: "4px" }}>Pearl River, New York</p>
            <p style={{ marginBottom: "24px" }}>
              <a href="mailto:jackson@pearlriverdesign.dev" style={{ color: "var(--charcoal)", textDecoration: "underline" }}>
                jackson@pearlriverdesign.dev
              </a>
            </p>
            <p style={{ color: "var(--muted)", fontSize: "14px" }}>
              This Privacy Policy should be read alongside our{" "}
              <Link href="/terms" style={{ color: "var(--charcoal)", textDecoration: "underline" }}>
                Terms of Service
              </Link>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
