const cityName=document.getElementById('cityName');
const submitbtn=document.getElementById('submitbtn');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');
const day=document.getElementById('day');
const date=new Date();

day.innerText=date.toLocaleDateString();
const getinfo =async(event)=>{
   event.preventDefault();

   let  cityval=cityName.value
console.log("value is"+cityval)
   
   if (cityval==="") {
      city_name.innerText='plz enter city name '
   } else {

      try {
         
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=97bd2afcd65517d22222e78d9511a2e4`
     
      const response= await fetch(url);
      const data=await response.json();
      const arrdata=[data];
      console.log(data);
      city_name.innerText=`${arrdata[0].name} ${arrdata[0].sys.country} ` ;
      temp.innerText=arrdata[0].main.temp;
      temp_status.innerText=arrdata[0].weather[0].main;

     
      
         
      } catch (error) {
         city_name.innerText='plz enter city name'
         
         
      }

      
   }
}
submitbtn.addEventListener("click",getinfo);