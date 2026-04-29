/* global React */
const { createContext, useContext } = React;

const SlideCtx = createContext({ layout: 'A' });

function Slide({ layout = 'A', children, label }) {
  const bg = layout === 'A' ? '#0E2A47' : '#B87333';
  const wave = layout === 'A' ? '../../assets/wave-copper-on-blue.png' : '../../assets/wave-blue-on-copper.png';
  return (
    <SlideCtx.Provider value={{ layout }}>
      <div className="pdp-slide" data-screen-label={label} style={{
        width: 1080, height: 1350, position: 'relative', background: bg,
        overflow: 'hidden', fontFamily: 'var(--font-body)', flex: '0 0 auto'
      }}>
        {children}
        <img src={wave} alt="" style={{
          position:'absolute', left:0, right:0, bottom:0, width:'100%', display:'block', pointerEvents:'none'
        }}/>
        <img src="../../assets/boussole.png" alt="" style={{
          position:'absolute', left:'50%', bottom:96, transform:'translateX(-50%)',
          width:120, filter:'brightness(0) invert(1)', opacity:.95
        }}/>
        <div style={{
          position:'absolute', left:0, right:0, bottom:40, textAlign:'center',
          color:'#fff', fontSize:24, letterSpacing:'0.02em'
        }}>@pierrediquelouphotographie</div>
      </div>
    </SlideCtx.Provider>
  );
}

function Title({ children, size = 96, align = 'center', style }) {
  const { layout } = useContext(SlideCtx);
  const color = layout === 'A' ? 'var(--pdp-or-doux)' : 'var(--pdp-bleu-nuit)';
  return (
    <h1 style={{
      fontFamily: 'var(--font-serif)', fontWeight: 600,
      fontSize: size, lineHeight: 1.05, color, textAlign: align, margin: 0, ...style
    }}>{children}</h1>
  );
}

function Pill({ children, size = 36 }) {
  return (
    <span style={{
      display:'inline-block', padding:'10px 32px 12px', borderRadius:999,
      background:'#fff', color:'var(--pdp-bleu-nuit)',
      fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:size
    }}>{children}</span>
  );
}

function Subtitle({ children, size = 38 }) {
  return (
    <div style={{
      fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight:400,
      fontSize:size, color:'#fff', opacity:.92, textAlign:'center'
    }}>{children}</div>
  );
}

function Body({ children, size = 30, color }) {
  const { layout } = useContext(SlideCtx);
  const c = color || (layout === 'A' ? '#fff' : '#fff');
  return (
    <div style={{
      color: c, fontSize: size, lineHeight: 1.55,
      textAlign: 'justify', hyphens: 'auto', fontFamily: 'var(--font-body)'
    }}>{children}</div>
  );
}

function Question({ children }) {
  return (
    <div style={{
      color:'#fff', fontFamily:'var(--font-body)', fontSize:54,
      lineHeight:1.25, fontWeight:400, textAlign:'center'
    }}>{children}</div>
  );
}

function SocialIcons({ width = 540 }) {
  return <img src="../../assets/social-icons.png" alt="" style={{ width, height:'auto', display:'block' }}/>;
}

function Curve({ corner = 'tl', width = 220, opacity = 0.85 }) {
  const pos = {
    tl: { left: -40, top: 80, transform: 'none' },
    tr: { right: -40, top: 80, transform: 'scaleX(-1)' },
    bl: { left: -40, bottom: 280, transform: 'scaleY(-1)' },
    br: { right: -40, bottom: 280, transform: 'scale(-1,-1)' },
  }[corner];
  return <img src="../../assets/courbe.png" alt="" style={{ position:'absolute', width, opacity, ...pos }}/>;
}

function CTAButton({ children, onClick }) {
  return (
    <button onClick={onClick} style={{
      background:'var(--pdp-cuivre)', color:'#fff', border:0, padding:'22px 48px',
      fontFamily:'var(--font-body)', fontWeight:500, fontSize:30,
      letterSpacing:'0.02em', cursor:'pointer', borderRadius:0
    }}>{children}</button>
  );
}

Object.assign(window, { Slide, Title, Pill, Subtitle, Body, Question, SocialIcons, Curve, CTAButton });
