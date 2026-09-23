const { Button, Divider, Icon, PullQuote } = window.IsabelBrandSystem_b8d40d;
const { FULL_NAME, LOCATION, PILLAR_COLORS, CV_URL } = window;

const ABOUT_CONTENT = window.CONTENT.about;

const SUBTITLE = ABOUT_CONTENT.subtitle;
const INTRO = ABOUT_CONTENT.intro;
const BODY = ABOUT_CONTENT.body;
const CLOSING_QUOTE = ABOUT_CONTENT.closingQuote;
const PORTRAIT_SRC = ABOUT_CONTENT.portrait;

/* Expertise: the same three pillars used as the Work filter taxonomy
   (see Home.jsx PROJECTS.skills and Chrome.jsx PILLAR_COLORS), so a
   color always means the same thing across the site. Content (including
   each item's optional `linkedCaseStudy` — a project id from
   Home.jsx PROJECTS) lives in /content/about.json; accent color is looked
   up here from Chrome.jsx's PILLAR_COLORS so both stay in sync. */
const EXPERTISE = ABOUT_CONTENT.expertise.map(block => ({
  title: block.pillar,
  accent: PILLAR_COLORS[block.pillar],
  items: block.items
}));

const TOOLS = ABOUT_CONTENT.tools;

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
    <img src={`/${PORTRAIT_SRC}`} onError={()=>setErrored(true)}
         alt={`${FULL_NAME} — black and white portrait`}
         style={{display:'block',width:'100%',aspectRatio:'4 / 5',objectFit:'cover',objectPosition:'center top',filter:'grayscale(1)'}} />
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
          <p style={{font:'var(--weight-semibold) 20px/1.5 var(--font-body)',margin:0,textWrap:'pretty'}}>
            {INTRO}
          </p>
          {BODY.map((p,i) => (
            <p key={i} style={{color:'var(--text-muted)',maxWidth:'58ch',textWrap:'pretty'}}>{p}</p>
          ))}
          <div style={{marginTop:'var(--space-2)'}}>
            <PullQuote size="lg" accent="blue">{CLOSING_QUOTE}</PullQuote>
          </div>
          <div style={{display:'flex',gap:'var(--space-2)',marginTop:'var(--space-2)'}}>
            <Button variant="secondary" icon="download" iconPosition="left" href={CV_URL} download>Download CV</Button>
          </div>
        </div>
        <div style={{border:'var(--border-hairline)',padding:'var(--space-3)',display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
          <Portrait />
          <div style={{display:'flex',alignItems:'center',gap:8,font:'var(--text-caption)',color:'var(--text-muted)'}}>
            <Icon name="map-pin" size={16} active accent="blue" />{LOCATION}
          </div>
        </div>
      </section>

      <Divider variant="marker" spacing="var(--space-6)" />

      <section style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
        <h2 style={{font:'var(--text-h2)',margin:0}}>Expertise</h2>
        <div className="ds-card-grid-3">
          {EXPERTISE.map(block => (
            <div key={block.title} style={{borderTop:'var(--border-subtle)',paddingTop:'var(--space-2)',display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
              <Eyebrow accent={block.accent}>{block.title}</Eyebrow>
              <ul style={{margin:0,padding:0,listStyle:'none',display:'flex',flexDirection:'column',gap:10}}>
                {block.items.map((item,i) => (
                  <li key={i} style={{color:'var(--text-muted)',textWrap:'pretty'}}>
                    {item.text}
                    {item.linkedCaseStudy ? (
                      <a href="#" onClick={(e)=>{e.preventDefault();go('case')}} style={{display:'block',font:'var(--text-caption)',border:0,marginTop:4}}>View case study →</a>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{font:'var(--text-caption)',letterSpacing:'var(--tracking-caption)',color:'var(--text-muted)'}}>
          Tools: {TOOLS.join(', ')}
        </div>
      </section>
    </Page>
  );
}

function Writing({ go }) {
  const WRITING_CONTENT = window.CONTENT.writing;
  return (
    <Page title="Writing">
      <Eyebrow accent="brown">{WRITING_CONTENT.eyebrow}</Eyebrow>
      <h1 style={{font:'var(--text-h1)',margin:'var(--space-2) 0 0'}}>{WRITING_CONTENT.heading}</h1>
      <div style={{marginTop:'var(--space-6)',display:'flex',flexDirection:'column'}}>
        {WRITING_CONTENT.posts.map(({date,title,blurb}) => (
          <a key={title} href="#" onClick={(e)=>e.preventDefault()}
             style={{display:'grid',gridTemplateColumns:'160px 1fr auto',gap:'var(--space-3)',alignItems:'center',
                     padding:'var(--space-3) 0',textDecoration:'none',border:0,borderTop:'1px solid var(--stroke-subtle)',color:'var(--text-body)'}}>
            <span style={{font:'var(--text-caption)',letterSpacing:'var(--tracking-caption)',textTransform:'uppercase',color:'var(--text-muted)'}}>{date}</span>
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
