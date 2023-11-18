import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faWind, faDroplet, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import "./PaginaInicial.css"
import { noAccent, formattedDate, dayToWeek } from '../components/Utils'

const api_key = import.meta.env.VITE_REACT_APP_API_KEY
const local_host = import.meta.env.VITE_REACT_APP_SERVER_URL
const url_forecast = "https://api.openweathermap.org/data/2.5/forecast?q="


//criar a constante com os dados cabeçalho
const headers = {
    'headers': {
        //indicar que será enviado os dados em formato de objeto
        'Content-Type': 'application/json'
    }
}

const PaginaInicial = () => {
    
    // constantes de latitude e longitude
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")

    // constante para usar uma referencia no input da cidade
    const city_name_ref = useRef("")

    // constantes que usaremos para os dados da nossa aplicação
    const [mainDate, setMainDate] = useState('')
    const [mainIcon, setMainIcon] = useState('')
    const [mainTemp, setMainTemp] = useState('')
    const [cityName, setCityName] = useState('')
    const [humidity, setHumidity] = useState('')
    const [windSpeed, setWindSpeed] = useState('')

    const [five_icon_0, setFive_icon_0] = useState('')
    const [five_week_day_0, setFive_week_day_0] = useState('')
    const [five_max_temp_0, setFive_max_temp_0] = useState('')
    const [five_min_temp_0, setFive_min_temp_0] = useState('')

    const [five_icon_1, setFive_icon_1] = useState('')
    const [five_week_day_1, setFive_week_day_1] = useState('')
    const [five_max_temp_1, setFive_max_temp_1] = useState('')
    const [five_min_temp_1, setFive_min_temp_1] = useState('')

    const [five_icon_2, setFive_icon_2] = useState('')
    const [five_week_day_2, setFive_week_day_2] = useState('')
    const [five_max_temp_2, setFive_max_temp_2] = useState('')
    const [five_min_temp_2, setFive_min_temp_2] = useState('')

    const [five_icon_3, setFive_icon_3] = useState('')
    const [five_week_day_3, setFive_week_day_3] = useState('')
    const [five_max_temp_3, setFive_max_temp_3] = useState('')
    const [five_min_temp_3, setFive_min_temp_3] = useState('')

    const [five_icon_4, setFive_icon_4] = useState('')
    const [five_week_day_4, setFive_week_day_4] = useState('')
    const [five_max_temp_4, setFive_max_temp_4] = useState('')
    const [five_min_temp_4, setFive_min_temp_4] = useState('')

    // constante para indicar o dia atual
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)

    //constantes para setar dados que usaremos para as informações de clima e tempo
    const [weatherAPI, setWeatherAPI] = useState([])

    // constante para criar um array dos dados de clima e tempo
    const [postData, setPostData] = useState({
        'today': '',
        'weatherDay': '',
        'main_icon': '',
        'main_temp': '',
        'city_name': '',
        'humidity': '',
        'wind_speed': '',

        'five_icon_0': '',
        'five_week_day_0': '',
        'five_max_temp_0': '',
        'five_min_temp_0': '',

        'five_icon_1': '',
        'five_week_day_1': '',
        'five_max_temp_1': '',
        'five_min_temp_1': '',

        'five_icon_2': '',
        'five_week_day_2': '',
        'five_max_temp_2': '',
        'five_min_temp_2': '',

        'five_icon_3': '',
        'five_week_day_3': '',
        'five_max_temp_3': '',
        'five_min_temp_3': '',

        'five_icon_4': '',
        'five_week_day_4': '',
        'five_max_temp_4': '',
        'five_min_temp_4': '',
    })

    //função para detectar se o usuário pressionar enter
    const handleKeyDown = event => {

        if (event.key === 'Enter') {
            getWeather()
        }
    }

    const getApi = async () => {
        //requisição para a API
        const response = await axios.get(`${url_forecast}${city_name_ref.current.value}&appid=${api_key}&units=metric&lang=pt_br`)
        setWeatherAPI([response.data])
        console.log([response.data])

        setMainDate(formattedDate(response.data.list[0].dt_txt))
        setMainIcon(response.data.list[0].weather[0].icon)
        setMainTemp(response.data.list[0].main.temp)
        setCityName(response.data.city.name)
        setHumidity(response.data.list[0].main.humidity)
        setWindSpeed(response.data.list[0].wind.speed)

        setFive_icon_0(`https://openweathermap.org/img/wn/${response.data.list[8].weather[0].icon}@2x.png`)
        setFive_week_day_0(dayToWeek(response.data.list[8].dt_txt))
        setFive_max_temp_0(response.data.list[8].main.temp_max)
        setFive_min_temp_0(response.data.list[8].main.temp_min)

        setFive_icon_1(`https://openweathermap.org/img/wn/${response.data.list[16].weather[0].icon}@2x.png`)
        setFive_week_day_1(dayToWeek(response.data.list[16].dt_txt))
        setFive_max_temp_1(response.data.list[16].main.temp_max)
        setFive_min_temp_1(response.data.list[16].main.temp_min)

        setFive_icon_2(`https://openweathermap.org/img/wn/${response.data.list[24].weather[0].icon}@2x.png`)
        setFive_week_day_2(dayToWeek(response.data.list[24].dt_txt))
        setFive_max_temp_2(response.data.list[24].main.temp_max)
        setFive_min_temp_2(response.data.list[24].main.temp_min)

        setFive_icon_3(`https://openweathermap.org/img/wn/${response.data.list[32].weather[0].icon}@2x.png`)
        setFive_week_day_3(dayToWeek(response.data.list[32].dt_txt))
        setFive_max_temp_3(response.data.list[32].main.temp_max)
        setFive_min_temp_3(response.data.list[32].main.temp_min)

        setFive_icon_4(`https://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png`)
        setFive_week_day_4(dayToWeek(response.data.list[39].dt_txt))
        setFive_max_temp_4(response.data.list[39].main.temp_max)
        setFive_min_temp_4(response.data.list[39].main.temp_min)
    }

    const getBD = async (cityName, today) => {
        //requisição para o BD
        const responseBD = await axios.get(`${local_host}/climate`)
        console.log(responseBD.data.data)

        const foundData = responseBD.data.data.find(
            data => data.city_name === cityName && data.weatherDay === today
        )

        if (foundData) {
            console.log("Dados encontrados no BD")
            setMainDate(foundData.weatherDay)
            setMainIcon(foundData.main_icon)
            setMainTemp(foundData.main_temp)
            setCityName(foundData.city_name)
            setHumidity(foundData.humidity)
            setWindSpeed(foundData.wind_speed)

            setFive_icon_0(foundData.five_icon_0)
            setFive_week_day_0(foundData.five_week_day_0)
            setFive_max_temp_0(foundData.five_max_temp_0)
            setFive_min_temp_0(foundData.five_min_temp_0)

            setFive_icon_1(foundData.five_icon_1)
            setFive_week_day_1(foundData.five_week_day_1)
            setFive_max_temp_1(foundData.five_max_temp_1)
            setFive_min_temp_1(foundData.five_min_temp_1)

            setFive_icon_2(foundData.five_icon_2)
            setFive_week_day_2(foundData.five_week_day_2)
            setFive_max_temp_2(foundData.five_max_temp_2)
            setFive_min_temp_2(foundData.five_min_temp_2)

            setFive_icon_3(foundData.five_icon_3)
            setFive_week_day_3(foundData.five_week_day_3)
            setFive_max_temp_3(foundData.five_max_temp_3)
            setFive_min_temp_3(foundData.five_min_temp_3)

            setFive_icon_4(foundData.five_icon_4)
            setFive_week_day_4(foundData.five_week_day_4)
            setFive_max_temp_4(foundData.five_max_temp_4)
            setFive_min_temp_4(foundData.five_min_temp_4)

        } else {
            console.log("Dados não encontrados no BD, procurando na API")
            getApi()
        }

    }

    const getStaticCityApi = async (staticCity) => {
        try {
            if (staticCity !== "") {
                const response = await axios.get(`${url_forecast}${staticCity}&appid=${api_key}&units=metric&lang=pt_br`)
                console.log(response.data)

                setMainDate(formattedDate(response.data.list[0].dt_txt))
                setMainIcon(response.data.list[0].weather[0].icon)
                setMainTemp(response.data.list[0].main.temp)
                setCityName(response.data.city.name)
                setHumidity(response.data.list[0].main.humidity)
                setWindSpeed(response.data.list[0].wind.speed)

                setFive_icon_0(`https://openweathermap.org/img/wn/${response.data.list[8].weather[0].icon}@2x.png`)
                setFive_week_day_0(dayToWeek(response.data.list[8].dt_txt))
                setFive_max_temp_0(response.data.list[8].main.temp_max)
                setFive_min_temp_0(response.data.list[8].main.temp_min)

                setFive_icon_1(`https://openweathermap.org/img/wn/${response.data.list[16].weather[0].icon}@2x.png`)
                setFive_week_day_1(dayToWeek(response.data.list[16].dt_txt))
                setFive_max_temp_1(response.data.list[16].main.temp_max)
                setFive_min_temp_1(response.data.list[16].main.temp_min)

                setFive_icon_2(`https://openweathermap.org/img/wn/${response.data.list[24].weather[0].icon}@2x.png`)
                setFive_week_day_2(dayToWeek(response.data.list[24].dt_txt))
                setFive_max_temp_2(response.data.list[24].main.temp_max)
                setFive_min_temp_2(response.data.list[24].main.temp_min)

                setFive_icon_3(`https://openweathermap.org/img/wn/${response.data.list[32].weather[0].icon}@2x.png`)
                setFive_week_day_3(dayToWeek(response.data.list[32].dt_txt))
                setFive_max_temp_3(response.data.list[32].main.temp_max)
                setFive_min_temp_3(response.data.list[32].main.temp_min)

                setFive_icon_4(`https://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png`)
                setFive_week_day_4(dayToWeek(response.data.list[39].dt_txt))
                setFive_max_temp_4(response.data.list[39].main.temp_max)
                setFive_min_temp_4(response.data.list[39].main.temp_min)
            }

        } catch (error) {
            console.log(error)
        }

    }

    const getUserLocationWeather = async () => {
        try {
            city_name_ref.current.value = ""
            if (city_name_ref.current.value.length === 0 && latitude !== "" && longitude !== "") {
                console.log("Latitude e longitude encontrados, carregando API")
                const response = await axios.get(`${url_forecast}&lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric&lang=pt_br`)
                setWeatherAPI([response.data])
                console.log(response.data)

                setMainDate(formattedDate(response.data.list[0].dt_txt))
                setMainIcon(response.data.list[0].weather[0].icon)
                setMainTemp(response.data.list[0].main.temp)
                setCityName(response.data.city.name)
                setHumidity(response.data.list[0].main.humidity)
                setWindSpeed(response.data.list[0].wind.speed)

                setFive_icon_0(`https://openweathermap.org/img/wn/${response.data.list[8].weather[0].icon}@2x.png`)
                setFive_week_day_0(dayToWeek(response.data.list[8].dt_txt))
                setFive_max_temp_0(response.data.list[8].main.temp_max)
                setFive_min_temp_0(response.data.list[8].main.temp_min)

                setFive_icon_1(`https://openweathermap.org/img/wn/${response.data.list[16].weather[0].icon}@2x.png`)
                setFive_week_day_1(dayToWeek(response.data.list[16].dt_txt))
                setFive_max_temp_1(response.data.list[16].main.temp_max)
                setFive_min_temp_1(response.data.list[16].main.temp_min)

                setFive_icon_2(`https://openweathermap.org/img/wn/${response.data.list[24].weather[0].icon}@2x.png`)
                setFive_week_day_2(dayToWeek(response.data.list[24].dt_txt))
                setFive_max_temp_2(response.data.list[24].main.temp_max)
                setFive_min_temp_2(response.data.list[24].main.temp_min)

                setFive_icon_3(`https://openweathermap.org/img/wn/${response.data.list[32].weather[0].icon}@2x.png`)
                setFive_week_day_3(dayToWeek(response.data.list[32].dt_txt))
                setFive_max_temp_3(response.data.list[32].main.temp_max)
                setFive_min_temp_3(response.data.list[32].main.temp_min)

                setFive_icon_4(`https://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png`)
                setFive_week_day_4(dayToWeek(response.data.list[39].dt_txt))
                setFive_max_temp_4(response.data.list[39].main.temp_max)
                setFive_min_temp_4(response.data.list[39].main.temp_min)
            }
            else {
                console.log("Sem latitude e longitude, ative a localização no navegador...")
                
            }

        } catch (error) {
            console.log(error)
        }

    }
    // constante assincrona para obter informações de clima e tempo da nossa API/BD
    const getWeather = async () => {

        try {
            if (city_name_ref.current.value.length > 0) {
                getBD(noAccent(city_name_ref.current.value.toUpperCase()), today.toLocaleDateString())
            } else {

            getUserLocationWeather()
            }

        } catch (error) {

            console.log("Erro ao buscar dados de clima e tempo:", error)

        }

    }

    useEffect(() => {
        
        const getLocation = async () => {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            })
        }


        // Chama a função para buscar dados ao montar o componente
        getWeather()

        //obtendo a latitude e longitude do usuario
        getLocation()

        console.log(latitude, longitude)
    }, [latitude, longitude])


    useEffect(() => {

        setPostData(prevData => ({
            ...prevData,
            today: today.toLocaleDateString(),
            weatherDay: mainDate,
            main_icon: mainIcon,
            main_temp: mainTemp,
            city_name: noAccent(cityName),
            humidity: humidity,
            wind_speed: windSpeed,

            five_icon_0: five_icon_0,
            five_week_day_0: five_week_day_0,
            five_max_temp_0: five_max_temp_0,
            five_min_temp_0: five_min_temp_0,

            five_icon_1: five_icon_1,
            five_week_day_1: five_week_day_1,
            five_max_temp_1: five_max_temp_1,
            five_min_temp_1: five_min_temp_1,

            five_icon_2: five_icon_2,
            five_week_day_2: five_week_day_2,
            five_max_temp_2: five_max_temp_2,
            five_min_temp_2: five_min_temp_2,

            five_icon_3: five_icon_3,
            five_week_day_3: five_week_day_3,
            five_max_temp_3: five_max_temp_3,
            five_min_temp_3: five_min_temp_3,

            five_icon_4: five_icon_4,
            five_week_day_4: five_week_day_4,
            five_max_temp_4: five_max_temp_4,
            five_min_temp_4: five_min_temp_4,

        }))
    }, [mainDate, mainIcon, mainTemp, cityName, humidity, windSpeed,
        five_icon_0, five_week_day_0, five_max_temp_0, five_min_temp_0,
        five_icon_1, five_week_day_1, five_max_temp_1, five_min_temp_1,
        five_icon_2, five_week_day_2, five_max_temp_2, five_min_temp_2,
        five_icon_3, five_week_day_3, five_max_temp_3, five_min_temp_3,
        five_icon_4, five_week_day_4, five_max_temp_4, five_min_temp_4,])

    useEffect(() => {
        console.log(postData)
    }, [postData])

    useEffect(() => {
        if (cityName.length > 0) {
            const responsePost = axios.post(`${local_host}/climate`, postData, headers)
            console.log(responsePost)
        }

    }, [postData])

    return (

        <div className="container">

            <div className="weather">
                <div className="location">
                    <FontAwesomeIcon icon={faMapLocationDot} className="element-icon-location" onClick={getUserLocationWeather} />
                    <div className="text-location">Usar Localização</div>
                </div>

                <div className="top-bar">
                    <input ref={city_name_ref} type="text" placeholder="Digite o nome de uma cidade" onKeyDown={handleKeyDown} />
                    <div className="search-icon" >
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="element-icon-search" onClick={getWeather} />
                    </div>
                </div>
                <div className="weather-image">
                    <img src={`https://openweathermap.org/img/wn/${mainIcon}@2x.png`} alt="" />
                </div>
                <div className="weather-temp">{mainTemp}°c</div>
                <div className="weather-location">{cityName}</div>
                <div className="data-container">
                    <div className="element">
                        <FontAwesomeIcon icon={faDroplet} className="element-icon" />
                        <div className="data">
                            <div className="humidity-percent">{humidity}%</div>
                            <div className="text">Humidade</div>
                        </div>
                    </div>
                    <div className="element">
                        <FontAwesomeIcon icon={faWind} className="element-icon" />
                        <div className="data">
                            <div className="wind-speed">{windSpeed} km/h</div>
                            <div className="text">Velocidade do Vento</div>
                        </div>
                    </div>
                </div>

                <div className="temp-container">

                    <div className="temp-0">
                        <img src={five_icon_0} alt="" />
                        <p className="week-text">{five_week_day_0}</p>
                        <p>Max. {five_max_temp_0}°c</p>
                        <p>Min. {five_min_temp_0}°c</p>
                    </div>

                    <div className="temp-1">
                        <img src={five_icon_1} alt="" />
                        <p className="week-text">{five_week_day_1}</p>
                        <p>Max. {five_max_temp_1}°c</p>
                        <p>Min. {five_min_temp_1}°c</p>
                    </div>

                    <div className="temp-2">
                        <img src={five_icon_2} alt="" />
                        <p className="week-text">{five_week_day_2}</p>
                        <p>Max. {five_max_temp_2}°c</p>
                        <p>Min. {five_min_temp_2}°c</p>
                    </div>

                    <div className="temp-3">
                        <img src={five_icon_3} alt="" />
                        <p className="week-text">{five_week_day_3}</p>
                        <p>Max. {five_max_temp_3}°c</p>
                        <p>Min. {five_min_temp_3}°c</p>
                    </div>

                    <div className="temp-4">
                        <img src={five_icon_4} alt="" />
                        <p className="week-text">{five_week_day_4}</p>
                        <p>Max. {five_max_temp_4}°c</p>
                        <p>Min. {five_min_temp_4}°c</p>
                    </div>

                </div>

            </div>

        </div>

    )

}

export default PaginaInicial