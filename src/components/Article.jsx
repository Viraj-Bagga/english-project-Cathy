import React, { useEffect, useRef } from 'react'
import analytics from '../analytics/analytics.js'
import { smoothScrollTo } from '../utils/scroll.js'

export default function Article() {
  const p1Ref = useRef(null)
  const p2Ref = useRef(null)
  const p3Ref = useRef(null)
  const p4Ref = useRef(null)

  useEffect(() => {
    const seen = new Set()
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('data-id')
        if (entry.isIntersecting) {
          analytics.markSectionOpen(id)
          if (!seen.has(id)) {
            analytics.trackSectionOpen(id)
            seen.add(id)
          }
        } else {
          analytics.markSectionClose(id)
        }
      })
    }, { threshold: 0.6 })

    const els = [p1Ref.current, p2Ref.current, p3Ref.current, p4Ref.current].filter(Boolean)
    els.forEach(el => io.observe(el))
    return () => {
      els.forEach(el => io.unobserve(el))
      io.disconnect()
    }
  }, [])

  const goNext = (ref) => {
    if (ref?.current && ref.current.scrollIntoView) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (ref?.current) {
      // fallback
      smoothScrollTo(ref.current, { duration: 600 })
    }
  }

  return (
    <>
      <section ref={p1Ref} data-id="p1" className="article__section article__section--one" data-fade>
        <div className="article__content">
          <p>
            As I stepped into the Cathedral, my first impressions were not just visual, they were physical. The building felt cold, as though it had control over its own temperature. Every footstep, murmur, and rustle of paper rose up and disappeared into thin air close to the ceiling. The walls seemed to hold in time, centuries suspended mid-air. Though people move quickly through the Cathedral each and every day, the space itself has but no urgency to hurry along. It, in fact, causes you to slow down as though the pull on your body differs from anywhere else.
          </p>
          <div className="article__next"><button className="btn btn--arrow" aria-label="Next paragraph" onClick={() => goNext(p2Ref)}><span className="btn__chev">⌄</span></button></div>
        </div>
      </section>

      <section ref={p2Ref} data-id="p2" className="article__section article__section--two" data-fade>
        <div className="article__content">
          <p>
            There is beauty in the stillness, though there remains a price to pay. For hours on end, those lights burn, trying to compete with the dimly lit stained glass. A constant flow of air pushes through those vents, never seeming to get a break. The heat rises, escaping through the stairways that were designed for functionality rather than efficiency. As the Cathedral continues to endure, it does so at great expense. One can hear the Cathedral's steady breathing through the pipe, as a soft, mechanical exhale that lies under the hushed reverence.
          </p>
          <div className="article__next"><button className="btn btn--arrow" aria-label="Next paragraph" onClick={() => goNext(p3Ref)}><span className="btn__chev">⌄</span></button></div>
        </div>
      </section>

      <section ref={p3Ref} data-id="p3" className="article__section article__section--three" data-fade>
        <div className="article__content">
          <p>
            As I first began to learn about sustainability, I was under the assumption that sustainability was the ability to do more with less. The Cathedral, however, teaches me something much greater than doing less altogether. True care, the kind that Kimmerer writes about, requires reciprocity. Cathy has provided identity for generations of students for decades, so now it is time for her to receive more than just unconditional reliance from others. In this setting, what would this reciprocity look like? It may perhaps be an action as effortless as turning off a light that no one has noticed burning, closing a door leaking heat, or simply acknowledging that nothing is without cost, and therefore nothing is permanent.
          </p>
          <div className="article__next"><button className="btn btn--arrow" aria-label="Next paragraph" onClick={() => goNext(p4Ref)}><span className="btn__chev">⌄</span></button></div>
        </div>
      </section>

      <section ref={p4Ref} data-id="p4" className="article__section article__section--four" data-fade>
        <div className="article__content">
          <p>
            Standing underneath its vaulted ceiling, I begin to understand that the building is not just a monument, but a mirror. Its strength is reflective of both pride and waste, endurance and strain. The challenge is to keep it alive while responsibly using resources, rather than attempting to maintain it in its original form. Each time I leave the Cathedral and walk back out into daylight, I take with me a subtle reminder of its quiet message: Things exist only as long as individuals choose to provide for their care.
          </p>
        </div>
      </section>
    </>
  )
}
