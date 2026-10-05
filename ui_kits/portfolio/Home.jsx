const { Icon, Tag } = window.IsabelBrandSystem_b8d40d;
const { PROJECT_TYPES, IMPACT_TYPES, IMPACT_COLORS, IMPACT_HEADINGS } = window;

const HOME_CONTENT = window.CONTENT.home;

/* Project data lives in /content/projects/*.json (see window.CONTENT) — the
   portable source of truth. `projectType` and `impactType` drive the two
   "Selected work" filters (see Chrome.jsx PROJECT_TYPES / IMPACT_TYPES);
   `impactType` is also the eyebrow above the card title and the case study
   H1. `stage` is a subset of Chrome.jsx STAGES (the full product lifecycle)
   — drives the StageBar in the case study header. `productSkills` and the
   freeform `toolsFrameworks` show only on the case study page. On the card,
   `impact` (`{value, label}` list) sits under its IMPACT_HEADINGS title,
   and `metrics` (business/process `{value, label}` highlights) follow it;
   both, and `image`, degrade gracefully when missing. */
const PROJECTS = window.CONTENT.projects;

function ThumbnailPlaceholder() {
  return (
    <div style={{background:'var(--gray-100)',aspectRatio:'16 / 9',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:8,borderBottom:'var(--border-hairline)'}}>
      <Icon name="eye" size={20} color="var(--gray-500)" />
      <span style={{font:'var(--text-caption)',letterSpacing:'var(--tracking-caption)',textTransform:'uppercase',color:'var(--text-muted)'}}>Thumbnail — add image</span>
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:4}}>
      <span style={{font:'var(--weight-semibold) 28px/1.1 var(--font-display)'}}>{value}</span>
      <span style={{font:'var(--text-caption)',color:'var(--text-muted)',textWrap:'pretty'}}>{label}</span>
    </div>
  );
}

function WorkCard({ project, go }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="#" onClick={(e)=>{e.preventDefault();go('case', project.id)}}
       onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
       onFocus={()=>setHover(true)} onBlur={()=>setHover(false)}
       style={{display:'flex',flexDirection:'column',border:'var(--border-hairline)',background:'var(--surface-card)',textDecoration:'none',color:'var(--text-body)',
               transform:hover?'translateY(-4px)':'none',transition:'transform var(--duration-slow) var(--ease-standard)'}}>
      {/* Hover/focus: the card lifts and its B&W photo turns to color — flat
          brand, so no shadow. */}
      {project.image
        ? <img src={`/${project.image}`} alt={project.imageAlt || ''} style={{display:'block',width:'100%',aspectRatio:'16 / 9',objectFit:'cover',filter:hover?'none':'grayscale(1)',transition:'filter var(--duration-slow) var(--ease-standard)',borderBottom:'var(--border-hairline)'}} />
        : <ThumbnailPlaceholder />}
      <div style={{flex:1,padding:'var(--space-3)',display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
        <Eyebrow accent={IMPACT_COLORS[project.impactType]}>{project.impactType}</Eyebrow>
        <h3 style={{font:'var(--text-h2)',margin:0}}>{project.title}</h3>
        {project.impact?.length ? (
          <div style={{display:'flex',flexDirection:'column',gap:'var(--space-1)',borderTop:'var(--border-subtle)',paddingTop:'var(--space-2)'}}>
            <span style={{font:'var(--text-caption)',letterSpacing:'var(--tracking-caption)',textTransform:'uppercase',color:'var(--text-muted)'}}>{IMPACT_HEADINGS[project.impactType]}</span>
            <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
              {project.impact.map(m => <Metric key={m.value} {...m} />)}
            </div>
          </div>
        ) : null}
        {project.metrics?.length ? (
          <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',borderTop:'var(--border-subtle)',paddingTop:'var(--space-2)'}}>
            {project.metrics.map(m => <Metric key={m.value} {...m} />)}
          </div>
        ) : null}
        {!project.impact?.length && !project.metrics?.length ? (
          <div style={{font:'var(--text-caption)',color:'var(--text-muted)',borderTop:'var(--border-subtle)',paddingTop:'var(--space-2)'}}>Add a quantified outcome</div>
        ) : null}
        {/* Styled like the DS secondary Button (md) — a span, since the
            whole card is already the link. Fills on card hover/focus. */}
        <span style={{alignSelf:'flex-start',marginTop:'auto',display:'inline-flex',alignItems:'center',gap:8,padding:'16px 24px',font:'var(--text-label)',
                      border:'var(--border-hairline)',background:hover?'var(--ink-black)':'transparent',color:hover?'var(--text-inverse)':'var(--text-body)',transition:'var(--transition-color)'}}>
          View project <Icon name="arrow-right" size={20} style={{transform:hover?'translateX(4px)':'none',transition:'transform var(--duration-base) var(--ease-standard)'}} />
        </span>
      </div>
    </a>
  );
}

/* One row of filter pills. Only values some project actually uses are
   offered, so a pill never leads to an empty grid on its own. */
function FilterRow({ label, values, value, onChange }) {
  const options = ['All', ...values];
  return (
    <div role="group" aria-label={label} style={{display:'flex',alignItems:'center',gap:'var(--space-2)'}}>
      <span style={{font:'var(--text-caption)',letterSpacing:'var(--tracking-caption)',textTransform:'uppercase',color:'var(--text-muted)',minWidth:'5.5em'}}>{label}</span>
      <div className="ds-scroll-row" style={{display:'flex',gap:8}}>
        {options.map(o => (
          <Tag key={o} as="button" active={value===o} aria-pressed={value===o} onClick={()=>onChange(o)} style={{cursor:'pointer',border:value===o?'1px solid var(--ink-black)':'var(--border-subtle)'}}>{o}</Tag>
        ))}
      </div>
    </div>
  );
}

function Home({ go }) {
  const [type, setType] = React.useState('All');
  const [impact, setImpact] = React.useState('All');
  const usedTypes = PROJECT_TYPES.filter(t => PROJECTS.some(p => p.projectType === t));
  const usedImpacts = IMPACT_TYPES.filter(t => PROJECTS.some(p => p.impactType === t));
  const shown = PROJECTS.filter(p => (type === 'All' || p.projectType === type) && (impact === 'All' || p.impactType === impact));
  return (
    <Page title="Work">
      <section style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
        <h1 style={{font:'var(--text-h1)',margin:0}}>{HOME_CONTENT.selectedWorkHeading}</h1>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-1)'}}>
          <FilterRow label="Type" values={usedTypes} value={type} onChange={setType} />
          <FilterRow label="Impact" values={usedImpacts} value={impact} onChange={setImpact} />
        </div>
        <div className="ds-work-grid">
          {shown.map(p => <WorkCard key={p.id} project={p} go={go} />)}
        </div>
        {!shown.length ? <p style={{color:'var(--text-muted)'}}>No projects match both filters yet.</p> : null}
      </section>

    </Page>
  );
}

Object.assign(window, { Home, PROJECTS });
