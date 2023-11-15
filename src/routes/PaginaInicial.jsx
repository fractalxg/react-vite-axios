import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faWind, faDroplet, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import "./PaginaInicial.css"

const api_key = import.meta.env.VITE_REACT_APP_API_KEY
const local_host = import.meta.env.VITE_REACT_APP_SERVER_URL
const url_forecast = "https://api.openweathermap.org/data/2.5/forecast?q="
let local = "São Paulo"

const date_time = document.getElementsByName("data_main_date")

const dayToWeek = (data) => {
    const objData = new Date(data)
    let day = objData.getDay()
    switch (day) {
        case 0:
            day = "Domingo"
            break;
        case 1:
            day = "Segunda-Feira"
            break;
        case 2:
            day = "Terça-Feira"
            break;
        case 3:
            day = "Quarta-Feira"
            break;
        case 4:
            day = "Quinta-Feira"
            break;
        case 5:
            day = "Sexta-Feira"
            break;
        case 6:
            day = "Sábado"
            break;
    }

    return day
}

//criar a constante com os dados cabeçalho
const headers = {
    'headers': {
        //indicar que será enviado os dados em formato de objeto
        'Content-Type': 'application/json'
    }
}

const PaginaInicial = () => {
    // constantes de latitude e longitude
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    //constantes para setar arquivo que usaremos para extrair as informações de clima e tempo
    const [weatherAPI, setWeatherAPI] = useState([])
    //constantes ref para extrair informações dos nossos elementos
    const main_date_ref = useRef(null)
    const city_name_ref = useRef(null)
    const main_icon_ref = useRef(null)
    const main_temp_ref = useRef(null)
    const humidity_ref = useRef(null)
    const wind_speed_ref = useRef(null)

    const five_icon_0_ref = useRef(null)
    const five_week_day_0_ref = useRef(null)
    const five_max_temp_0_ref = useRef(null)
    const five_min_temp_0_ref = useRef(null)

    const five_icon_1_ref = useRef(null)
    const five_week_day_1_ref = useRef(null)
    const five_max_temp_1_ref = useRef(null)
    const five_min_temp_1_ref = useRef(null)

    const five_icon_2_ref = useRef(null)
    const five_week_day_2_ref = useRef(null)
    const five_max_temp_2_ref = useRef(null)
    const five_min_temp_2_ref = useRef(null)

    const five_icon_3_ref = useRef(null)
    const five_week_day_3_ref = useRef(null)
    const five_max_temp_3_ref = useRef(null)
    const five_min_temp_3_ref = useRef(null)

    const five_icon_4_ref = useRef(null)
    const five_week_day_4_ref = useRef(null)
    const five_max_temp_4_ref = useRef(null)
    const five_min_temp_4_ref = useRef(null)

    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)

    //função para detectar se o usuário pressionar enter
    const handleKeyDown = event => {

        if (event.key === 'Enter') {
            getWeather()
        }
    }

    const getUserLocationWeather = async () => {
        try {
            const response = await axios.get(`${url_forecast}&lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric&lang=pt_br`)
            setWeatherAPI([response.data])
            console.log(response.data)

        } catch (error) {
            console.log(error)
        }


    }

    // função assincrona para obter informações de clima e tempo da nossa API/BD
    const getWeather = async () => {

        try {
            

            //requisição para a API
            const response = await axios.get(`${url_forecast}${city_name_ref.current.value}&appid=${api_key}&units=metric&lang=pt_br`)
            //const response = await axios.get(`${local_host}/climate`, { params })
            setWeatherAPI([response.data])
            console.log([response.data])

            //constantes para formatação de data
            const dayTime = date_time[0].value
            const weatherDay = dayTime.split(' ')
            const weatherDaySplitted = weatherDay[0].split('-')
            const weatherDayFormatted = `${weatherDaySplitted[2]}/${weatherDaySplitted[1]}/${weatherDaySplitted[0]}`
            
            //criando um "json" para fazer o post no BD
            const apiWeatherData = {
                'today': today.toLocaleDateString(),
                'weatherDay': weatherDayFormatted,
                'main_icon': main_icon_ref.current.value,
                'main_temp': main_temp_ref.current.value,
                'city_name': city_name_ref.current.value,
                'humidity': humidity_ref.current.value,
                'wind_speed': wind_speed_ref.current.value,

                'five_icon_0': five_icon_0_ref.current.value,
                'five_week_day_0': five_week_day_0_ref.current.value,
                'five_max_temp_0': five_max_temp_0_ref.current.value,
                'five_min_temp_0': five_min_temp_0_ref.current.value,

                'five_icon_1': five_icon_1_ref.current.value,
                'five_week_day_1': five_week_day_1_ref.current.value,
                'five_max_temp_1': five_max_temp_1_ref.current.value,
                'five_min_temp_1': five_min_temp_1_ref.current.value,

                'five_icon_2': five_icon_2_ref.current.value,
                'five_week_day_2': five_week_day_2_ref.current.value,
                'five_max_temp_2': five_max_temp_2_ref.current.value,
                'five_min_temp_2': five_min_temp_2_ref.current.value,

                'five_icon_3': five_icon_3_ref.current.value,
                'five_week_day_3': five_week_day_3_ref.current.value,
                'five_max_temp_3': five_max_temp_3_ref.current.value,
                'five_min_temp_3': five_min_temp_3_ref.current.value,

                'five_icon_4': five_icon_4_ref.current.value,
                'five_week_day_4': five_week_day_4_ref.current.value,
                'five_max_temp_4': five_max_temp_4_ref.current.value,
                'five_min_temp_4': five_min_temp_4_ref.current.value,
            }
            console.log([apiWeatherData])


            //Fazer a requisição para o servidor, indicando o método da requisição
            //o endereço, enviar os dados do "json" e o cabeçalho
            const responsePost = await axios.post(`${local_host}/climate`, apiWeatherData, headers)
            console.log(responsePost)

        } catch (error) {
            // requisição para API usando latitude e longitude, se não encontrar usar let local *NAO FINALIZADO*
            // try {
            // const response = await axios.get(`${url_forecast}&lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric&lang=pt_br`)
            // setWeatherAPI([response.data])

            // } catch (error) {
            const response = await axios.get(`${url_forecast}${local}&appid=${api_key}&units=metric&lang=pt_br`)
            //const response = await axios.get(`${local_host}/climate`, { params })
            setWeatherAPI([response.data])
            //}


        }

    }


    useEffect(() => {
        const getLocation = async () => {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);

            })
        }
        //obtendo a latitude e longitude do usuario
        getLocation()
        // Chama a função para buscar dados ao montar o componente
        getWeather()
        
        console.log(latitude, longitude)
    }, [latitude, longitude])



    return (

        <div className="container">

            <div>
                {(

                    weatherAPI.map((api) => (

                        <div className="weather" key={api.city.id}>
                            <div className="location">
                                <FontAwesomeIcon icon={faMapLocationDot} className="element-icon-location" onClick={getUserLocationWeather} />
                                <div className="text-location">Usar Localização</div>
                            </div>

                            <div className="data-container">
                                {/* inputs invisiveis que usaremos para guardar dados de referencia */}
                                <input ref={main_date_ref} type="hidden" name="data_main_date" value={api.list[0].dt_txt} readOnly />
                                <input ref={main_icon_ref} type="hidden" value={api.list[0].weather[0].icon} readOnly />
                                <input ref={main_temp_ref} type="hidden" value={api.list[0].main.temp} readOnly />
                                <input ref={city_name_ref} type="hidden" value={api.city.name} readOnly />
                                <input ref={humidity_ref} type="hidden" value={api.list[0].main.humidity} readOnly />
                                <input ref={wind_speed_ref} type="hidden" value={api.list[0].wind.speed} readOnly />

                                <input ref={five_icon_0_ref} type="hidden" value={`https://openweathermap.org/img/wn/${api.list[8].weather[0].icon}@2x.png`} readOnly />
                                <input ref={five_week_day_0_ref} type="hidden" value={dayToWeek(api.list[8].dt_txt)} readOnly />
                                <input ref={five_max_temp_0_ref} type="hidden" value={api.list[8].main.temp_max} readOnly />
                                <input ref={five_min_temp_0_ref} type="hidden" value={api.list[8].main.temp_min} readOnly />

                                <input ref={five_icon_1_ref} type="hidden" value={`https://openweathermap.org/img/wn/${api.list[16].weather[0].icon}@2x.png`} readOnly />
                                <input ref={five_week_day_1_ref} type="hidden" value={dayToWeek(api.list[16].dt_txt)} readOnly />
                                <input ref={five_max_temp_1_ref} type="hidden" value={api.list[16].main.temp_max} readOnly />
                                <input ref={five_min_temp_1_ref} type="hidden" value={api.list[16].main.temp_min} readOnly />

                                <input ref={five_icon_2_ref} type="hidden" value={`https://openweathermap.org/img/wn/${api.list[24].weather[0].icon}@2x.png`} readOnly />
                                <input ref={five_week_day_2_ref} type="hidden" value={dayToWeek(api.list[24].dt_txt)} readOnly />
                                <input ref={five_max_temp_2_ref} type="hidden" value={api.list[24].main.temp_max} readOnly />
                                <input ref={five_min_temp_2_ref} type="hidden" value={api.list[24].main.temp_min} readOnly />

                                <input ref={five_icon_3_ref} type="hidden" value={`https://openweathermap.org/img/wn/${api.list[32].weather[0].icon}@2x.png`} readOnly />
                                <input ref={five_week_day_3_ref} type="hidden" value={dayToWeek(api.list[32].dt_txt)} readOnly />
                                <input ref={five_max_temp_3_ref} type="hidden" value={api.list[32].main.temp_max} readOnly />
                                <input ref={five_min_temp_3_ref} type="hidden" value={api.list[32].main.temp_min} readOnly />

                                <input ref={five_icon_4_ref} type="hidden" value={`https://openweathermap.org/img/wn/${api.list[39].weather[0].icon}@2x.png`} readOnly />
                                <input ref={five_week_day_4_ref} type="hidden" value={dayToWeek(api.list[39].dt_txt)} readOnly />
                                <input ref={five_max_temp_4_ref} type="hidden" value={api.list[39].main.temp_max} readOnly />
                                <input ref={five_min_temp_4_ref} type="hidden" value={api.list[39].main.temp_min} readOnly />

                            </div>
                            {/* pagina inicial */}
                            <div className="top-bar">
                                <input ref={city_name_ref} type="text" placeholder="Digite o nome de uma cidade" onKeyDown={handleKeyDown} />
                                <div className="search-icon" >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="element-icon-search" onClick={getWeather} />
                                </div>
                            </div>
                            <div className="weather-image">
                                <img src={`https://openweathermap.org/img/wn/${api.list[0].weather[0].icon}@2x.png`} alt="" />
                            </div>
                            <div className="weather-temp">{api.list[0].main.temp}°c</div>
                            <div className="weather-location">{api.city.name}</div>
                            <div className="data-container">
                                <div className="element">
                                    <FontAwesomeIcon icon={faDroplet} className="element-icon" />
                                    <div className="data">
                                        <div className="humidity-percent">{api.list[0].main.humidity}%</div>
                                        <div className="text">Humidade</div>
                                    </div>
                                </div>
                                <div className="element">
                                    <FontAwesomeIcon icon={faWind} className="element-icon" />
                                    <div className="data">
                                        <div className="wind-speed">{api.list[0].wind.speed} km/h</div>
                                        <div className="text">Velocidade do Vento</div>
                                    </div>
                                </div>
                            </div>

                            <div className="temp-container">

                                <div className="temp-0">
                                    <img src={`https://openweathermap.org/img/wn/${api.list[8].weather[0].icon}@2x.png`} alt="" />
                                    <p className="week-text">{dayToWeek(api.list[8].dt_txt)}</p>
                                    <p>Max. {api.list[8].main.temp_max}°c</p>
                                    <p>Min. {api.list[8].main.temp_min}°c</p>
                                </div>

                                <div className="temp-1">
                                    <img src={`https://openweathermap.org/img/wn/${api.list[16].weather[0].icon}@2x.png`} alt="" />
                                    <p className="week-text">{dayToWeek(api.list[16].dt_txt)}</p>
                                    <p>Max. {api.list[16].main.temp_max}°c</p>
                                    <p>Min. {api.list[16].main.temp_min}°c</p>
                                </div>

                                <div className="temp-2">
                                    <img src={`https://openweathermap.org/img/wn/${api.list[24].weather[0].icon}@2x.png`} alt="" />
                                    <p className="week-text">{dayToWeek(api.list[24].dt_txt)}</p>
                                    <p>Max. {api.list[24].main.temp_max}°c</p>
                                    <p>Min. {api.list[24].main.temp_min}°c</p>
                                </div>

                                <div className="temp-3">
                                    <img src={`https://openweathermap.org/img/wn/${api.list[32].weather[0].icon}@2x.png`} alt="" />
                                    <p className="week-text">{dayToWeek(api.list[32].dt_txt)}</p>
                                    <p>Max. {api.list[32].main.temp_max}°c</p>
                                    <p>Min. {api.list[32].main.temp_min}°c</p>
                                </div>

                                <div className="temp-4">
                                    <img src={`https://openweathermap.org/img/wn/${api.list[39].weather[0].icon}@2x.png`} alt="" />
                                    <p className="week-text">{dayToWeek(api.list[39].dt_txt)}</p>
                                    <p>Max. {api.list[39].main.temp_max}°c</p>
                                    <p>Min. {api.list[39].main.temp_min}°c</p>
                                </div>

                            </div>

                        </div>

                    ))

                )

                }
            </div>

        </div>

    )

}

export default PaginaInicial