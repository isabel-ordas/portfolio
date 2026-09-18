const { Button, Tag, Divider, PullQuote, BarChart, Icon } = window.IsabelBrandSystem_b8d40d;
const { TAG_COLORS, PROJECTS } = window;

const project = PROJECTS.find(p => p.id === 'bondly');
const caseStudy = project.caseStudy;

/* The four founding assumptions, checked against research (from
   project.caseStudy in /content/projects/bondly.json). This is the
   centerpiece of the page on purpose — it's the clearest evidence of
   discovery/user-insight skill: not just "I did interviews" but "here's
   how the interviews changed my mind." */
const HYPOTHESES = caseStudy.hypotheses;

const RESEARCH_SCOPE = caseStudy.researchScope;

function HeroImage() {
  const [errored, setErrored] = React.useState(false);
  if (errored) {
    return (
      <div style={{marginTop:'var(--space-6)',border:'var(--border-hairline)',background:'var(--gray-100)',height:360,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:8}}>
        <Icon name="eye" size={24} color="var(--gray-500)" />
        <span style={{font:'var(--text-caption)',letterSpacing:'var(--tracking-caption)',textTransform:'uppercase',color:'var(--text-muted)'}}>Hero image — B&amp;W cover shot, one accent max</span>
      </div>
    );
  }
  return (
    <img src={`../../${project.image}`} onError={()=>setErrored(true)}
         alt={project.imageAlt}
         style={{display:'block',width:'100%',height:360,objectFit:'cover',marginTop:'var(--space-6)',border:'var(--border-hairline)',filter:'grayscale(1)'}} />
  );
}

function VerdictTag({ verdict }) {
  const color = verdict === 'False' ? 'var(--accent-brown)' : verdict.startsWith('Partly') ? 'var(--accent-yellow)' : 'var(--accent-green)';
  return <span style={{font:'var(--text-caption)',fontWeight:'var(--weight-semibold)',letterSpacing:'var(--tracking-caption)',textTransform:'uppercase',color,whiteSpace:'nowrap'}}>{verdict}</span>;
}

function CaseStudy({ go }) {
  return (
    <Page title="Bondly — case study">
      <Button variant="ghost" icon="arrow-left" iconPosition="left" onClick={()=>go('home')}>All work</Button>
      <header className="ds-two-col" style={{alignItems:'end',marginTop:'var(--space-3)'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
          <Eyebrow accent={TAG_COLORS[project.domain]}>{project.domain}</Eyebrow>
          <h1 style={{font:'var(--text-display)',letterSpacing:'var(--tracking-display)',margin:0}}>{project.title}</h1>
          <p style={{font:'var(--weight-regular) 20px/1.5 var(--font-body)',color:'var(--text-muted)',maxWidth:'46ch'}}>
            {caseStudy.subhead}
          </p>
        </div>
        <dl style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-2)',margin:0,borderTop:'var(--border-hairline)',paddingTop:'var(--space-2)'}}>
          {caseStudy.meta.map(({label,value})=>(
            <div key={label}>
              <dt style={{font:'var(--text-caption)',letterSpacing:'var(--tracking-caption)',textTransform:'uppercase',color:'var(--text-muted)'}}>{label}</dt>
              <dd style={{margin:'4px 0 0',font:'var(--text-label)'}}>{value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <Divider spacing="var(--space-6)" />

      <div className="ds-card-grid-3">
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          <Eyebrow accent="blue">Stage</Eyebrow>
          <StageBar active={project.stage} />
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          <Eyebrow accent="blue">Product skills</Eyebrow>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
            {project.productSkills.map(s => <Tag key={s} active>{s}</Tag>)}
          </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          <Eyebrow accent="blue">Tools &amp; frameworks</Eyebrow>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
            {project.toolsFrameworks.map(t => <Tag key={t}>{t}</Tag>)}
          </div>
        </div>
      </div>

      <HeroImage />

      <Divider variant="marker" spacing="var(--space-6)" />

      <section className="ds-two-col-rev">
        <h2 style={{font:'var(--text-h2)',margin:0}}>{caseStudy.problem.heading}</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',maxWidth:'62ch'}}>
          {caseStudy.problem.paragraphs.map((p,i) => (
            <p key={i} style={i > 0 ? {color:'var(--text-muted)'} : undefined}>{p}</p>
          ))}
        </div>
      </section>

      <Divider spacing="var(--space-6)" />

      <section className="ds-two-col-rev">
        <h2 style={{font:'var(--text-h2)',margin:0}}>What I assumed vs. what I found</h2>
        <div className="ds-2up">
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            <Eyebrow accent="blue">Research at a glance</Eyebrow>
            <BarChart height={180} accent="blue" highlightIndex={2} data={RESEARCH_SCOPE} />
            <p style={{font:'var(--text-caption)',color:'var(--text-muted)'}}>{caseStudy.researchSummary}</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
            <Eyebrow accent="blue">{caseStudy.hypothesesHeading}</Eyebrow>
            {HYPOTHESES.map((h,i) => (
              <div key={i} style={{borderTop:'var(--border-subtle)',paddingTop:8,display:'flex',flexDirection:'column',gap:2}}>
                <div style={{display:'flex',justifyContent:'space-between',gap:8,alignItems:'baseline'}}>
                  <span style={{font:'var(--text-caption)',color:'var(--text-muted)'}}>{h.assumption}</span>
                  <VerdictTag verdict={h.verdict} />
                </div>
                <p style={{margin:0,font:'var(--text-caption)'}}>{h.reality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider spacing="var(--space-6)" />

      <PullQuote accent="blue" attribution={caseStudy.pullQuote.attribution}>
        {caseStudy.pullQuote.text}
      </PullQuote>

      <Divider spacing="var(--space-6)" />

      <section className="ds-two-col-rev">
        <h2 style={{font:'var(--text-h2)',margin:0}}>{caseStudy.strategy.heading}</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
          <p style={{color:'var(--text-muted)',maxWidth:'62ch'}}>
            {caseStudy.strategy.paragraph}
          </p>
          {caseStudy.strategy.metrics.map(({value,description})=>(
            <div key={value} style={{display:'flex',gap:'var(--space-3)',alignItems:'baseline',borderTop:'var(--border-subtle)',paddingTop:'var(--space-2)'}}>
              <span style={{font:'var(--weight-semibold) 40px/1 var(--font-display)',minWidth:120}}>{value}</span>
              <span style={{color:'var(--text-muted)'}}>{description}</span>
            </div>
          ))}
          <div><Button variant="secondary" icon="arrow-right" onClick={()=>go('home')}>Next project</Button></div>
        </div>
      </section>
    </Page>
  );
}

Object.assign(window, { CaseStudy });
