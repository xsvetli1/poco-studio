const { Card, Shape, IconButton } = window.PocoStudioDesignSystem_17c7c8;

const SERVICES = [
  { id: 'brand', tone: 'pink', shape: 'apricot', title: 'brand & sociální sítě',
    body: 'Vybudujeme vám značku od základů — vizuální identitu, hlas i komunitu. Tvoříme obsah, který si lidi chtějí uložit a poslat dál.',
    items: ['strategie & brand concept', 'tvorba obsahu na míru', 'správa sítí & komunity', 'spolupráce s tvůrci'] },
  { id: 'events', tone: 'apricot', shape: 'pink', title: 'eventy & zážitky',
    body: 'Zážitky, na které se nezapomíná. Postaráme se o celý příběh — od prvního nápadu po poslední detail přímo na místě.',
    items: ['kreativní koncept eventu', 'produkce na klíč', 'launch, pop-up & brand akce', 'dosah & reportování'] },
];

const FOR_WHOM = [
  { label: 'Kavárny & restaurace', icon: '☕' },
  { label: 'Vinařství & degustace', icon: '🍷' },
  { label: 'Salóny & wellness', icon: '✨' },
  { label: 'Cestovky & průvodci', icon: '🗺' },
  { label: 'Ubytování & hospitality', icon: '🏡' },
];

function ServiceCard({ s }) {
  const onDark = s.tone === 'apricot';
  return (
    <Card tone={s.tone} pad="lg" interactive style={{ flex: 1, minWidth: 280, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <Shape shape="lens" color={s.shape} size={64} />
        <IconButton icon="arrow" variant="outline" label={"více – " + s.title}
          style={onDark ? { color: '#fff' } : undefined} />
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, letterSpacing: '-0.02em',
                   margin: '0 0 10px', color: onDark ? '#fff' : 'var(--poco-ink)' }}>{s.title}</h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, margin: '0 0 18px',
                  color: onDark ? 'rgba(255,255,255,0.92)' : 'var(--text-body)' }}>{s.body}</p>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {s.items.map((it) => (
          <li key={it} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)',
                                 fontSize: 15, fontWeight: 500, color: onDark ? '#fff' : 'var(--poco-ink)' }}>
            <Shape shape="lens" color={onDark ? 'cream' : 'violet'} size={16} /> {it}
          </li>
        ))}
      </ul>
    </Card>
  );
}

function Services() {
  return (
    <section id="sluzby" style={{ background: 'var(--poco-paper)', padding: '96px 32px 80px' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '.16em',
                    textTransform: 'uppercase', color: 'var(--poco-apricot)', margin: '0 0 14px' }}>/ co děláme</p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,5vw,52px)',
                     letterSpacing: '-0.02em', lineHeight: 1, margin: '0 0 12px', color: 'var(--poco-ink)', maxWidth: 640 }}>
          komplexní balíček
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--text-body)',
                    maxWidth: 560, margin: '0 0 40px' }}>
          Neřešíme jen jeden kus skládačky. Postaráme se o celou cestu vašeho zákazníka — od prvního dojmu po věrný fanclub.
        </p>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 56 }}>
          {SERVICES.map((s) => <ServiceCard key={s.id} s={s} />)}
        </div>

        {/* Pro koho */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 48 }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '.16em',
                      textTransform: 'uppercase', color: 'var(--poco-violet)', margin: '0 0 20px' }}>/ pro koho tvoříme</p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6, color: 'var(--text-body)',
                      maxWidth: 500, margin: '0 0 28px' }}>
            Projekty blízké našemu srdci — hlavně místa a lidi, kteří staví na zážitku.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {FOR_WHOM.map(({ label, icon }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: 'var(--poco-white)', border: '1.5px solid var(--border-subtle)',
                borderRadius: 'var(--radius-pill)', padding: '10px 18px',
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--poco-ink)'
              }}>
                <span style={{ fontSize: 18, lineHeight: 1 }}>{icon}</span> {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
