import { useState, useEffect } from "react"
import axios from "axios"
import "./ConsultasRealizadas.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faDroplet } from '@fortawesome/free-solid-svg-icons'

const local_host = import.meta.env.VITE_REACT_APP_SERVER_URL

const ConsultasRealizadas = () => {

    const [weatherBD, setWeatherBD] = useState([])

    const getWeather = async () => {

        // const params = {
        //     'today': today.toLocaleDateString(),
        //     'city_name': city_name_ref.current.value
        // }
        const response = await axios.get(`${local_host}/climate`)
        setWeatherBD(response.data.data)
        console.log(response.data.data)
    }

    useEffect(() => {

        getWeather()

    }, [])

    return (
        <div className="home">
            {weatherBD === undefined ? (<p className="loading">Nenhum dado cadastrado</p>) : (
            weatherBD.length === 0 ? (<p className="loading">Carregando...</p>):(
                weatherBD.map((bd) => (
                    <div className="post" key={bd.id}>
                        <div className="post-date">Data da Consulta: {bd.today}</div>
                        <h2>Principal</h2>
                        <div className="main-temp">

                            <div className="horizontal-item">
                                <img className="temp-img-icon" src={`https://openweathermap.org/img/wn/${bd.main_icon}@2x.png`} alt="" />
                                <p className="bar">|</p>
                                <p className="temp">Temperatura: {bd.main_temp} c°</p>
                                <p className="bar">|</p>
                                <p className="city">Cidade: {bd.city_name}</p>
                            </div>
                            <div className="horizontal-item">
                                <p className="bar">|</p>
                                <FontAwesomeIcon icon={faDroplet} className="fontIcon" />
                                <p>Humidade:</p>
                                <p className="humidityData" >{bd.humidity}%</p>
                            </div>
                            <div className="horizontal-item">
                                <p className="bar">|</p>
                                <FontAwesomeIcon icon={faWind} className="fontIcon" />
                                <p>Velocidade do Vento:</p>
                                <p className="windData">{bd.wind_speed} km/h</p>
                            </div>

                        </div>
                        <h2>Dias da Semana</h2>
                        <div className="five-temp">
                            <div className="week-0">
                                <div className="horizontal-item">
                                    <img className="temp-img-icon" src={bd.five_icon_0} alt="" />
                                    <p className="bar">|</p>
                                    <p className="temp">{bd.five_week_day_0},</p>
                                    <p className="temp">Máxima: {bd.five_max_temp_0} c°,</p>
                                    <p className="temp">Minima: {bd.five_min_temp_0} c°.</p>
                                </div>
                            </div>
                        </div>

                        <div className="five-temp">
                            <div className="week-1">
                                <div className="horizontal-item">
                                    <img className="temp-img-icon" src={bd.five_icon_1} alt="" />
                                    <p className="bar">|</p>
                                    <p className="temp">{bd.five_week_day_1},</p>
                                    <p className="temp">Máxima: {bd.five_max_temp_1} c°,</p>
                                    <p className="temp">Minima: {bd.five_min_temp_1} c°.</p>
                                </div>
                            </div>
                        </div>

                        <div className="five-temp">
                            <div className="week-2">
                                <div className="horizontal-item">
                                    <img className="temp-img-icon" src={bd.five_icon_2} alt="" />
                                    <p className="bar">|</p>
                                    <p className="temp">{bd.five_week_day_2},</p>
                                    <p className="temp">Máxima: {bd.five_max_temp_2} c°,</p>
                                    <p className="temp">Minima: {bd.five_min_temp_2} c°.</p>
                                </div>
                            </div>
                        </div>

                        <div className="five-temp">
                            <div className="week-3">
                                <div className="horizontal-item">
                                    <img className="temp-img-icon" src={bd.five_icon_3} alt="" />
                                    <p className="bar">|</p>
                                    <p className="temp">{bd.five_week_day_3},</p>
                                    <p className="temp">Máxima: {bd.five_max_temp_3} c°,</p>
                                    <p className="temp">Minima: {bd.five_min_temp_3} c°.</p>
                                </div>
                            </div>
                        </div>

                        <div className="five-temp">
                            <div className="week-4">
                                <div className="horizontal-item">
                                    <img className="temp-img-icon" src={bd.five_icon_4} alt="" />
                                    <p className="bar">|</p>
                                    <p className="temp">{bd.five_week_day_4},</p>
                                    <p className="temp">Máxima: {bd.five_max_temp_4} c°,</p>
                                    <p className="temp">Minima: {bd.five_min_temp_4} c°.</p>
                                </div>
                            </div>
                        </div>



                    </div>
                ))
            ))}
        </div>)
}

export default ConsultasRealizadas