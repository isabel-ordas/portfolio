const { Button, Divider, Icon } = window.IsabelBrandSystem_b8d40d;
const { FULL_NAME } = window;

/* Editable placeholders — subtitle text and pending review. */
const SUBTITLE = 'Building climate-positive products';

/* Expertise blocks: structure is set, wording and set of blocks are still
   under review. `relatedCaseStudy` is an optional project id (see Home.jsx
   PROJECTS) to link to once we decide which case study best backs each
   block — leave null until then. */
const EXPERTISE = [
  { title:'Discovery & Research', description:'Placeholder — running interviews and framing the problem before reaching for a solution.', relatedCaseStudy:null },
  { title:'Strategic Framing', description:'Placeholder — turning ambiguity into a roadmap a team can actually act on.', relatedCaseStudy:null },
  { title:'Metrics & Validation', description:'Placeholder — defining what success means, then proving it happened.', relatedCaseStudy:null },
  { title:'Delivery', description:'Placeholder — shipping with the people who will maintain what gets built.', relatedCaseStudy:null }
];

function Portrait() {
  const [errored, setErrored] = React.useState(false);
  if (errored) {
    return (
      <div style={{background:'var(--gray-100)',aspectRatio:'4 / 5',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:8}}>
        <Icon name="users" size={24} color="var(--gray-500)" />
        <span style={{font:'var(--text-caption)',letterSpacing:'var(--tracking-caption)',textTransform:'uppercase',color:'var(--text-muted)',textAlign:'center'}}>Portrait — b&amp;w, blue accent<br/>drop file at assets/portrait.jpg</span>
      </div>
    );
  }
  return (
    <img src="../../assets/portrait.jpg" onError={()=>setErrored(true)}
         alt={`${FULL_NAME} — black and white portrait`}
         style={{display:'block',width:'100%',aspectRatio:'4 / 5',objectFit:'cover',filter:'grayscale(1)'}} />
  );
}

function About({ go }) {
  return (
    <Page title="About">
      <section className="ds-two-col" style={{alignItems:'start'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
          <Eyebrow accent="blue">About</Eyebrow>
          <div>
            <h1 style={{font:'var(--text-display)',letterSpacing:'var(--tracking-display)',margin:0,textWrap:'pretty'}}>{FULL_NAME}</h1>
            <p style={{font:'var(--weight-regular) 24px/1.3 var(--font-display)',color:'var(--text-muted)',margin:'4px 0 0'}}>{SUBTITLE}</p>
          </div>
          <p style={{color:'var(--text-muted)',maxWidth:'58ch',textWrap:'pretty'}}>
            I work from Barbastro, in the Somontano, and I like problems that are boring on the surface and structural underneath — packaging that never comes back, energy bills nobody can read, chores nobody counts.
          </p>
          <p style={{color:'var(--text-muted)',maxWidth:'58ch',textWrap:'pretty'}}>
            I build with the people who will use the thing, and with the people who will maintain it. Both matter.
          </p>
          <div style={{display:'flex',gap:'var(--space-2)',marginTop:'var(--space-1)'}}>
            <Button variant="primary" accent="blue" icon="download" iconPosition="left">Download CV</Button>
          </div>
        </div>
        <div style={{border:'var(--border-hairline)',padding:'var(--space-3)',display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
          <Portrait />
          <div style={{display:'flex',alignItems:'center',gap:8,font:'var(--text-caption)',color:'var(--text-muted)'}}>
            <Icon name="map-pin" size={16} active accent="blue" />Barbastro, Somontano — Aragón, Spain
          </div>
        </div>
      </section>

      <Divider variant="marker" spacing="var(--space-6)" />

      <section style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
        <h2 style={{font:'var(--text-h2)',margin:0}}>Expertise</h2>
        <div className="ds-card-grid">
          {EXPERTISE.map(block => (
            <div key={block.title} style={{borderTop:'var(--border-subtle)',paddingTop:'var(--space-2)',display:'flex',flexDirection:'column',gap:8}}>
              <div style={{font:'var(--text-label)'}}>{block.title}</div>
              <p style={{color:'var(--text-muted)',margin:0}}>{block.description}</p>
              {block.relatedCaseStudy ? (
                <a href="#" onClick={(e)=>{e.preventDefault();go('case')}} style={{font:'var(--text-caption)',border:0}}>View case study →</a>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
}

function Writing({ go }) {
  const posts = [
    ['Mar 2026','The requirement is never the problem','On discovery as an act of translation, not transcription.','green'],
    ['Jan 2026','Four colors, one gesture','Why the recycling bin is the most universal interface in Europe.','yellow'],
    ['Nov 2025','Counting invisible work','What household chore logs taught me about product metrics.','blue']
  ];
  return (
    <Page title="Writing">
      <Eyebrow accent="brown">Writing</Eyebrow>
      <h1 style={{font:'var(--text-h1)',margin:'var(--space-2) 0 0'}}>Notes on product and impact</h1>
      <div style={{marginTop:'var(--space-6)',display:'flex',flexDirection:'column'}}>
        {posts.map(([when,title,blurb,accent]) => (
          <a key={title} href="#" onClick={(e)=>e.preventDefault()}
             style={{display:'grid',gridTemplateColumns:'160px 1fr auto',gap:'var(--space-3)',alignItems:'center',
                     padding:'var(--space-3) 0',textDecoration:'none',border:0,borderTop:'1px solid var(--stroke-subtle)',color:'var(--text-body)'}}>
            <span style={{font:'var(--text-caption)',letterSpacing:'var(--tracking-caption)',textTransform:'uppercase',color:'var(--text-muted)'}}>{when}</span>
            <span>
              <span style={{font:'var(--text-h3)',display:'block'}}>{title}</span>
              <span style={{color:'var(--text-muted)'}}>{blurb}</span>
            </span>
            <Icon name="arrow-up-right" size={20} />
          </a>
        ))}
      </div>
    </Page>
  );
}

Object.assign(window, { About, Writing });
