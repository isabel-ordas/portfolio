const { Icon, Button, Tag, Divider, PullQuote, BarChart } = window.IsabelBrandSystem_b8d40d;
const { TAG_COLORS, PRODUCT_SKILLS, CV_URL } = window;

const HOME_CONTENT = window.CONTENT.home;

/* Project data lives in /content/projects/*.json (see window.CONTENT) — the
   portable source of truth. `domain` is a single sector/impact-area value,
   colored via TAG_COLORS and shown as the eyebrow above the card title and
   the case study H1. `stage` is a subset of Chrome.jsx STAGES (the full
   product lifecycle) — drives the segmented StageBar on the card (compact)
   and the case study header (full, with labels). `productSkills` is a
   subset of Chrome.jsx PRODUCT_SKILLS, the closed vocabulary of specific PM
   skills — drives the "Selected work" filter below (only skills actually
   used by a project appear as filter pills) and the skill chips on the card
   (top 2 + overflow) and case study page (all of them). `toolsFrameworks`
   is freeform per project — not filtered, shown in full only on the case
   study page. `image` / `metric` are placeholders: fill them in per
   project's JSON when ready, or leave null — both degrade gracefully. */
const PROJECTS = window.CONTENT.projects;

/* Set home.json's `heroMetric` to an object like
   { value, label, data:[{label,value},...] } to bring the hero stat back —
   the hero grid switches to two columns again automatically, no other
   change needed. */
const HERO_METRIC = HOME_CONTENT.heroMetric;

function ThumbnailPlaceholder() {
  return (
    <div style={{background:'var(--gray-100)',aspectRatio:'16 / 9',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:8,borderBottom:'var(--border-hairline)'}}>
      <Icon name="eye" size={20} color="var(--gray-500)" />
      <span style={{font:'var(--text-caption)',letterSpacing:'var(--tracking-caption)',textTransform:'uppercase',color:'var(--text-muted)'}}>Thumbnail — add image</span>
    </div>
  );
}

function WorkCard({ project, go }) {
  const [hover, setHover] = React.useState(false);
  const topSkills = project.productSkills.slice(0, 2);
  const overflow = project.productSkills.length - topSkills.length;
  return (
    <a href="#" onClick={(e)=>{e.preventDefault();go('case', project.id)}}
       onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
       style={{display:'flex',flexDirection:'column',border:'var(--border-hairline)',background:'var(--surface-card)',textDecoration:'none',color:'var(--text-body)'}}>
      {project.image
        ? <img src={`/${project.image}`} alt={project.imageAlt || ''} style={{display:'block',width:'100%',aspectRatio:'16 / 9',objectFit:'cover',filter:'grayscale(1)',borderBottom:'var(--border-hairline)'}} />
        : <ThumbnailPlaceholder />}
      <div style={{padding:'var(--space-3)',display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
        <Eyebrow accent={TAG_COLORS[project.domain]}>{project.domain}</Eyebrow>
        <h3 style={{font:'var(--text-h2)',margin:0}}>{project.title}</h3>
        <p style={{font:'var(--text-paragraph)',color:'var(--text-muted)',margin:0,textWrap:'pretty'}}>{project.description}</p>
        <StageBar active={project.stage} compact />
        <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
          {topSkills.map(s => <Tag key={s}>{s}</Tag>)}
          {overflow > 0 ? <Tag>{`+${overflow}`}</Tag> : null}
        </div>
        {project.metric ? (
          <div style={{display:'flex',alignItems:'baseline',gap:8,borderTop:'var(--border-subtle)',paddingTop:'var(--space-2)'}}>
            <span style={{font:'var(--weight-semibold) 28px/1 var(--font-display)'}}>{project.metric.value}</span>
            <span style={{font:'var(--text-caption)',color:'var(--text-muted)'}}>{project.metric.label}</span>
          </div>
        ) : (
          <div style={{font:'var(--text-caption)',color:'var(--text-muted)',borderTop:'var(--border-subtle)',paddingTop:'var(--space-2)'}}>Add a quantified outcome</div>
        )}
        <span style={{display:'flex',alignItems:'center',gap:8,font:'var(--text-label)',color:hover ? 'var(--accent-green)' : 'var(--text-body)',transition:'var(--transition-color)'}}>
          View project <Icon name="arrow-right" size={16} style={{transform:hover?'translateX(4px)':'none',transition:'transform var(--duration-base) var(--ease-standard)'}} />
        </span>
      </div>
    </a>
  );
}

function Home({ go }) {
  const [filter, setFilter] = React.useState('All');
  const usedSkills = PRODUCT_SKILLS.filter(s => PROJECTS.some(p => p.productSkills.includes(s)));
  const filters = ['All', ...usedSkills];
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.productSkills.includes(filter));
  return (
    <Page title="Work">
      <section className="ds-two-col" style={{alignItems:'start'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
          <Eyebrow>{HOME_CONTENT.eyebrow}</Eyebrow>
          <h1 style={{font:'var(--text-display)',letterSpacing:'var(--tracking-display)',margin:0,textWrap:'pretty'}}>{HOME_CONTENT.heading}</h1>
          <p style={{font:'var(--weight-regular) 20px/1.5 var(--font-body)',color:'var(--text-muted)',maxWidth:'46ch',textWrap:'pretty'}}>
            {HOME_CONTENT.intro}
          </p>
          <div style={{display:'flex',gap:'var(--space-2)',marginTop:'var(--space-1)'}}>
            <Button variant="primary" icon="arrow-right" onClick={()=>go('case', PROJECTS[0] && PROJECTS[0].id)}>{HOME_CONTENT.primaryCta}</Button>
            <Button variant="secondary" icon="download" iconPosition="left" href={CV_URL} download>{HOME_CONTENT.secondaryCta}</Button>
          </div>
        </div>
        {HERO_METRIC ? (
          <div style={{border:'var(--border-hairline)',padding:'var(--space-3)',display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
            <Eyebrow accent="yellow">The number that matters</Eyebrow>
            <div style={{display:'flex',alignItems:'center',gap:'var(--space-2)'}}>
              <span aria-hidden="true" style={{width:16,height:16,background:'var(--accent-yellow)',flex:'0 0 auto'}} />
              <span style={{font:'var(--weight-semibold) 64px/1 var(--font-display)',letterSpacing:'var(--tracking-display)'}}>{HERO_METRIC.value}</span>
            </div>
            <p style={{font:'var(--text-paragraph)',color:'var(--text-muted)'}}>{HERO_METRIC.label}</p>
            <Divider variant="rule" width={48} spacing="var(--space-1)" />
            <BarChart height={96} accent="yellow" highlightIndex={HERO_METRIC.data.length - 1} showValues={false} data={HERO_METRIC.data} />
          </div>
        ) : null}
      </section>

      <Divider variant="marker" spacing="var(--space-6)" />

      <section style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:'var(--space-3)',flexWrap:'wrap'}}>
          <h2 style={{font:'var(--text-h1)',margin:0}}>{HOME_CONTENT.selectedWorkHeading}</h2>
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            {filters.map(f => (
              <Tag key={f} as="button" active={filter===f} onClick={()=>setFilter(f)} style={{cursor:'pointer',border:filter===f?'1px solid var(--ink-black)':'var(--border-subtle)'}}>{f}</Tag>
            ))}
          </div>
        </div>
        <div className="ds-card-grid">
          {shown.map(p => <WorkCard key={p.id} project={p} go={go} />)}
        </div>
        {!shown.length ? <p style={{color:'var(--text-muted)'}}>Nothing filed under “{filter}” yet.</p> : null}
      </section>

      <Divider variant="marker" spacing="var(--space-6)" />

      <section className="ds-two-col" style={{alignItems:'center'}}>
        <PullQuote size="lg" accent="blue" attribution={HOME_CONTENT.quote.attribution}>
          {HOME_CONTENT.quote.text}
        </PullQuote>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
          {HOME_CONTENT.values.map(({title,description}) => (
            <div key={title} style={{borderTop:'var(--border-subtle)',paddingTop:'var(--space-2)'}}>
              <div style={{font:'var(--text-label)'}}>{title}</div>
              <div style={{font:'var(--text-caption)',color:'var(--text-muted)',marginTop:4}}>{description}</div>
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
}

Object.assign(window, { Home, PROJECTS });
