import React, { Fragment} from 'react'
import  background  from '../../assets/Rectangle.png'
import  logo  from '../../assets/3.png'
import {Link} from "react-router-dom"

export default function LandingComponent() {

  return (
    <Fragment>
        <div style={{backgroundImage: `url(${background })`,backgroundRepeat: 'no-repeat',backgroundSize:'100%', height:'600px', width:'375px', margin:'none'}}>
          <div style={{display:'flex', justifyContent:'center', alignContent:'center', flexDirection:'column'}}>  
            <img src={logo} alt="logo"></img>
            <h1 style={{textAlign:'center'}}>Le potager virtuel</h1>
          </div>
        </div>
      
        <div style={{display:'flex', justifyContent:'space-around', marginTop:'10px' }}>
          <Link to={'/login'}>
            <button style={{padding:'10px', width:'150px', border:'none'}}>
            Se connecter
            </button>
          </Link>
          <Link to={'/sign'}>
            <button style={{backgroundColor:'#33A847', padding:'10px', width:'150px', border:'none', color:'white'}}>
              S'inscrire
            </button>
          </Link>
        </div>
    </Fragment>
  )
}
