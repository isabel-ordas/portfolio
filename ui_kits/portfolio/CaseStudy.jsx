const { Button, Tag, Divider, BarChart, Icon } = window.IsabelBrandSystem_b8d40d;
const { TAG_COLORS, PROJECTS } = window;

/* Case studies are data-driven (project.caseStudy in /content/projects/*.json)
   so a new project only needs a JSON entry, not a new page. `caseStudy.sections`
   is an ordered list of typed blocks — see the switch in <Section> below for the
   supported types (text, hypotheses, table, list, personas, definition, gallery). Keep
   the vocabulary closed: extend it deliberately when a new case study needs a
   genuinely new shape, rather than growing a one-off per project. */

function HeroImage({ project }) {
  const [errored, setErrored] = React.useState(false);
  if (!project.image || errored) {
    return (
      <div style={{marginTop:'var(--space-6)',border:'var(--border-hairline)',background:'var(--gray-100)',height:360,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:8}}>
        <Icon name="eye" size={24} color="var(--gray-500)" />
        <span style={{font:'var(--text-caption)',letterSpacing:'var(--tracking-caption)',textTransform:'uppercase',color:'var(--text-muted)'}}>Hero image — B&amp;W cover shot, one accent max</span>
      </div>
    );
  }
  return (
    <img src={`/${project.image}`} onError={()=>setErrored(true)}
         alt={project.imageAlt}
         style={{display:'block',width:'100%',height:360,objectFit:'cover',marginTop:'var(--space-6)',border:'var(--border-hairline)',filter:'grayscale(1)'}} />
  );
}

function VerdictTag({ verdict }) {
  const color = verdict === 'False' ? 'var(--accent-brown)' : verdict.startsWith('Partly') ? 'var(--accent-yellow)' : 'var(--accent-green)';
  return <span style={{font:'var(--text-caption)',fontWeight:'var(--weight-semibold)',letterSpacing:'var(--tracking-caption)',textTransform:'uppercase',color,whiteSpace:'nowrap'}}>{verdict}</span>;
}

function SectionHeading({ children }) {
  return <h2 style={{font:'var(--text-h2)',margin:0}}>{children}</h2>;
}

function TextSection({ section }) {
  return (
    <section className="ds-two-col-rev">
      <SectionHeading>{section.heading}</SectionHeading>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',maxWidth:'62ch'}}>
        {section.paragraphs.map((p,i) => (
          <p key={i} style={i > 0 ? {color:'var(--text-muted)',margin:0} : {margin:0}}>{p}</p>
        ))}
      </div>
    </section>
  );
}

function HypothesesSection({ section }) {
  return (
    <section className="ds-two-col-rev">
      <SectionHeading>{section.heading}</SectionHeading>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
        {section.keyRealization ? (
          <p style={{margin:0,font:'var(--weight-semibold) 18px/1.5 var(--font-body)'}}>{section.keyRealization}</p>
        ) : null}
        <div className="ds-2up">
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            <Eyebrow accent="blue">Research at a glance</Eyebrow>
            <BarChart height={180} accent="blue" highlightIndex={section.researchScope.length - 1} data={section.researchScope} />
            <p style={{font:'var(--text-caption)',color:'var(--text-muted)'}}>{section.researchSummary}</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
            <Eyebrow accent="blue">What I assumed vs. what I found</Eyebrow>
            {section.items.map((h,i) => (
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
      </div>
    </section>
  );
}

function TableSection({ section }) {
  return (
    <section className="ds-two-col-rev">
      <SectionHeading>{section.heading}</SectionHeading>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',maxWidth:'72ch'}}>
        {section.intro ? <p style={{margin:0,color:'var(--text-muted)'}}>{section.intro}</p> : null}
        <table style={{width:'100%',borderCollapse:'collapse',font:'var(--text-caption)'}}>
          <thead>
            <tr>
              {section.columns.map((c,i) => (
                <th key={i} style={{textAlign:'left',padding:'8px 12px 8px 0',borderBottom:'1px solid var(--ink-black)',letterSpacing:'var(--tracking-caption)',textTransform:'uppercase',color:'var(--text-muted)'}}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row,i) => (
              <tr key={i}>
                {row.map((cell,j) => (
                  <td key={j} style={{padding:'8px 12px 8px 0',borderBottom:'var(--border-subtle)',verticalAlign:'top'}}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {section.note ? <p style={{margin:0,font:'var(--text-caption)',color:'var(--text-muted)',fontStyle:'italic'}}>{section.note}</p> : null}
      </div>
    </section>
  );
}

function ListSection({ section }) {
  const ListTag = section.ordered ? 'ol' : 'ul';
  return (
    <section className="ds-two-col-rev">
      <SectionHeading>{section.heading}</SectionHeading>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',maxWidth:'62ch'}}>
        {section.intro ? <p style={{margin:0,color:'var(--text-muted)'}}>{section.intro}</p> : null}
        <ListTag style={{margin:0,paddingLeft:'1.25em',display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
          {section.items.map((item,i) => <li key={i} style={{color:'var(--text-muted)'}}>{item}</li>)}
        </ListTag>
      </div>
    </section>
  );
}

function DefinitionSection({ section }) {
  return (
    <section className="ds-two-col-rev">
      <SectionHeading>{section.heading}</SectionHeading>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',maxWidth:'62ch'}}>
        {section.intro ? <p style={{margin:0}}>{section.intro}</p> : null}
        {section.items.map((d,i) => (
          <div key={i} style={{borderTop:i>0?'var(--border-subtle)':'none',paddingTop:i>0?8:0}}>
            <span style={{font:'var(--text-label)'}}>{d.term}</span>
            <p style={{margin:'2px 0 0',color:'var(--text-muted)'}}>{d.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PersonaCard({ persona }) {
  return (
    <div style={{border:'var(--border-hairline)',padding:'var(--space-3)',display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
      <div>
        <span style={{font:'var(--text-label)'}}>{persona.name}</span>
        <span style={{display:'block',font:'var(--text-caption)',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'var(--tracking-caption)'}}>{persona.label}</span>
      </div>
      <p style={{margin:0,color:'var(--text-muted)'}}>{persona.description}</p>
      <blockquote style={{margin:0,paddingLeft:'var(--space-2)',borderLeft:'2px solid var(--accent-blue)',font:'var(--weight-semibold) 15px/1.5 var(--font-body)'}}>&ldquo;{persona.quote}&rdquo;</blockquote>
      <p style={{margin:0,font:'var(--text-caption)',color:'var(--text-muted)'}}>{persona.needs}</p>
    </div>
  );
}

function PersonasSection({ section }) {
  return (
    <section style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
      <SectionHeading>{section.heading}</SectionHeading>
      <div className="ds-card-grid-3">
        {section.items.map((p,i) => <PersonaCard key={i} persona={p} />)}
      </div>
    </section>
  );
}

/* Screenshots and boards stay in color (unlike the B&W hero/card photos):
   they're evidence, not mood. `layout: "scroll"` is for one tall image
   (a board, a stacked storyboard) shown in a bounded scroll frame;
   `layout: "grid"` tiles 16:9 slides two-up. Every image links to its
   full-size file so small text stays readable. */
function GalleryImage({ image, scroll }) {
  return (
    <figure style={{margin:0,display:'flex',flexDirection:'column',gap:8}}>
      <a href={`/${image.src}`} target="_blank" rel="noopener" aria-label={`${image.alt} (open full size)`}
         style={{display:'block',border:'var(--border-hairline)',overflow:scroll?'auto':'hidden',maxHeight:scroll?'70vh':'none',background:'var(--paper-white)'}}>
        <img src={`/${image.src}`} alt={image.alt} loading="lazy" style={{display:'block',width:'100%',height:'auto'}} />
      </a>
      {image.caption ? (
        <figcaption style={{display:'flex',justifyContent:'space-between',gap:'var(--space-2)',font:'var(--text-caption)',color:'var(--text-muted)'}}>
          <span>{image.caption}</span>
          <a href={`/${image.src}`} target="_blank" rel="noopener" style={{whiteSpace:'nowrap',color:'var(--text-muted)'}}>Full size</a>
        </figcaption>
      ) : null}
    </figure>
  );
}

function GallerySection({ section }) {
  const scroll = section.layout === 'scroll';
  return (
    <section style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
      <SectionHeading>{section.heading}</SectionHeading>
      {section.intro ? <p style={{margin:0,maxWidth:'62ch',color:'var(--text-muted)'}}>{section.intro}</p> : null}
      <div className={scroll ? undefined : 'ds-2up'} style={{display:'grid',gap:'var(--space-3)'}}>
        {section.images.map((img,i) => <GalleryImage key={i} image={img} scroll={scroll} />)}
      </div>
    </section>
  );
}

function Section({ section }) {
  switch (section.type) {
    case 'text': return <TextSection section={section} />;
    case 'hypotheses': return <HypothesesSection section={section} />;
    case 'table': return <TableSection section={section} />;
    case 'list': return <ListSection section={section} />;
    case 'definition': return <DefinitionSection section={section} />;
    case 'personas': return <PersonasSection section={section} />;
    case 'gallery': return <GallerySection section={section} />;
    default: return null;
  }
}

function CaseStudy({ go, id }) {
  const project = PROJECTS.find(p => p.id === id) || PROJECTS[0];
  const caseStudy = project && project.caseStudy;

  if (!caseStudy) {
    return (
      <Page title={project ? project.title : 'Case study'}>
        <Button variant="ghost" icon="arrow-left" iconPosition="left" onClick={()=>go('home')}>All work</Button>
        <p style={{marginTop:'var(--space-4)',color:'var(--text-muted)'}}>No case study written up yet for this project.</p>
      </Page>
    );
  }

  return (
    <Page title={`${project.title} — case study`}>
      <Button variant="ghost" icon="arrow-left" iconPosition="left" onClick={()=>go('home')}>All work</Button>
      <header style={{marginTop:'var(--space-3)',display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
        <div className="ds-two-col" style={{alignItems:'end'}}>
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
        </div>
        {caseStudy.contextNote ? (
          <p style={{margin:0,maxWidth:'72ch',font:'var(--text-caption)',fontStyle:'italic',color:'var(--text-muted)'}}>{caseStudy.contextNote}</p>
        ) : null}
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

      <HeroImage project={project} />

      {caseStudy.sections.map((section,i) => (
        <React.Fragment key={i}>
          <Divider variant={i === 0 ? 'marker' : undefined} spacing="var(--space-6)" />
          <Section section={section} />
        </React.Fragment>
      ))}

      <Divider spacing="var(--space-6)" />
      <div><Button variant="secondary" icon="arrow-right" onClick={()=>go('home')}>Back to all work</Button></div>
    </Page>
  );
}

Object.assign(window, { CaseStudy });
