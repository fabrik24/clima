let clima = {
    apikey:"17a40aecd6b139ce411e844e8b861b8d"

        fetchClima:function(ciudad) {

         fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + ciudad 
            + "&units=metric&appid="
            + this.apikey
            
         )
          .then((response)=>{
            return response.json();
          })
          .then((data)=>this.mostrarClima(data));

    },
    mostrarClima:function(data){
        const {temp} = data.main;
        document.querySelector("#temp").innerHTML = temp + "&#8451;"
        
    }
    

}

let ciudad = document.querySelector("#ciudad");
ciudad.addEventListener("change", function(){
    clima.fetchClima(ciudad.value)

})
clima.fetchClima("buenos aires");





