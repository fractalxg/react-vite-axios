import { useState, useEffect } from "react"
import axios from "axios"
import "./ConsultasRealizadas.css"

const local_host = import.meta.env.VITE_REACT_APP_SERVER_URL

const ConsultasRealizadas = () => {

    const [weatherBD, setWeatherBD] = useState([])

    const getWeather = async () => {

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
                weatherBD.length === 0 ? (
                    <p className="loading">Carregando...</p>
                ) : (

                    weatherBD.map((bd) => (


                        <div className="post" key={bd.id}>

                            <div className="table-data">
                                <div className="post-date">Data da Consulta: {bd.today}</div>
                                <img className="temp-img-icon" src={`https://openweathermap.org/img/wn/${bd.main_icon}@2x.png`} alt="" />
                                <p className="table">{bd.main_temp} c°</p>
                                <p className="table">{bd.city_name}</p>
                                <p className="table">Humidade: {bd.humidity}%</p>
                                <p className="table">Vento: {bd.wind_speed} km/h</p>

                            </div>

                        </div>

                    ))
                ))}
        </div>)
}

export default ConsultasRealizadas