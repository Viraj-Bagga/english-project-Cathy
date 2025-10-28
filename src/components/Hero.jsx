import React from 'react'

export default function Hero({ onExplore }) {
  return (
    <header className="hero" aria-label="Story introduction">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="hero__content">
        <h1 className="hero__headline">A building that breathes.</h1>
        <p className="hero__subhead">Cold stone, hushed echoes, and the cost of keeping light.</p>
        <blockquote className="hero__quote">“The walls seemed to be holding in time, centuries suspended in mid-air.”</blockquote>
        <div className="hero__meta">4 paragraphs • ~2 min</div>
        <div className="hero__actions">
          <button className="btn hero__cta" onClick={onExplore} aria-label="Begin reading">Begin Reading</button>
        </div>
      </div>

      
    </header>
  )
}
