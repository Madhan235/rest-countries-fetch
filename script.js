var countries_url = 'https://restcountries.com/v3.1/all'
async function countries_data (){
    var fetch_url = await fetch(countries_url)
    var result = await fetch_url.json();
var c_names = [];
var c_flags = [];
var c_capitals = []
var c_regions = [];
var c_codes = [];
var c_latlng = [];
var c_lat = [];
var c_lng = [];
try{
    for(i = 0 ; i < result.length; i++){
        c_names.push(result[i].name.common)
        c_capitals.push(result[i].capital)
        c_flags.push(result[i].flags.png)
        c_codes.push(result[i].idd.root)
        c_latlng.push(result[i].latlng)
        c_regions.push(result[i].region)
         c_lat.push(result[i].latlng[0])
         c_lng.push(result[i].latlng[1])
    }
    
}
catch(err){
    console.log('error in pushing details')
}
 
    var div_1 = document.createElement('div')
div_1.innerHTML = `
<div class=container >
<div class=row >
<div class=col-lg-4 col-sm-12 >
<div class=card >
<div class= card-body>
<div class = card-title ><h5 class=cname> ${c_names[0]} </h5></div>
<div class= card-subtitle><img class=cimage src=${c_flags[0]} ></div>
<div class = card-text>
<p>CAPITAL: ${c_capitals[0]} </p>
<p> REGION: ${c_regions[0]} </p>
<p> LAT&LNG: ${c_latlng[0]} </p>
<p> CODES: ${c_codes[0]} </p>
<button id=btn-weather_data() class=btn-primary>click for weather</button>
</div>
</div>
</div>
</div>

<div class=col-lg-4 col-sm-12 >
<div class=card >
<div class= card-body>
<div class = card-title ><h5 class=cname> ${c_names[1]} </h5></div>
<div class= card-subtitle><img class=cimage src=${c_flags[1]} ></div>
<div class = card-text>
<p>CAPITAL: ${c_capitals[1]} </p>
<p> REGION: ${c_regions[1]} </p>
<p> LAT&LNG: ${c_latlng[1]} </p>
<p> CODES: ${c_codes[1]} </p>
<button id=btn-weather class=btn-primary>click for weather</button>
</div>
</div>
</div>
</div>

<div class=col-lg-4 col-sm-12 >
<div class=card >
<div class= card-body>
<div class = card-title ><h5 class=cname> ${c_names[2]} </h5></div>
<div class= card-subtitle><img class=cimage src=${c_flags[2]} ></div>
<div class = card-text>
<p>CAPITAL: ${c_capitals[2]} </p>
<p> REGION: ${c_regions[2]} </p>
<p> LAT&LNG: ${c_latlng[2]} </p>
<p> CODES: ${c_codes[2]} </p>
<button onclick=weather class=btn-primary>click for weather</button>
</div>
</div>
</div>
</div>

<div class=col-lg-4 col-sm-12 >
<div class=card >
<div class= card-body>
<div class = card-title ><h5 class=cname> ${c_names[3]} </h5></div>
<div class= card-subtitle><img class=cimage src=${c_flags[3]} ></div>
<div class = card-text>
<p>CAPITAL: ${c_capitals[3]} </p>
<p> REGION: ${c_regions[3]} </p>
<p> LAT&LNG: ${c_latlng[3]} </p>
<p> CODES: ${c_codes[3]} </p>
<button id=btn-weather class=btn-primary>click for weather</button>
</div>
</div>
</div>
</div>

</div>

</div>`


document.body.append(div_1)
 


 
     
    var data= `https://api.openweathermap.
    org/data/3.0/onecall?
    lat=${c_lat[0]}&lon=${c_lng[0]}
    &exclude={part}
    &appid={8f8ec224fbb6b909071b93048675a770}`

    console.log(data)

}  

countries_data()


    

    // }
  

// var div_1 = document.createElement('div')
// div_1.innerHTML = `   
// <div class=container >
// <div class=row >
//     <div class= col-auto> 
// <div class=box>
//     <image class=c-img src=${result[i].flags.png} >
//      <h5> COUNTRY NAME: ${result[i].name.common} </h5>
//      <h5> CAPITAL: ${result[i].capital} </h5>
//      <h5> REGION: ${result[i].region} </h5>
//      <h5> POPULATION: ${result[i].population} </h5>
//      <h5> CODE: ${result[i].idd.root} </h5>
//      <h5> LAT & LNG: ${result[i].latlng} </h5>
//     <button id=weather-btn class=btn-primary > WEATHER </button>
    
//      </div>
     

//      </div>
//     </div>
//    </div>  `
 


