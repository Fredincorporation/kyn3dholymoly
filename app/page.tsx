import Link from 'next/link'

const apps = [
  {
    name: 'Kyn3D',
    label: 'Shape your world',
    description: 'Raise a living pet in a real-time 3D room that responds to hydration, focus, steps, sleep, and meals.',
    tone: 'terracotta',
    mark: 'K',
    href: '#kyn3d',
  },
  {
    name: 'Holy Moly',
    label: 'Cook with curiosity',
    description: 'Scan what you have, discover recipes and masterclasses, and turn everyday ingredients into something worth sharing.',
    tone: 'basil',
    mark: 'H',
    href: '#holy-moly',
  },
]

const ethos = [
  ['◌', 'Made for daily rituals'],
  ['⌁', 'Private by design'],
  ['＋', 'Hand-built with care'],
  ['↗', 'Small worlds, big feeling'],
]

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Kyn3D and Holy Moly home">
          <span className="brand-orbit" aria-hidden="true"><span /></span>
          <span>Kyn3D <i>&amp;</i> Holy Moly</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="#apps">The apps</Link>
          <Link href="#privacy">Privacy policy</Link>
          <a className="header-cta" href="mailto:fredincorporation@gmail.com?subject=Kyn3D%20%26%20Holy%20Moly%20early%20access">Notify me</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Two apps by BigFred007</p>
          <h1 id="hero-title">Make room for<br /><em>better days.</em></h1>
          <p className="hero-lede">Kyn3D helps you care for a living 3D companion. Holy Moly turns the ingredients around you into playful meals. Thoughtful tools for everyday curiosity.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#apps">See what we&apos;re making <span aria-hidden="true">↗</span></a>
            <Link className="button button-quiet" href="/privacy-policy">How we use data</Link>
          </div>
          <p className="hero-trust"><span aria-hidden="true">●</span> No login required to learn more <span aria-hidden="true">·</span> <Link href="/privacy-policy">Privacy policy</Link></p>
        </div>
        <div className="hero-art" aria-label="Preview of the Kyn3D and Holy Moly apps" role="img">
          <div className="hero-art-label">A small studio for daily rituals <span>✦</span></div>
          <div className="hero-window window-back"><div className="window-bar"><span /><span /><span /></div><div className="window-content kitchen-preview"><div className="preview-bowl" /><div className="preview-line" /><strong>holy moly</strong><small>make something delicious</small></div></div>
          <div className="hero-window window-front"><div className="window-bar"><span /><span /><span /></div><div className="window-content pet-preview"><div className="preview-pet" /><div className="preview-star">✦</div><strong>kyn3d</strong><small>care, play, repeat</small></div></div>
          <div className="floating-chip chip-top">made for real life</div>
          <div className="floating-chip chip-bottom">coming to Google Play</div>
        </div>
      </section>

      <section className="app-section" id="apps" aria-labelledby="apps-title">
        <div className="section-heading">
          <p className="eyebrow">Two ways in</p>
          <h2 id="apps-title">Pick a little<br /><em>magic.</em></h2>
        </div>
        <div className="app-grid">
          {apps.map((app) => (
            <article className={`app-card ${app.tone}`} id={app.href.slice(1)} key={app.name}>
              <div className="app-card-top"><span className="app-mark" aria-hidden="true">{app.mark}</span><span className="status-pill">Coming to Google Play</span></div>
              <div><p className="card-label">{app.label}</p><h3>{app.name}</h3><p className="card-description">{app.description}</p></div>
              <div className="card-footer"><span>Learn more</span><span className="arrow" aria-hidden="true">↗</span></div>
            </article>
          ))}
        </div>
        <div className="product-details" aria-label="App functionality">
          <article>
            <p className="eyebrow">Kyn3D</p>
            <h3>A living 3D companion</h3>
            <p>Care for a customizable digital pet, shape its room, and build healthy daily routines through hydration, focus, steps, sleep, and meals.</p>
          </article>
          <article>
            <p className="eyebrow">Holy Moly</p>
            <h3>Your ingredients, reimagined</h3>
            <p>Capture ingredients you already have, discover recipes and cooking lessons, and turn meal planning into a playful creative ritual.</p>
          </article>
        </div>
      </section>

      <section className="data-disclosure" aria-labelledby="data-title">
        <div>
          <p className="eyebrow">Why information is requested</p>
          <h2 id="data-title">Useful data.<br /><em>Clear reasons.</em></h2>
        </div>
        <div className="data-disclosure-copy">
          <p>Some features may use account or profile details to save your progress and personalize your experience. Analytics and crash data help us understand reliability and fix problems. We do not ask for data just because it is available, and our policy explains the choices and controls available to you.</p>
          <Link className="text-link" href="/privacy-policy">See exactly what we collect <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="ethos-strip" aria-label="Shared app principles">
        {ethos.map(([icon, label]) => <div className="ethos-item" key={label}><span aria-hidden="true">{icon}</span><span>{label}</span></div>)}
      </section>

      <section className="privacy-callout" id="privacy" aria-labelledby="privacy-title">
        <div><p className="eyebrow">Clear by design</p><h2 id="privacy-title">Your data should<br /><em>feel like yours.</em></h2></div>
        <div className="privacy-callout-copy"><p>We explain what Kyn3D and Holy Moly collect, what stays on your device, and why. No jargon maze. Just the useful stuff.</p><Link className="text-link" href="/privacy-policy">Read the full policy <span aria-hidden="true">↗</span></Link></div>
      </section>

      <footer className="site-footer"><div><Link className="brand footer-brand" href="/">Kyn3D <i>&amp;</i> Holy Moly</Link><p>Thoughtful little tools for big imaginations.</p></div><div className="footer-links"><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms-of-service">Terms of service</Link><span>© {new Date().getFullYear()} BigFred007</span></div></footer>
    </main>
  )
}
