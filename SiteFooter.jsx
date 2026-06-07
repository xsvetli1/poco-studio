const { Logo } = window.PocoStudioDesignSystem_17c7c8;

function SiteFooter() {
  const col = (title, links) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, letterSpacing: '.14em',
                     textTransform: 'uppercase', color: 'var(--poco-slate)' }}>{title}</span>
      {links.map((l) => (
        <a key={l} href="#" onClick={(e)=>e.preventDefault()}
           style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>{l}</a>
      ))}
    </div>
  );
  return (
    <footer style={{ background: 'var(--poco-ink)', color: '#fff', padding: '64px 32px 40px' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap', marginBottom: 48 }}>
          <div style={{ maxWidth: 320 }}>
            <Logo scheme="onDark" size={34} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', marginTop: 18 }}>
              kreativní studio se specializací na experience marketing. dvě holky, co to myslí vážně (a s láskou).
            </p>
          </div>
          <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
            {col('studio', ['o nás', 'práce', 'služby'])}
            {col('sledujte', ['instagram', 'tiktok', 'linkedin'])}
            {col('napiš', ['ahoj@poco.studio', '+420 777 000 000'])}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 24, display: 'flex',
                      justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
                      fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
          <span>© 2026 poco.studio · vyrobeno s ♡ v Praze</span>
          <span>zásady soukromí · cookies</span>
        </div>
      </div>
    </footer>
  );
}
window.SiteFooter = SiteFooter;
