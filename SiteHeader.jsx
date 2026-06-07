const { Logo, Button } = window.PocoStudioDesignSystem_17c7c8;

function SiteHeader({ onNav }) {
  const link = (id, label) => (
    <a href={"#" + id} onClick={(e) => { e.preventDefault(); onNav?.(id); }}
       style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 16,
                color: 'var(--poco-ink)', textDecoration: 'none' }}>{label}</a>
  );
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(8px)',
      background: 'rgba(255,248,243,0.82)', borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '16px 32px',
                    display: 'flex', alignItems: 'center', gap: 24 }}>
        <a href="#top" onClick={(e)=>{e.preventDefault();onNav?.('top');}} style={{ marginRight: 'auto', display:'flex' }}>
          <Logo size={34} />
        </a>
        <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="poco-nav">
          {link('sluzby', 'služby')}
          {link('prace', 'práce')}
          {link('onas', 'o nás')}
        </nav>
        <Button variant="pop" size="sm" arrow onClick={() => onNav?.('kontakt')}>ozvi se</Button>
      </div>
    </header>
  );
}
window.SiteHeader = SiteHeader;
