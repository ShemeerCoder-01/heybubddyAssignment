import React from 'react'
import FooterComponent from '../Shared/Footer'

function Layout({children}) {
  return (
    <div>
        {children}
        <FooterComponent/>
    </div>
  )
}

export default Layout