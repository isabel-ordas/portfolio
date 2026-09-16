const { Icon, Button, Tag, Divider, PullQuote, BarChart } = window.IsabelBrandSystem_b8d40d;
const { TAG_COLORS } = window;

/* --- Editable placeholder data ------------------------------------------
   `skills` is the pending taxonomy (should mirror the "Expertise" blocks on
   the About page once that's finalized) — it drives the filter below and is
   read generically from this array, nothing hardcoded in the UI itself.
   `domainTags` are display-only now (colored via TAG_COLORS, not filtered).
   `image` / `metric` are placeholders: fill them in per project when ready,
   or leave null — both degrade gracefully. */
const PROJECTS = [
  { id:'home-in-order', eyebrow:'Case study', title:'Home in Order', accent:'green',
    description:'A product on household mental load — who tracks what, and what it costs.',
    domainTags:['Product discovery','Research'],
    skills:['Discovery & Research','Metrics & Validation'],
    image:null, imageAlt:'',
    metric:{ value:'−23%', label:'Onboarding drop-off, six weeks after release.' } },
  { id:'reuse-loops', eyebrow:'Case study', title:'Reuse loops', accent:'brown',
    description:'Mapping where returnable packaging breaks down between shop and shelf.',
    domainTags:['Circular economy','Operations'],
    skills:['Discovery & Research','Strategic Framing'],
    image:null, imageAlt:'', metric:null },
  { id:'grid-signals', eyebrow:'Case study', title:'Grid signals', accent:'blue',
    description:'Turning household energy data into a decision one person can act on.',
    domainTags:['Climate tech','Data'],
    skills:['Metrics & Validation','Delivery'],
    image:null, imageAlt:'', metric:null },
  { id:'talent-paths', eyebrow:'Internal', title:'Talent paths', accent:'yellow',
    description:'A career framework built with the team it was written for.',
    domainTags:['Talent development'],
    skills:['Strategic Framing'],
    image:null, imageAlt:'', metric:null }
];

/* Set to null to drop the hero stat entirely — the hero collapses to one
   column automatically, no other change needed. */
const HERO_METRIC = {
  value:'23%',
  label:'Onboarding drop-off cut in six weeks on Home in Order.',
  data:[{label:'W1',value:31},{label:'W2',value:28},{label:'W3',value:24},{label:'W4',value:8}]
};

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
  return (
    <a href="#" onClick={(e)=>{e.preventDefault();go('case')}}
       onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
       style={{display:'flex',flexDirection:'column',border:'var(--border-hairline)',background:'var(--surface-card)',textDecoration:'none',color:'var(--text-body)'}}>
      {project.image
        ? <img src={project.image} alt={project.imageAlt || ''} style={{display:'block',width:'100%',aspectRatio:'16 / 9',objectFit:'cover',filter:'grayscale(1)',borderBottom:'var(--border-hairline)'}} />
        : <ThumbnailPlaceholder />}
      <div style={{padding:'var(--space-3)',display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
        <Eyebrow accent={project.accent}>{project.eyebrow}</Eyebrow>
        <h3 style={{font:'var(--text-h2)',margin:0}}>{project.title}</h3>
        <p style={{font:'var(--text-paragraph)',color:'var(--text-muted)',margin:0,textWrap:'pretty'}}>{project.description}</p>
        <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
          {project.domainTags.map(t => <Tag key={t} accent={TAG_COLORS[t]}>{t}</Tag>)}
        </div>
        {project.metric ? (
          <div style={{display:'flex',alignItems:'baseline',gap:8,borderTop:'var(--border-subtle)',paddingTop:'var(--space-2)'}}>
            <span style={{font:'var(--weight-semibold) 28px/1 var(--font-display)'}}>{project.metric.value}</span>
            <span style={{font:'var(--text-caption)',color:'var(--text-muted)'}}>{project.metric.label}</span>
          </div>
        ) : (
          <div style={{font:'var(--text-caption)',color:'var(--gray-500)',borderTop:'var(--border-subtle)',paddingTop:'var(--space-2)'}}>Add a quantified outcome</div>
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
  const skills = Array.from(new Set(PROJECTS.flatMap(p => p.skills)));
  const filters = ['All', ...skills];
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.skills.includes(filter));
  return (
    <Page title="Work">
      <section className="ds-two-col" style={{alignItems:'start'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
          <Eyebrow>Product management · Circular economy</Eyebrow>
          <h1 style={{font:'var(--text-display)',letterSpacing:'var(--tracking-display)',margin:0,textWrap:'pretty'}}>Product with purpose</h1>
          <p style={{font:'var(--weight-regular) 20px/1.5 var(--font-body)',color:'var(--text-muted)',maxWidth:'46ch',textWrap:'pretty'}}>
            I build digital products. For fifteen years that meant shipping software; now it means putting that craft to work on climate and social impact.
          </p>
          <div style={{display:'flex',gap:'var(--space-2)',marginTop:'var(--space-1)'}}>
            <Button variant="primary" icon="arrow-right" onClick={()=>go('case')}>View project</Button>
            <Button variant="secondary" icon="download" iconPosition="left" onClick={()=>go('about')}>Download CV</Button>
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
          <h2 style={{font:'var(--text-h1)',margin:0}}>Selected work</h2>
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
        <PullQuote size="lg" accent="blue" attribution="Isabel — product notes">
          Designing product means deciding which problem deserves our time.
        </PullQuote>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
          {[['Empowerment & talent development','Building with and for people, not only for the product.'],
            ['Ethics, equity & sustainability','Decisions that distribute value fairly and respect the planet\'s limits.'],
            ['Technology for positive impact','Technology as a tool in service of a real problem.']].map(([t,d]) => (
            <div key={t} style={{borderTop:'var(--border-subtle)',paddingTop:'var(--space-2)'}}>
              <div style={{font:'var(--text-label)'}}>{t}</div>
              <div style={{font:'var(--text-caption)',color:'var(--text-muted)',marginTop:4}}>{d}</div>
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
}

Object.assign(window, { Home, PROJECTS });
