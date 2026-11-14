import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Menu, X, Instagram, MapPin, Clock, Coffee, Leaf, Heart } from 'lucide-react';

const drinks = [
  {name:'Honey Oat Latte',tag:'SIGNATURE',desc:'Espresso, oat milk, local honey',price:'₵48',img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85'},
  {name:'Iced Matcha Cloud',tag:'FRESH & BRIGHT',desc:'Ceremonial matcha, vanilla, milk',price:'₵52',img:'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85'},
  {name:'Classic Flat White',tag:'THE EVERYDAY',desc:'Double espresso, silky steamed milk',price:'₵42',img:'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=85'}
];

export default function App(){
  const [nav,setNav]=useState(false),[saved,setSaved]=useState([]);
  const toggle=(name)=>setSaved(s=>s.includes(name)?s.filter(x=>x!==name):[...s,name]);
  const close=()=>setNav(false);
  return <div className="shell">
    <div className="announcement">A LITTLE PAUSE. A LOT OF GOOD COFFEE. <b>✳</b> OPEN DAILY IN ACCRA</div>
    <header className="header">
      <a className="brand" href="#home" onClick={close}><span className="brand-mark">b<span>&</span>b</span><span className="brand-name">BREW <i>&</i> BLOOM</span></a>
      <button className="menu-toggle" onClick={()=>setNav(!nav)} aria-label="Toggle navigation">{nav?<X/>:<Menu/>}</button>
      <nav className={nav?'nav nav-open':'nav'}><a href="#menu" onClick={close}>THE MENU</a><a href="#story" onClick={close}>OUR LITTLE STORY</a><a href="#visit" onClick={close}>FIND US</a><a className="nav-cta" href="#visit" onClick={close}>COME ON IN <ArrowUpRight size={15}/></a></nav>
    </header>
    <main>
      <section className="hero" id="home">
        <div className="hero-copy"><p className="eyebrow"><span>✳</span> YOUR NEIGHBOURHOOD COFFEE SPOT</p>
          <h1>Good days<br/>start with <em>good</em><br/><span className="outlined">coffee.</span></h1>
          <p className="intro">A little coffee, a little sunshine, and a place to stay a while. Your new favourite corner is waiting.</p>
          <div className="actions"><a className="button" href="#menu">EXPLORE THE MENU <ArrowUpRight size={17}/></a><a className="text-link" href="#story">GET TO KNOW US <ArrowDown size={15}/></a></div>
          <div className="hero-note"><i/> MADE SLOWLY. SERVED WITH LOVE.</div>
        </div>
        <div className="hero-visual"><div className="hero-photo-wrap"><img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=90" alt="Freshly brewed coffee on a cafe table"/><div className="sticker">SIP<br/>SLOW<br/><span>☻</span></div></div><div className="photo-caption"><span>01 / 03</span><span>YOUR DAILY DOSE OF HAPPY</span><b>✳</b></div><div className="vertical">COFFEE • COMMUNITY • LITTLE JOYS</div></div>
      </section>
      <div className="ticker"><div className="ticker-track">{Array.from({length:4},(_,i)=><span key={i}>FRESHLY BREWED <b>✳</b> GOOD COMPANY <b>✳</b> TAKE YOUR TIME <b>✳</b> </span>)}</div></div>
      <section className="menu-section section" id="menu"><div className="section-heading"><div><p className="eyebrow">THE GOOD STUFF</p><h2>A menu made<br/><em>for the moment.</em></h2></div><p className="side-note">From first sip to last little crumb, we make the everyday feel a bit more special.</p></div>
        <div className="menu-grid">{drinks.map((d,i)=><article className="menu-card" key={d.name} style={{'--delay':`${i*100}ms`}}><div className="menu-image"><img src={d.img} alt={d.name}/><span className="number">0{i+1}</span><button className={saved.includes(d.name)?'heart saved':'heart'} onClick={()=>toggle(d.name)} aria-label={`Save ${d.name}`}><Heart size={18} fill={saved.includes(d.name)?'currentColor':'none'}/></button></div><div className="menu-meta"><span>{d.tag}</span><b>{d.price}</b></div><h3>{d.name}</h3><p>{d.desc}</p></article>)}</div><p className="menu-foot">A FEW FAVOURITES FROM OUR COUNTER. MORE GOODNESS IN STORE.</p>
      </section>
      <section className="story" id="story"><div className="story-image"><img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85" alt="Sunlit neighbourhood coffee shop interior"/><div className="image-label">A PLACE TO<br/><em>just be.</em></div></div><div className="story-copy"><p className="eyebrow"><span>✳</span> NOT JUST A COFFEE RUN</p><h2>Come for the<br/>coffee. <em>Stay for</em><br/><em>the feeling.</em></h2><p>We believe the best things happen when you slow down. A familiar face, a new idea scribbled on a napkin, that first sip on a bright morning.</p><p>Brew & Bloom is a little space for all of it. Thoughtful coffee, warm people, and room for whatever your day brings.</p><a className="text-link dark-link" href="#visit">A LITTLE MORE ABOUT US <ArrowUpRight size={16}/></a><div className="doodle">✳</div></div></section>
      <section className="values"><div><Coffee/><span>GOOD COFFEE, ALWAYS</span></div><div><Leaf/><span>THOUGHTFUL INGREDIENTS</span></div><div><Heart/><span>ROOM FOR EVERYONE</span></div></section>
      <section className="visit section" id="visit"><div className="visit-top"><div><p className="eyebrow">YOUR TABLE IS WAITING</p><h2>See you<br/><em>soon?</em></h2></div><a className="button" href="https://www.google.com/maps/search/?api=1&query=Osu+Accra+Ghana" target="_blank" rel="noreferrer">GET DIRECTIONS <ArrowUpRight size={17}/></a></div><div className="visit-details"><div><MapPin/><section><b>FIND OUR CORNER</b><p>Osu, Accra, Ghana</p></section></div><div><Clock/><section><b>WHEN WE'RE HERE</b><p>Monday – Saturday · 8am – 6pm</p></section></div><div><Instagram/><section><b>SAY HELLO</b><p>@brewandbloom.cafe</p></section></div></div></section>
    </main>
    <footer className="footer"><a className="footer-logo" href="#home">b<span>&</span>b</a><p>GOOD COFFEE. GOOD COMPANY. GOOD LITTLE MOMENTS.</p><a className="back-top" href="#home">BACK TO TOP ↑</a><small>© 2026 BREW & BLOOM. MADE WITH A LITTLE EXTRA LOVE.</small></footer>
  </div>;
}