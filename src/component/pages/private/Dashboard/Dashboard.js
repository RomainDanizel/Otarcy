import React, { Fragment } from 'react'
import recette1 from '../../../../assets/ex.png'
import recette2 from '../../../../assets/ex2.png'
import recette3 from '../../../../assets/ex3.png'
import stariconG from '../../../../assets/star.svg'
import stariconB from '../../../../assets/starb.svg'
export default function Dashboard() {
  // exemple de data object (api non trouvé de recette legume)
  let recettexample = {
    1: {

      title : 'Salade de légume',
      img: recette1,
      star: 3,
    }, 
    2: {
      title:'Salade de tomate',
      img: recette2,
      star: 2
    },
    3: {
      title:"Tartare d'épinard",
      img: recette3,
      star: 0
    }
  }

  // array qui récuperera les obj de l'api recette
  let arrayObj = [recettexample[1], recettexample[2], recettexample[3]]

  // fonction qui ajoute des svg notation jusqu'a 5 svg
  function starAdded(note) { 
    for (let i = 0; i < 5; i++) {
      return note > i ? stariconG : stariconB
    }
    
  }
  return (
    <Fragment>
      <div>
        <h1>Dashboard</h1>
        <ul>
        {arrayObj.map((recet, index) => <li key={index} style={{display:'flex', flexDirection:'row', flexWrap:'nowrap', marginTop:'20px', padding:'10px'}}>
          <img src={recet.img} alt="img du produit" style={{width:'33%'}}></img>
          <div style={{display:'flex', flexDirection:'column', margin:'10px'}}>
            <p>{recet.title}</p>
             <p> Note : {recet.star}/5</p>
            {/* Image d'étoile <img src={starAdded(recet.star)} style={{width:'20px'}}/> */}
          </div>
          </li>)}
        </ul>
        <button style={{borderColor:'#33A847',backgroundColor:'transparent', color:'#33A847', width:'-webkit-fill-available', padding:'10px', fontSize:'13px', fontFamily:'Roboto' }}>Voir plus</button>
      </div>
      <div>
        <h1>Tutoriel Potager</h1>
        <iframe width="375" height="530" src="https://www.youtube.com/embed/Ka0iR2K6SFw" title="Comment démarrer un potager aujourd'hui" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div>
        <h1>Mon Potager</h1>
      </div>
    </Fragment>
  )
}
