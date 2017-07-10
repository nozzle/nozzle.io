import React from 'react'

export default props =>
  (<div>
    <code>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </code>
  </div>)
