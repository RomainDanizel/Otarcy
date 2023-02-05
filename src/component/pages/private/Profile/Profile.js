import React, { Fragment, useContext,  } from 'react'
import star from '../../../../assets/star.svg'
//  import { UserContext } from '../../../service/userContext'

export default function Profile( ) {
    // utiliser les données utilisateur à l'aide du controller userContext 
    //  const { user} = useContext(UserContext)
    // exemple fake donnée
    let user = {
        name: 'john',
    }
    
  return (
    <Fragment>
        <div style={{display:'flex', justifyContent:'center', alignContent:'center', flexDirection:'column'}}>
            <img src={star} style={{ width:'50px'}}></img>
            <h1>{user.name}</h1>
        </div>

    </Fragment>
  )
}
