import React from 'react'

export default function Search() {

    // naviguer avec un input dans l'api
    function FindingAutocomplete(x, array){
        if(x.length >= 1){
        let validname = []
    
        array.forEach(function(name){
            if(x.substr(0, x.length).toLowerCase() == name.substr(0, x.length)){
                    validname.push(name)  
            }
        } )
        return validname;
      }
      
    } 
    
    let array = ['carrot', 'potato', 'tomato' , 'cola'];
  return (
    <div className="search">
          <h1>Search</h1>
          <input className="searchinput" onChange={FindingAutocomplete}></input>
        </div>
  )
}
