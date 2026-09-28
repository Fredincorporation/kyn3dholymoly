import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | Kyn3D & Holy Moly',
  description: 'Terms of Service for the Kyn3D and Holy Moly mobile applications.',
}

export default function TermsOfServicePage() {
  return (
    <main className="policy-shell">
      <header className="site-header policy-header">
        <Link className="brand" href="/" aria-label="Back to Kyn3D and Holy Moly home">
          <span className="brand-orbit" aria-hidden="true"><span /></span>
          <span>Kyn3D <i>&amp;</i> Holy Moly</span>
        </Link>
        <Link className="button button-quiet" href="/">Back home <span aria-hidden="true">↩</span></Link>
      </header>

      <article className="policy-content">
        <p className="eyebrow">The useful version</p>
        <h1>Terms of<br /><em>service.</em></h1>
        <p className="policy-intro">These Terms of Service explain the ground rules for using the Kyn3D and Holy Moly mobile applications (together, the “Apps”), provided by <strong>BigFred007</strong>.</p>
        <div className="policy-meta"><span>Last updated: September 14, 2026</span><span>Applies to: Kyn3D &amp; Holy Moly</span></div>

        <div className="policy-notice">
          <strong>Questions?</strong>
          <p>Contact <a href="mailto:fredincorporation@gmail.com">fredincorporation@gmail.com</a>. BigFred007 is based at No 16 Lakeview Clos, Ikeja, Lagos.</p>
        </div>

        <PolicySection title="1. Using the Apps">
          <p>You may use the Apps for your personal, non-commercial purposes, in accordance with these Terms and any applicable app-store rules. You are responsible for having a compatible device and an internet connection when a feature requires one.</p>
        </PolicySection>
        <PolicySection title="2. Accounts and your content">
          <p>If an App lets you create an account or profile, please keep your sign-in details secure and provide information that is accurate. You keep ownership of content you create or submit. You give BigFred007 only the limited permission needed to host, display, process, and improve that content as described in the App and our Privacy Policy.</p>
        </PolicySection>
        <PolicySection title="3. Respectful use">
          <p>Please do not misuse the Apps, interfere with their operation, attempt unauthorized access, reverse engineer them except where the law permits, or use them to violate another person’s rights or any applicable law.</p>
        </PolicySection>
        <PolicySection title="4. App availability and updates">
          <p>Kyn3D and Holy Moly are evolving products. We may change, pause, or discontinue features, including during the pre-launch period, and may release updates that are required for continued use. We will try to make changes thoughtfully and communicate important ones when practical.</p>
        </PolicySection>
        <PolicySection title="5. Ownership">
          <p>The Apps, including their software, names, visual design, and original materials, belong to BigFred007 or its licensors. These Terms do not transfer any ownership rights to you. We grant you a limited, non-exclusive, non-transferable license to use the Apps under these Terms.</p>
        </PolicySection>
        <PolicySection title="6. Third-party services">
          <p>The Apps may link to or rely on services operated by others, including app stores and content providers. Those services have their own terms and policies, and BigFred007 is not responsible for services it does not control.</p>
        </PolicySection>
        <PolicySection title="7. Disclaimers and limits">
          <p>The Apps are provided on an “as available” basis. To the extent allowed by law, BigFred007 makes no promise that every feature will always be available, uninterrupted, or error-free. Nothing in these Terms limits rights or remedies that cannot legally be limited.</p>
        </PolicySection>
        <PolicySection title="8. Ending access">
          <p>You may stop using an App at any time. We may suspend or end access if you seriously or repeatedly breach these Terms, or when needed to protect the Apps, their users, or our legal rights. Provisions that should naturally continue after termination will remain in effect.</p>
        </PolicySection>
        <PolicySection title="9. Changes to these Terms">
          <p>We may update these Terms as the Apps change. When we do, we will update the date above and, where appropriate, provide a clearer notice. Continuing to use an App after an update means you accept the updated Terms.</p>
        </PolicySection>
        <PolicySection title="10. Contact">
          <p>For questions about these Terms, email <a href="mailto:fredincorporation@gmail.com">fredincorporation@gmail.com</a> or write to BigFred007 at No 16 Lakeview Clos, Ikeja, Lagos.</p>
        </PolicySection>

        <div className="policy-bottom-links"><Link className="text-link" href="/privacy-policy">Read the privacy policy <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/">Return home <span aria-hidden="true">↗</span></Link></div>
      </article>
    </main>
  )
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="policy-section"><h2>{title}</h2>{children}</section>
}

