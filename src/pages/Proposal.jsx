import PageHero from '../components/PageHero'
import ScrollReveal from '../components/ScrollReveal'
import CtaSection from '../components/CtaSection'

const deliverables = [
  {
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'Responsive Website',
    items: [
      'Mobile-first design — works beautifully on all screen sizes',
      'Retina-ready visuals & consistent layout across devices',
      'Custom domain & SSL security certificate',
    ],
  },
  {
    icon: 'fa-solid fa-envelope-open-text',
    title: 'Forms & Communication',
    items: [
      'Contact form — instant email alerts to your inbox',
      'WhatsApp chat button — 1-click to message you directly',
      'Google Maps — studio location pinned on your site',
    ],
  },
  {
    icon: 'fa-solid fa-magnifying-glass-chart',
    title: 'SEO & Visibility',
    items: [
      'On-page SEO — meta tags, structured data, sitemap',
      'Google Search Console setup & index monitoring',
      'Google Business Profile integration',
    ],
  },
  {
    icon: 'fa-solid fa-share-nodes',
    title: 'Social Integration',
    items: [
      'Social media links — Instagram, Facebook, YouTube',
      'Social meta tags — perfect previews when shared online',
      'Instagram feed embed on your homepage (optional)',
    ],
  },
  {
    icon: 'fa-solid fa-gauge-high',
    title: 'Speed & Performance',
    items: [
      'Lighthouse score 90+ — blazing fast load times',
      'Optimized images & lazy loading',
      'CDN-backed — fast globally, not just in Mumbai',
    ],
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Hosting & Maintenance',
    items: [
      '12 months free hosting & SSL renewal',
      '99.9% uptime guarantee',
      'Content updates included throughout the year',
      'Training session — manage your own site with confidence',
    ],
  },
]

const addons = [
  {
    icon: 'fa-solid fa-robot',
    title: 'AI Business Chatbot',
    items: [
      '24/7 instant auto-replies to visitor questions about your business',
      'Answers on services, pricing, budget ranges, locations & more',
      'Never miss a lead — even after working hours',
      'WhatsApp & website integration, trained on your business details',
    ],
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Analytics & Insights',
    items: [
      'Google Analytics — live visitor tracking dashboard',
      'Monthly traffic & performance reports',
      'Conversion tracking on form submissions',
    ],
  },
  {
    icon: 'fa-solid fa-sliders',
    title: 'Content Management',
    items: [
      'Admin panel to update portfolio projects anytime',
      'Add / edit testimonials directly — no developer needed',
      'Text & image updates on any page',
    ],
  },
]

export default function Proposal() {
  return (
    <>
      <PageHero title="Project Proposal" />

      <ScrollReveal>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">TheMonsterLabs</span>
            <h2 className="section-title">What You Get</h2>
            <p className="section-subtitle">Everything included in your website package — built, delivered, and maintained by our team.</p>
          </div>

          <div className="services-grid">
            {deliverables.map((d, i) => (
              <div key={i} className="service-card">
                <div className="icon"><i className={d.icon}></i></div>
                <h3>{d.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {d.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                      <i className="fas fa-check" style={{ color: 'var(--secondary)', marginTop: 4, fontSize: '0.85rem', flexShrink: 0 }}></i>
                      <span style={{ color: 'var(--text-light)', fontSize: '0.92rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section className="section" style={{ background: 'var(--accent)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Add-Ons</span>
            <h2 className="section-title">Optional Extras</h2>
            <p className="section-subtitle">These can be added to your package — always quoted separately.</p>
          </div>
          <div className="services-grid">
            {addons.map((d, i) => (
              <div key={i} className="service-card">
                <div className="icon"><i className={d.icon}></i></div>
                <h3>{d.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {d.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                      <i className="fas fa-check" style={{ color: 'var(--secondary)', marginTop: 4, fontSize: '0.85rem', flexShrink: 0 }}></i>
                      <span style={{ color: 'var(--text-light)', fontSize: '0.92rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Next Steps</span>
            <h2 className="section-title">Ready to Get Started?</h2>
            <p className="section-subtitle">This proposal covers everything included once the project kicks off. Let's turn this demo into your live website.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="mailto:hello@themonsterlabs.com" className="btn btn-primary" style={{ fontSize: '1rem' }}>
              Talk to TheMonsterLabs <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <CtaSection />
    </>
  )
}
