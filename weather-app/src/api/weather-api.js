
const getCurrentWeather = (infoType, searchParams) => {
    // return axios.get(
    //     `/current.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&aqi=yes`
    // );
    const url = new URL(`${process.env.REACT_APP_URL}/${infoType}`);
    url.search = new URLSearchParams({...searchParams,key:process.env.REACT_APP_API_KEY});

    //console.log(url);
    return fetch(url).then((res) => res.json()).then((data) => data);
}

const getDaysForecast = (infoType, searchParams) => {
    // return axios.get(
    //     `/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=5&aqi=no&alerts=no`
    // );
    const url = new URL(`${process.env.REACT_APP_URL}/${infoType}`);
    url.search = new URLSearchParams({...searchParams,key:process.env.REACT_APP_API_KEY});

    //console.log(url);
    return fetch(url).then((res) => res.json()).then((data) => data);
}

export {
    getCurrentWeather,getDaysForecast
}

const formatCurrentWeather = (data) => {
    const{
        current: {temp_c,temp_f,pressure_in,pressure_mb,uv,wind_kph,wind_mph,
            precip_in,precip_mm,vis_km,vis_miles},   
        location:{country,name,region,tz_id}    
     } = data;
     const{data:detail,icon} = data.current.condition;
     return{
        temp_c,
        temp_f,
        pressure_in,
        pressure_mb,
        uv,
        wind_kph,
        wind_mph,
        precip_in,
        precip_mm,
        vis_km,
        vis_miles,
        country,
        name,
        region,
        tz_id,
        icon
     }    
};

const formatForecastWeather = (data) => {
    const{daily} = data;

    // daily = daily.slice(0,2).map((d) => {
    //     return{
    //         title: d.date,
    //         maxtemp_c:d.day.maxtemp_c,
    //         maxtemp_f:d.day.maxtemp_f,
    //         mintemp_c:d.day.mintemp_c,
    //         mintemp_f:d.day.mintemp_f,
    //         icon:d.day.condition.icon,
    //         day:d.date,
    //         country:d.location.country,
    //         name:d.location.name,
    //     };
    //  }); 

    return  daily;
};

const getFormatCurrentWeather = async (searchParams) => {
  const formattedCurrentWeather = await getCurrentWeather
  ("current.json?", searchParams).then(formatCurrentWeather);

  const formattedForeCastWeather = await getDaysForecast
  ("forecast.json?", searchParams).then(formatForecastWeather);
    
  return {...formattedCurrentWeather, ...formattedForeCastWeather};
};


export default getFormatCurrentWeather;

