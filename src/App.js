  function FindingAutocomplete(x, array){
    if(x.length >= 1){
    let validname = []

    array.forEach(function(name){
        if(x.substr(0, x.length).toLowerCase() == name.substr(0, x.length)){
                validname.push(name)  
        }
    } )
    return validname;
    /*
    if(validname.length == 1){
        searchbar.innerHTML= ''
    }
    if(typeof validname[2] === 'undefined'){
        searchbar.innerHTML= '<div class="autocomplete search_width">' + '<p class="autocomplete_value">' +validname[1].charAt(0).toUpperCase() + validname[1].slice(1)+ '</p>' + '</div>'; 
    } 
    else if(typeof validname[3] === 'undefined') {
        searchbar.innerHTML= '<div class="autocomplete search_width">' + '<p class="autocomplete_value">' +validname[1].charAt(0).toUpperCase() + validname[1].slice(1)+ '</p>'+ '</div> <div class="autocomplete search_width">' + '<p class="autocomplete_value">' +validname[2].charAt(0).toUpperCase() + validname[2].slice(1)+ '</p>'+ '</div>';  
    }
    else {
        searchbar.innerHTML= '<div class="autocomplete search_width">' + '<p class="autocomplete_value">' +validname[1].charAt(0).toUpperCase() + validname[1].slice(1)+ '</p>'+ '</div> <div class="autocomplete search_width">' + '<p class="autocomplete_value">' +validname[2].charAt(0).toUpperCase() + validname[2].slice(1)+ '</p>'+ '</div> <div class="autocomplete search_width">' + '<p class="autocomplete_value">' +validname[3].charAt(0).toUpperCase() + validname[3].slice(1)+ '</p>'+ '</div>';  
    }
    */
  }
  
} 

let array = ['carrot', 'potato', 'tomato' , 'tata', 'worm', 'cola'];

console.log(FindingAutocomplete('t', array));
console.log('should have worked')

  export default function MyApp() {
    return (
      <nav className="navbar">

        <div className="links">
          <a href="/" className="navbar-brand">img</a>
          <a href="/" className="navbar-brand">img</a>
          <button> i am a button</button>
          <a href="/" className="navbar-brand">img</a>
          <a href="/" className="navbar-brand">img</a>

        </div>

        <div>
        </div>
       
      </nav>
    );
  }
  