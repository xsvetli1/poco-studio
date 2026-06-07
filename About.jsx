const { Avatar, Shape } = window.PocoStudioDesignSystem_17c7c8;

const RULES = [
  { a: 'Autenticita', b: 'trendy' },
  { a: 'Dopad', b: 'dosah' },
  { a: 'Kvalita', b: 'kvantita' },
];

function About() {
  return (
    <section id="onas" style={{ background: 'var(--poco-paper)', padding: '96px 32px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 52 }}>

        {/* Who we are */}
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '.16em',
                      textTransform: 'uppercase', color: 'var(--poco-apricot)', margin: '0 0 20px' }}>/ kdo jsme</p>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 26 }}>
            <Avatar name="Julie" color="apricot" size="xl" ring />
            <div style={{ marginLeft: -16 }}><Avatar name="Lucie" color="violet" size="xl" ring /></div>
            <span style={{ marginLeft: 20, fontFamily: 'var(--font-body)', fontWeight: 600,
                           fontSize: 16, color: 'var(--text-muted)' }}>Julie & Lucie</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,4.5vw,48px)',
                       letterSpacing: '-0.02em', lineHeight: 1.02, margin: '0 0 22px', color: 'var(--poco-ink)', maxWidth: 720 }}>
            dvě kreativní holky, co se našly v tom, co jim jde nejvíc
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.7, color: 'var(--text-body)',
                      maxWidth: 640, margin: '0 0 16px' }}>
            Pracujeme jen na projektech, které nám dávají smysl. Tvoříme socky a eventy s duší —
            a naše nejdůležitější schopnost je naslouchání.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.7, color: 'var(--text-body)',
                      maxWidth: 640, margin: 0 }}>
            Jsme rády, když sdílíte představy — my z nich pak kouzlíme návrhy.
          </p>

          {/* Pull quote */}
          <div style={{ marginTop: 32, borderLeft: '3px solid var(--poco-apricot)', paddingLeft: 22 }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontStyle: 'italic',
                        fontSize: 'clamp(22px,3vw,32px)', color: 'var(--poco-ink)',
                        margin: 0, letterSpacing: '-0.01em', lineHeight: 1.15 }}>
              Poco od vás, poco od nás.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-muted)', margin: '8px 0 0' }}>
              Špetku od vás, špetku od nás — tak vznikají věci s duší.
            </p>
          </div>
        </div>

        {/* 3 Rules */}
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '.16em',
                      textTransform: 'uppercase', color: 'var(--poco-violet)', margin: '0 0 20px' }}>/ naše 3 pravidla</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {RULES.map(({ a, b }) => (
              <div key={a} style={{
                flex: 1, minWidth: 200,
                background: 'var(--poco-pink)', borderRadius: 'var(--radius-lg)', padding: '24px 26px',
                display: 'flex', flexDirection: 'column', gap: 6
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Shape shape="lens" color="apricot" size={24} rotate={-10} />
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22,
                                 color: 'var(--poco-ink)', letterSpacing: '-0.02em' }}>{a}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingLeft: 34 }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700,
                                 letterSpacing: '.08em', textTransform: 'uppercase',
                                 color: 'var(--poco-violet)', opacity: 0.7 }}>nad</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15,
                                 color: 'var(--text-body)', textDecoration: 'line-through',
                                 textDecorationColor: 'var(--poco-apricot)' }}>{b}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
window.About = About;
