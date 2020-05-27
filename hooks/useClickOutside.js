import React from 'react'

export default function useClickOutside(elRef, callback) {
  // Keep track of the latest version of the callback
  const latestCallbackRef = React.useRef()
  latestCallbackRef.current = callback

  // When the element ref changes, run our effect
  React.useEffect(() => {
    // Handle the document click event
    const handleClickOutside = e => {
      // If we aren't tracking an element, stop
      if (!elRef.current) {
        return
      }

      // If the element doesn't contain our click target, stop
      if (elRef.current.contains(e.target)) {
        return
      }

      // If there is a callback, call it with the click event!
      if (latestCallbackRef.current) {
        latestCallbackRef.current(e)
      }
    }

    // Add a listener to the document
    document.addEventListener('click', handleClickOutside, true)

    // Return a cleanup function
    return () => {
      // Remove the listener from the document
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [elRef])
}
