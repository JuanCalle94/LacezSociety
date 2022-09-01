import React from 'react'

function Layout({children}) {
  
  return (
    <React.StrictMode>
        {children}
    </React.StrictMode>
  )
}

export default Layout