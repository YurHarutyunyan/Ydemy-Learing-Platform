import React from 'react'
import { Outlet } from 'react-router-dom'
function Educator() {
  return (
    <div>
      <div>
      </div>
      <h1>Educator</h1>
        {<Outlet/>}
    </div>
  )
}

export default Educator