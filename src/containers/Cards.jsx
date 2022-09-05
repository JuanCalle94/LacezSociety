import React from 'react'

function Cards(props) {
  return (
    <React.StrictMode>
        {props.children}
    </React.StrictMode>
  )
}

export default Cards