import raf from 'raf'
//
const ease = t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)

const options = {
  duration: 800,
  easing: 'easeInOut',
  offset: 0,
  context: typeof window !== 'undefined' && window,
}

const getTop = (element, offset) => {
  return element.getBoundingClientRect().top + window.pageYOffset - offset
}

const getPosition = (start, end, elapsed, duration, easeFn) => {
  if (elapsed > duration) return end
  return start + (end - start) * easeFn(elapsed / duration)
}

export default function scrollTo (element) {
  let { duration, offset, callback, context } = options
  const start = window.pageYOffset
  const end =
    typeof element === 'number' ? parseInt(element) : getTop(element, offset)
  const clock = Date.now()
  const step = () => {
    const elapsed = Date.now() - clock
    if (context !== window) {
      context.scrollTop = getPosition(start, end, elapsed, duration, ease)
    } else {
      window.scroll(0, getPosition(start, end, elapsed, duration, ease))
    }

    if (elapsed > duration) {
      if (typeof callback === 'function') {
        callback(element)
      }
    } else {
      raf(step)
    }
  }
  step()
}
