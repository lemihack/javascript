//You are Programmer, I know You love Reading Comments but Mine will fuck you for sure,


//Don't test this, I wanna give chance to bounty hunter
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details')
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img')
const forcast = new Forcast();

const updateUI = data => {
    //getting particular value Note:Its a local variable, dont be confused 
    // const cityDetails = data.cityDetails;
    // const weatherDetails = data.weatherDetails;
    //Just to show some koolness, using Destructure proporties
    const {cityDetails,weatherDetails} = data;

    //update templates
    details.innerHTML = `<h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weatherDetails.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weatherDetails.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;

    //Update Icon
    const iconsrc = `img/icons/${weatherDetails.WeatherIcon}.svg`;
    icon.setAttribute('src',iconsrc);


    //Update Image
    let imagesrc = weatherDetails.IsDayTime ? 'img/day.svg' : 'img/night.svg'
    time.setAttribute('src', imagesrc)

    //remove d-none class 

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}
// const updateCity = async city => {
//     //cityDetails
//     const cityDetails = await getCity(city);
//     //weatherDetails
//     const weatherDetails = await getWeather(cityDetails.Key)

//     //return Promises
//     return{cityDetails,weatherDetails}
    
// }


cityForm.addEventListener('submit',e => {
    
    //prevent default actions on form
    e.preventDefault();

    //Get City 
    const city = e.target.city.value;
     e.target.reset();

     //Update date with new submission
     forcast.updateCity(city).then(data=> {
         //Update UI after getting data
         updateUI(data)
         //If you start judging my code, i will start judging your pp size.:) 
     }).catch(err => console.log(err));

     //Setting Local Storage
     localStorage.setItem('city',city)

    })
    //If there is data in local storage, fetch it and display 
    if(localStorage.getItem('city')){
        forcast.updateCity(localStorage.getItem('city')).then(data => updateUI(data)).catch(err=>console.log(err))
    }

    //My Comment is none of your business