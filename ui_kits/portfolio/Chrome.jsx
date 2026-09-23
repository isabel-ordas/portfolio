const { Logo, Icon, Button, Divider } = window.IsabelBrandSystem_b8d40d;

/* All copy and taxonomy data below is loaded from /content/site.json (see
   window.CONTENT, populated in index.html before this script runs) — that
   JSON is the portable, framework-agnostic source of truth; this file only
   wires it into the UI. */
const SITE = window.CONTENT.site;
const FULL_NAME = SITE.fullName;
const LOCATION = SITE.location;
const NAV = SITE.nav;
const CONTACT = SITE.contact;
const CV_URL = `/${SITE.cvUrl}`;

/* Fixed domain → accent mapping so a category tag always reads in the same
   color everywhere on the site. Extend freely as new domains show up;
   anything not listed here just renders without a color dot. */
const TAG_COLORS = SITE.taxonomies.tagColors;

/* Case-study metadata taxonomy (Work grid cards + case study detail
   pages — see Home.jsx PROJECTS). STAGES is the full product lifecycle,
   in order; a project's `stage` array is a subset of it, always read in
   this order so the segmented bar stays consistent regardless of how the
   project data lists them. PRODUCT_SKILLS is a closed, reusable
   vocabulary (not freeform per project) so the "Selected work" filter
   stays meaningful — extend deliberately, don't invent one-off values
   per case study. */
const STAGES = SITE.taxonomies.stages;
const PRODUCT_SKILLS = SITE.taxonomies.productSkills;

/* The three Expertise pillars (see About.jsx EXPERTISE), reused as the
   Work filter taxonomy (see Home.jsx PROJECTS.skills) so both pages read
   the same colors for the same idea. Brown stays reserved for domain
   tags above. */
const PILLARS = SITE.taxonomies.pillars;
const PILLAR_COLORS = SITE.taxonomies.pillarColors;

function Header({ route, go }) {
  return (
    <header style={{position:'sticky',top:0,zIndex:10,background:'var(--paper-white)',borderBottom:'var(--border-hairline)'}}>
      <div className="ds-shell" style={{maxWidth:'var(--page-max-width)',margin:'0 auto',padding:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-4)',flexWrap:'wrap'}}>
        <a href={window.Router.routeToPath('home')} onClick={(e)=>{e.preventDefault();go('home')}} aria-label={`${FULL_NAME} — home`}
           style={{display:'inline-flex',alignItems:'center',gap:12,border:0,textDecoration:'none'}}>
          <Logo size={36} />
          <span aria-hidden="true" style={{font:'var(--weight-semibold) 20px/1 var(--font-display)',letterSpacing:'var(--tracking-heading)',color:'var(--ink-black)'}}>IOA</span>
        </a>
        <nav style={{display:'flex',alignItems:'center',gap:'var(--space-4)'}}>
          {NAV.map(({id,label}) => (
            <a key={id} href={window.Router.routeToPath(id)} onClick={(e)=>{e.preventDefault();go(id)}}
               style={{font:'var(--text-label)',textDecoration:'none',color:'var(--text-body)',
                       borderBottom: route===id ? '2px solid var(--accent-green)' : '2px solid transparent',paddingBottom:4}}>{label}</a>
          ))}
          <Button variant="primary" accent="black" size="sm" icon="mail" iconPosition="left" href={`mailto:${CONTACT.email}`}>Contact</Button>
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
          <Logo size={32} aria-hidden="true" />
          <span style={{font:'var(--text-caption)',letterSpacing:'var(--tracking-caption)',textTransform:'uppercase',color:'var(--text-muted)'}}>{LOCATION}</span>
        </div>
        <div style={{display:'flex',gap:'var(--space-3)',alignItems:'center'}}>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" style={{display:'flex',border:0}}><Icon name="linkedin" size={20} title="LinkedIn" /></a>
          <a href={`mailto:${CONTACT.email}`} style={{display:'flex',border:0}}><Icon name="mail" size={20} title="Email" /></a>
          <a href={CV_URL} download style={{font:'var(--text-label)'}}>Download CV</a>
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

/* Segmented lifecycle indicator shared by the Work grid cards (compact,
   no labels) and the case study detail header (full, with the active
   range spelled out below). `active` is a project's `stage` array. */
function StageBar({ active = [], compact = false }) {
  const activeLabel = STAGES.filter(s => active.includes(s)).join(' → ') || 'Not started';
  return (
    <div style={{display:'flex',flexDirection:'column',gap:6}} role="img" aria-label={`Stage: ${activeLabel}`}>
      <div style={{display:'flex',gap:3}} aria-hidden="true">
        {STAGES.map(s => (
          <span key={s} style={{flex:1,height:compact?4:6,background:active.includes(s)?'var(--ink-black)':'var(--gray-200)'}} />
        ))}
      </div>
      {!compact ? (
        <>
          <div style={{display:'flex',justifyContent:'space-between',font:'var(--text-caption)',color:'var(--text-muted)'}} aria-hidden="true">
            <span>{STAGES[0]}</span>
            <span>{STAGES[STAGES.length - 1]}</span>
          </div>
          <span style={{font:'var(--text-label)'}}>{activeLabel}</span>
        </>
      ) : null}
    </div>
  );
}

Object.assign(window, { Header, Footer, Page, Eyebrow, StageBar, TAG_COLORS, PILLARS, PILLAR_COLORS, STAGES, PRODUCT_SKILLS, FULL_NAME, LOCATION, CONTACT, CV_URL });
