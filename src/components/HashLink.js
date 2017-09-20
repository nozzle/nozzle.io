import React from 'react'
import { Link, NavLink } from 'react-router-dom'

let hashFragment = ''
let observer = null
let asyncTimerId = null

function reset () {
  hashFragment = ''
  if (observer !== null) observer.disconnect()
  if (asyncTimerId !== null) {
    window.clearTimeout(asyncTimerId)
    asyncTimerId = null
  }
}

function getElAndScroll () {
  const element = document.getElementById(hashFragment)
  if (element !== null) {
    element.scrollIntoView()
    reset()
    return true
  }
  return false
}

function hashLinkScroll () {
  // Push onto callback queue so it runs after the DOM is updated
  window.setTimeout(() => {
    if (getElAndScroll() === false) {
      if (observer === null) {
        observer = new MutationObserver(getElAndScroll)
      }
      observer.observe(document, { attributes: true, childList: true, subtree: true })
      // if the element doesn't show up in 10 seconds, stop checking
      asyncTimerId = window.setTimeout(() => {
        reset()
      }, 10000)
    }
  }, 0)
}

export function HashLink (props) {
  function handleClick (e) {
    reset()
    if (props.onClick) props.onClick(e)
    if (typeof props.to === 'string') {
      hashFragment = props.to.split('#').slice(1).join('#')
    } else if (typeof props.to === 'object' && typeof props.to.hash === 'string') {
      hashFragment = props.to.hash.replace('#', '')
    }
    if (hashFragment !== '') hashLinkScroll()
  }
  return (
    <Link {...props} onClick={handleClick}>
      {props.children}
    </Link>
  )
}
export function HashNavLink (props) {
  function handleClick (e) {
    reset()
    if (props.onClick) props.onClick(e)
    if (typeof props.to === 'string') {
      hashFragment = props.to.split('#').slice(1).join('#')
    } else if (typeof props.to === 'object' && typeof props.to.hash === 'string') {
      hashFragment = props.to.hash.replace('#', '')
    }
    if (hashFragment !== '') hashLinkScroll()
  }
  return (
    <NavLink {...props} onClick={handleClick}>
      {props.children}
    </NavLink>
  )
}
