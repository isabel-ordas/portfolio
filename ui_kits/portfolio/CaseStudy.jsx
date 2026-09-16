const { Button, Tag, Divider, PullQuote, BarChart, LineChart, Icon } = window.IsabelBrandSystem_b8d40d;
const { TAG_COLORS } = window;

function CaseStudy({ go }) {
  return (
    <Page title="Home in Order — case study">
      <Button variant="ghost" icon="arrow-left" iconPosition="left" onClick={()=>go('home')}>All work</Button>
      <header className="ds-two-col" style={{alignItems:'end',marginTop:'var(--space-3)'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
          <Eyebrow>Case study · 2025</Eyebrow>
          <h1 style={{font:'var(--text-display)',letterSpacing:'var(--tracking-display)',margin:0}}>Home in Order</h1>
          <p style={{font:'var(--weight-regular) 20px/1.5 var(--font-body)',color:'var(--text-muted)',maxWidth:'44ch'}}>
            A product on household mental load. I ran discovery, defined the first release and measured what changed.
          </p>
          <div style={{display:'flex',gap:8,marginTop:'var(--space-1)',flexWrap:'wrap'}}>
            {['Circular economy','Research','Product discovery'].map(t => <Tag key={t} accent={TAG_COLORS[t]}>{t}</Tag>)}
          </div>
        </div>
        <dl style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-2)',margin:0,borderTop:'var(--border-hairline)',paddingTop:'var(--space-2)'}}>
          {[['Role','Product lead'],['Duration','6 weeks'],['Team','4 people'],['Outcome','−23% drop-off']].map(([k,v])=>(
            <div key={k}>
              <dt style={{font:'var(--text-caption)',letterSpacing:'var(--tracking-caption)',textTransform:'uppercase',color:'var(--text-muted)'}}>{k}</dt>
              <dd style={{margin:'4px 0 0',font:'var(--text-label)'}}>{v}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div style={{marginTop:'var(--space-6)',border:'var(--border-hairline)',background:'var(--gray-100)',height:360,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:8}}>
        <Icon name="eye" size={24} color="var(--gray-500)" />
        <span style={{font:'var(--text-caption)',letterSpacing:'var(--tracking-caption)',textTransform:'uppercase',color:'var(--text-muted)'}}>Hero image — B&amp;W product shot, one accent max</span>
      </div>

      <Divider variant="marker" spacing="var(--space-6)" />

      <section className="ds-two-col-rev">
        <h2 style={{font:'var(--text-h2)',margin:0}}>The problem</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',maxWidth:'62ch'}}>
          <p>Households track chores in their heads. The work is invisible, unevenly split, and nobody agrees on how much of it there is.</p>
          <p style={{color:'var(--text-muted)'}}>I interviewed 18 households over three weeks. Everyone described the same gap between what they thought they did and what a shared record showed.</p>
        </div>
      </section>

      <Divider spacing="var(--space-6)" />

      <section className="ds-two-col-rev">
        <h2 style={{font:'var(--text-h2)',margin:0}}>Key findings</h2>
        <div className="ds-2up">
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            <Eyebrow accent="green">Self-reported vs logged hours</Eyebrow>
            <BarChart height={180} accent="green" highlightIndex={3} valueFormat={(v)=>v+'%'}
              data={[{label:'Cooking',value:38},{label:'Laundry',value:44},{label:'Admin',value:51},{label:'Planning',value:62}]} />
            <p style={{font:'var(--text-caption)',color:'var(--text-muted)'}}>62% under-report time spent on invisible chores.</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            <Eyebrow accent="green">Task completion after weekly check-ins</Eyebrow>
            <LineChart height={180} accent="green" labels={['W0','W1','W2','W3','W4']}
              series={[{name:'Control',values:[20,22,21,24,25]},{name:'Weekly check-in',values:[20,41,48,56,61],highlight:true}]} />
            <p style={{font:'var(--text-caption)',color:'var(--text-muted)'}}>Check-ins doubled completion in week one.</p>
          </div>
        </div>
      </section>

      <Divider spacing="var(--space-6)" />

      <PullQuote accent="green" attribution="Participant 12 — discovery interview">
        I did not know I was keeping a list until someone asked me to write it down.
      </PullQuote>

      <Divider spacing="var(--space-6)" />

      <section className="ds-two-col-rev">
        <h2 style={{font:'var(--text-h2)',margin:0}}>What changed</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
          {[['−23%','Onboarding drop-off, six weeks after release.'],['2×','Weekly task completion in the check-in cohort.'],['18','Households interviewed before a line of code.']].map(([n,d])=>(
            <div key={n} style={{display:'flex',gap:'var(--space-3)',alignItems:'baseline',borderTop:'var(--border-subtle)',paddingTop:'var(--space-2)'}}>
              <span style={{font:'var(--weight-semibold) 40px/1 var(--font-display)',minWidth:120}}>{n}</span>
              <span style={{color:'var(--text-muted)'}}>{d}</span>
            </div>
          ))}
          <div><Button variant="secondary" icon="arrow-right" onClick={()=>go('home')}>Next project</Button></div>
        </div>
      </section>
    </Page>
  );
}

Object.assign(window, { CaseStudy });
