export function initScrollEffects() {
  const revealClass = 'reveal'
  const revealedClass = 'revealed'
  const staggerClass = 'reveal-stagger'

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target
      if (entry.isIntersecting) {
        if (el.classList.contains(staggerClass)) {
          const children = Array.from(el.children)
          children.forEach((child, i) => {
            child.style.opacity = '0'
            child.style.transform = 'translateY(12px)'
            setTimeout(() => {
              child.style.transition = 'opacity 600ms ease, transform 600ms ease'
              child.style.opacity = '1'
              child.style.transform = 'none'
            }, 100 + i * 90)
          })
        }
        el.classList.add(revealedClass)
        el.classList.remove(revealClass)
        observer.unobserve(el)
      }
    })
  }, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' })

  const candidates = document.querySelectorAll(`.${revealClass}, .${staggerClass}`)
  candidates.forEach((el) => observer.observe(el))
}
