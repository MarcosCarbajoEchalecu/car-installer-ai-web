import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 500, prefix: '+', suffix: '', label: 'Instalaciones realizadas' },
  { value: 6, prefix: '+', suffix: '', label: 'Años de experiencia' },
  { value: 100, prefix: '', suffix: '%', label: 'A domicilio en Madrid' },
]

const DURATION = 2000

function useCountUp(target, active) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return

    let frame
    let start = null

    const step = (timestamp) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / DURATION, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) {
        frame = requestAnimationFrame(step)
      }
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [active, target])

  return value
}

function StatItem({ stat, active }) {
  const count = useCountUp(stat.value, active)

  return (
    <div className="flex-1 flex flex-col items-center text-center py-8 md:py-2 px-6">
      <span className="font-heading font-black text-5xl md:text-6xl text-accent tabular-nums">
        {stat.prefix}
        {count}
        {stat.suffix}
      </span>
      <span className="mt-3 font-heading text-sm tracking-[0.15em] text-white">{stat.label}</span>
    </div>
  )
}

export default function Stats() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-surface border-t border-accent">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row divide-y divide-accent/20 md:divide-y-0 md:divide-x">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} active={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
