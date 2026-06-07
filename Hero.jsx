const { Button, Shape } = window.PocoStudioDesignSystem_17c7c8;

function Hero() {
  return (
    <section id="top" style={{ position: 'relative', background: 'var(--poco-violet)', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: -40, right: -30 }}><Shape shape="circle" color="apricot" size={220} /></div>
        <div style={{ position: 'absolute', bottom: -70, right: 180 }}><Shape shape="lens" color="pink" size={260} rotate={-18} /></div>
        <div style={{ position: 'absolute', top: 120, left: -50 }}><Shape shape="lens" color="apricot" size={170} rotate={12} /></div>
      </div>

      <div style={{ position: 'relative', maxWidth: 980, margin: '0 auto', padding: '110px 32px 120px' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, letterSpacing: '.18em',
                    textTransform: 'uppercase', color: 'var(--poco-pink)', margin: '0 0 22px' }}>
          / kreativní studio · experience marketing
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', margin: 0,
                     fontSize: 'clamp(44px, 8vw, 96px)', lineHeight: 0.94, letterSpacing: '-0.025em' }}>
          postaráme se<br/>o celou cestu<br/>
          <span style={{ color: 'var(--poco-apricot)' }}>vašeho zákazníka.</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)',
                    maxWidth: 580, margin: '28px 0 14px' }}>
          Od vybudování brandu a nabrání sledujících přes akvizici zákazníků
          až po eventy, které se zaryjou do paměti.
        </p>
        <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 600,
                    fontSize: 18, color: 'var(--poco-apricot)', margin: '0 0 38px', letterSpacing: '-0.01em' }}>
          Špetku od vás, špetku od nás.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" arrow as="a" href="#kontakt">pojďme do toho</Button>
          <Button variant="pink" size="lg" as="a" href="#sluzby">co děláme</Button>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
