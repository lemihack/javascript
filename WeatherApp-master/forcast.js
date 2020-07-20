class Forcast{
    constructor(){
        //API from https://www.developer.accuweather.com
        this.key = 'BHJZVeiEt2WBGH42HPot5SmGvHG2fwaA';
        this.weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city){
    //cityDetails
    const cityDetails = await this.getCity(city);
    //weatherDetails
    const weatherDetails = await this.getWeather(cityDetails.Key)

    //return Promises
    return{cityDetails,weatherDetails}
    }

    async getCity(city){
        const queryParam = `?apikey=${this.key}&q=${city}`;

        const response = await fetch(this.cityUrl + queryParam);
        const data = await response.json();
        return data[0];
    }

    async getWeather(id){
        const queryParam = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherUrl + queryParam);
        const data = await response.json();
        return data[0];
    }
}





// const getWeather = async id => {

//     const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
 

// }


// const getCity = async city => {


//     baseUrl = 
//     queryParam = `?apikey=${key}&q=${city}`;

//     const response = await fetch(baseUrl + queryParam);
//     const data = await response.json();
//     return data[0];
// }

// getCity('china')
// .then(data => {
//     return getWeather(data.Key)
// }).then( data =>{
//     console.log(data);
    
// })
// .catch(err => console.log(err))