const txtSearch = document.getElementById("txtSearch");
const temperature = document.querySelector(".temperature");
const whetherCondition = document.querySelector(".whetherCondition");
const date = document.querySelector(".date");
const cityNCountry = document.querySelector(".cityNCountry");
const todayDynamicWhetherIcon = document.querySelector(".todayDynamicWhetherIcon");
const humidity=document.getElementById("humidity");
const wind=document.getElementById("wind");
const preasure=document.getElementById("preasure");






function findlocation() {

    fetch("http://api.weatherapi.com/v1/current.json?key=1c7256fa59684ffba3d183112240209 &q="+txtSearch.value)
        .then(res => res.json())
        .then(data => {

         let temp=`<h1>${data.current.temp_c}&deg;C</h1>`
         temperature.innerHTML=temp;

         let condi=`<h3>${data.current.condition.text}...</h3>`
         whetherCondition.innerHTML=condi;

         let dt=`<h4>${data.location.localtime}</h4>`
         date.innerHTML=dt;

         let cnc=`<h4>${data.location.country},${data.location.name}</h4>`
         cityNCountry.innerHTML=cnc;

         let dynicon=`<img src=${data.current.condition.icon} alt="">`
         todayDynamicWhetherIcon.innerHTML=dynicon;

         humidity.innerHTML=`${data.current.humidity}`+"%";

         wind.innerHTML=`${data.current.wind_mph}`+" mph";

         preasure.innerHTML=`${data.current.pressure_mb}`+" mb";

            
        }

        )

        //forcast

        fetch(`http://api.weatherapi.com/v1/forecast.json?key=1c7256fa59684ffba3d183112240209 &q=${txtSearch.value}&days=3&aqi=no&alerts=yes`)
        .then(res => res.json())
        .then(data => {

         
         

            
        }

        )




}

