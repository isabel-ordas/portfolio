const { Logo, Icon, Button, Divider } = window.IsabelBrandSystem_b8d40d;

const FULL_NAME = 'Isabel Ordás Arnal';

/* Fixed domain → accent mapping so a category tag always reads in the same
   color everywhere on the site. Extend freely as new domains show up;
   anything not listed here just renders without a color dot. */
const TAG_COLORS = {
  'Circular economy': 'green',
  'Product discovery': 'green',
  'Climate tech': 'blue',
  'Data': 'blue',
  'Research': 'brown',
  'Operations': 'brown',
  'Talent development': 'yellow'
};

function Header({ route, go }) {
  const nav = [['home','Work'],['about','About'],['writing','Writing']];
  return (
    <header style={{position:'sticky',top:0,zIndex:10,background:'var(--paper-white)',borderBottom:'var(--border-hairline)'}}>
      <div className="ds-shell" style={{maxWidth:'var(--page-max-width)',margin:'0 auto',padding:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-4)',flexWrap:'wrap'}}>
        <a href="#" onClick={(e)=>{e.preventDefault();go('home')}} aria-label={`${FULL_NAME} — home`}
           style={{display:'inline-flex',alignItems:'center',gap:12,border:0,textDecoration:'none'}}>
          <Logo size={36} />
          <span aria-hidden="true" style={{font:'var(--weight-semibold) 20px/1 var(--font-display)',letterSpacing:'var(--tracking-heading)',color:'var(--ink-black)'}}>IOA</span>
        </a>
        <nav style={{display:'flex',alignItems:'center',gap:'var(--space-4)'}}>
          {nav.map(([id,label]) => (
            <a key={id} href="#" onClick={(e)=>{e.preventDefault();go(id)}}
               style={{font:'var(--text-label)',textDecoration:'none',color:'var(--text-body)',
                       borderBottom: route===id ? '2px solid var(--accent-green)' : '2px solid transparent',paddingBottom:4}}>{label}</a>
          ))}
          <Button variant="primary" accent="black" size="sm" icon="mail" iconPosition="left" onClick={()=>go('about')}>Contact</Button>
        </nav>
      </div>
    </header>
  );
}

function Footer({ go }) {
  return (
    <footer style={{borderTop:'var(--border-hairline)',marginTop:'var(--space-12)'}}>
      <div className="ds-shell" style={{maxWidth:'var(--page-max-width)',margin:'0 auto',padding:'var(--space-6) 0',display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:'var(--space-4)',flexWrap:'wrap'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
          <Logo size={32} />
          <span style={{font:'var(--text-caption)',letterSpacing:'var(--tracking-caption)',textTransform:'uppercase',color:'var(--text-muted)'}}>Barbastro, Somontano — Aragón, Spain</span>
        </div>
        <div style={{display:'flex',gap:'var(--space-3)',alignItems:'center'}}>
          <a href="#" onClick={(e)=>e.preventDefault()} style={{display:'flex',border:0}}><Icon name="linkedin" size={20} title="LinkedIn" /></a>
          <a href="#" onClick={(e)=>e.preventDefault()} style={{display:'flex',border:0}}><Icon name="mail" size={20} title="Email" /></a>
          <a href="#" onClick={(e)=>{e.preventDefault();go('about')}} style={{font:'var(--text-label)'}}>Download CV</a>
        </div>
      </div>
    </footer>
  );
}

function Page({ title, children }) {
  React.useEffect(() => {
    document.title = title ? `${title} — ${FULL_NAME}` : `${FULL_NAME} — Product with purpose`;
  }, [title]);
  return <main className="ds-shell" style={{maxWidth:'var(--page-max-width)',margin:'0 auto',padding:'var(--space-12) 0 0'}}>{children}</main>;
}

function Eyebrow({ accent = 'green', children }) {
  const c = { green:'var(--accent-green)', yellow:'var(--accent-yellow)', blue:'var(--accent-blue)', brown:'var(--accent-brown)' }[accent];
  return (
    <span style={{display:'flex',alignItems:'center',gap:8,font:'var(--text-caption)',letterSpacing:'var(--tracking-caption)',textTransform:'uppercase',color:'var(--text-muted)'}}>
      <span aria-hidden="true" style={{width:8,height:8,background:c}} />{children}
    </span>
  );
}

Object.assign(window, { Header, Footer, Page, Eyebrow, TAG_COLORS, FULL_NAME });
