import React from 'react'
export default function Navbar(props) {


  return (
       <>
        <nav className={`navbar border-bottom bg-${props.mode}`} >
          <div className={`form-check form-switch text-${props.mode==='light'?'black':'white'}`}>
        <h1>Future of remote work</h1>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'black':'white'}`}>
        
        <input className="form-check-input " type="checkbox" onClick={props.toggleMode} role="switch"  />
        <label className="form-check-label " htmlFor="flexSwitchCheckDefault" >Enabled {props.mode} Mode</label>
        </div>
        </nav>
        </>
  )
}
