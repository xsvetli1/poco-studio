const { Tag, Shape } = window.PocoStudioDesignSystem_17c7c8;
const { useState } = React;

const WORK = [
  { id: 1, client: 'Kafkafé', title: 'komunita kolem kávy', cat: 'social', bg: 'var(--poco-violet)', shape: ['lens','pink'] },
  { id: 2, client: 'Vinařství Hora', title: 'degustační evening', cat: 'events', bg: 'var(--poco-apricot)', shape: ['circle','pink'] },
  { id: 3, client: 'Studio Bloom', title: 'reels, co se sdílí', cat: 'social', bg: 'var(--poco-pink)', shape: ['lens','violet'] },
  { id: 4, client: 'Nomad Trips', title: 'launch cestovní série', cat: 'events', bg: 'var(--poco-ink)', shape: ['lens','apricot'] },
  { id: 5, client: 'Atelier Vela', title: 'brand & obsah salónu', cat: 'social', bg: 'var(--poco-apricot)', shape: ['circle','violet'] },
  { id: 6, client: 'Penzion Na Kopci', title: 'zážitkový víkend', cat: 'events', bg: 'var(--poco-violet)', shape: ['lens','apricot'] },
];
const CATS = [{ id: 'all', label: 'vše' }, { id: 'social', label: 'sociální sítě' }, { id: 'events', label: 'eventy' }];

function Tile({ w }) {
  return (
    <a href="#prace" onClick={(e)=>e.preventDefault()}
       style={{ textDecoration: 'none', display: 'block', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                background: 'var(--poco-white)', boxShadow: 'var(--shadow-md)',
                transition: 'transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s' }}
       onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='var(--shadow-lg)';}}
       onMouseLeave={(e)=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='var(--shadow-md)';}}>
      <div style={{ background: w.bg, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Shape shape={w.shape[0]} color={w.shape[1]} size={w.shape[0]==='circle'?120:160} rotate={w.shape[0]==='lens'?-10:0} />
      </div>
      <div style={{ padding: '18px 20px 22px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '.06em',
                         textTransform: 'uppercase', color: 'var(--text-muted)' }}>{w.client}</span>
          <Tag color="cream">{w.cat==='social'?'sociální sítě':'eventy'}</Tag>
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.015em',
                     margin: 0, color: 'var(--poco-ink)' }}>{w.title}</h3>
      </div>
    </a>
  );
}

function Work() {
  const [cat, setCat] = useState('all');
  const list = cat === 'all' ? WORK : WORK.filter((w) => w.cat === cat);
  return (
    <section id="prace" style={{ background: 'var(--poco-pink-100)', padding: '96px 32px' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginBottom: 36 }}>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '.16em',
                        textTransform: 'uppercase', color: 'var(--poco-violet)', margin: '0 0 14px' }}>/ naše práce</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,5vw,52px)',
                         letterSpacing: '-0.02em', lineHeight: 1, margin: 0, color: 'var(--poco-ink)' }}>
              věci, na které jsme hrdé
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {CATS.map((c) => (
              <button key={c.id} onClick={() => setCat(c.id)}
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, cursor: 'pointer',
                         padding: '9px 16px', borderRadius: 'var(--radius-pill)', border: 'none',
                         transition: 'all .15s', whiteSpace: 'nowrap',
                         background: cat === c.id ? 'var(--poco-ink)' : 'transparent',
                         color: cat === c.id ? 'var(--poco-paper)' : 'var(--poco-ink)',
                         boxShadow: cat === c.id ? 'none' : 'inset 0 0 0 1.5px var(--border-subtle)' }}>
                {c.label}
              </button>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {list.map((w) => <Tile key={w.id} w={w} />)}
        </div>
      </div>
    </section>
  );
}
window.Work = Work;
