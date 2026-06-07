const { Input, Button, Shape } = window.PocoStudioDesignSystem_17c7c8;
const { useState } = React;

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="kontakt" style={{ position: 'relative', background: 'var(--poco-violet)', overflow: 'hidden', padding: '96px 32px' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', bottom: -60, left: -40 }}><Shape shape="circle" color="apricot" size={200} /></div>
        <div style={{ position: 'absolute', top: 30, right: 60 }}><Shape shape="lens" color="pink" size={160} rotate={16} /></div>
      </div>
      <div style={{ position: 'relative', maxWidth: 620, margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '.16em',
                    textTransform: 'uppercase', color: 'var(--poco-pink)', margin: '0 0 14px', textAlign: 'center' }}>/ ozvi se</p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,5vw,52px)',
                     letterSpacing: '-0.02em', lineHeight: 1, margin: '0 0 14px', color: '#fff', textAlign: 'center' }}>
          pojďme tvořit spolu
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)',
                    margin: '0 0 36px', textAlign: 'center' }}>
          Napiš nám pár vět o tom, co chystáš. Ozveme se ti do 24 hodin.
        </p>

        {sent ? (
          <div style={{ background: 'var(--poco-white)', borderRadius: 'var(--radius-lg)', padding: '40px 32px',
                        textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
            <Shape shape="lens" color="apricot" size={64} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, margin: '14px 0 8px', color: 'var(--poco-ink)' }}>
              díky! máme to.
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-body)', margin: 0 }}>
              Brzy se ti ozveme. Zatím se měj krásně. ♡
            </p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                style={{ background: 'var(--poco-white)', borderRadius: 'var(--radius-lg)', padding: 28,
                         boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Input label="Jak se jmenuješ?" placeholder="tvoje jméno" required />
              <Input label="E-mail" type="email" placeholder="ahoj@firma.cz" required />
            </div>
            <Input label="O co jde?" multiline placeholder="napiš nám pár vět…" required />
            <Button type="submit" variant="primary" size="lg" arrow>odeslat</Button>
          </form>
        )}
      </div>
    </section>
  );
}
window.Contact = Contact;
