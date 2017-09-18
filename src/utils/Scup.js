export default (old, _new, props = []) => {
  for (let i = 0; i < props.length; i++) {
    if (old[props[i]] !== _new[props[i]]) {
      return true
    }
  }
  return false
}
