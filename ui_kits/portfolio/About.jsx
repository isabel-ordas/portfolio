const { Button, Divider, Icon, PullQuote } = window.IsabelBrandSystem_b8d40d;
const { FULL_NAME, LOCATION, CV_URL } = window;

const ABOUT_CONTENT = window.CONTENT.about;

const SUBTITLE = ABOUT_CONTENT.subtitle;
const INTRO = ABOUT_CONTENT.intro;
const BODY = ABOUT_CONTENT.body;
const CLOSING_QUOTE = ABOUT_CONTENT.closingQuote;

const HERO = ABOUT_CONTENT.hero;

/* Each phrase in `headlineAccents` gets a thick underline in the color of
   its element in the illustration (water, sun, soil, plant). Underline
   rather than text color: yellow text on white fails contrast. */
function HeroHeadline() {
  const parts = [];
  let rest = HERO.headline;
  (HERO.headlineAccents || []).forEach(({ text, accent }) => {
    const i = rest.indexOf(text);
    if (i < 0) return;
    parts.push(rest.slice(0, i));
    parts.push(
      <span key={text} style={{textDecoration:`underline var(--accent-${accent})`,textDecorationThickness:'0.14em',textUnderlineOffset:'0.12em',textDecorationSkipInk:'none'}}>{text}</span>
    );
    rest = rest.slice(i + text.length);
  });
  parts.push(rest);
  return <>{parts}</>;
}

/* The illustration plays once; a Replay button appears when it ends (its
   last step is the second leaf, #ih-l2). Replaying remounts the inlined SVG,
   which restarts its CSS animation. No button under reduced motion, where
   the SVG's own rule turns the animation off. */
function HeroArt() {
  const [run, setRun] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return (
    <div className="ds-hero-art" style={{position:'relative'}}>
      <div key={run} style={{width:'100%',height:'100%'}}
           onAnimationEnd={(e)=>{ if (e.target.id === 'ih-l2') setDone(true); }}
           dangerouslySetInnerHTML={{__html: window.CONTENT.aboutHeroSvg}} />
      {done && !reduceMotion ? (
        <Button variant="ghost" size="sm" aria-label="Replay animation"
                onClick={()=>{ setDone(false); setRun(r => r + 1); }}
                style={{position:'absolute',left:0,bottom:0}}>↻ Replay</Button>
      ) : null}
    </div>
  );
}

function About({ go }) {
  return (
    <Page title="About">
      <section className="ds-hero">
        <h1 className="ds-hero-headline"><HeroHeadline /></h1>
        <HeroArt />
      </section>

      <Divider variant="marker" spacing="var(--space-6)" />

      <section>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
          <Eyebrow accent="blue">About</Eyebrow>
          <div>
            <h2 style={{font:'var(--text-display)',letterSpacing:'var(--tracking-display)',margin:0,textWrap:'pretty'}}>{FULL_NAME}</h2>
            <p style={{font:'var(--weight-regular) 24px/1.3 var(--font-display)',color:'var(--text-muted)',margin:'4px 0 0'}}>{SUBTITLE}</p>
            <div style={{display:'flex',alignItems:'center',gap:8,font:'var(--text-caption)',color:'var(--text-muted)',marginTop:'var(--space-2)'}}>
              <Icon name="map-pin" size={16} active accent="blue" />{LOCATION}
            </div>
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
          <a key={title} href="#" onClick={(e)=>e.preventDefault()} className="ds-post-row"
             style={{display:'grid',gap:'var(--space-3)',alignItems:'center',
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
