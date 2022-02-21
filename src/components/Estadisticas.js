import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { endpoint } from '../helpers/Urls'
import { obtenerId, UsuarioStatus } from '../helpers/Usuario'
import { Cntr, CntrEstadistica, CntrPerfil, TituloGeneral } from '../style/estilos'
import Navbar from './Navbar'

const Estadisticas = () => {

  const estado = UsuarioStatus()
  const navigate = useNavigate()
  const idUser = obtenerId()
  const [user, setUser] = useState([])

  useEffect(()=>{

    if(!estado){
      navigate("/login")
    }else{
      getData()
    }

  })

  const getData = () =>{
    axios.get(endpoint+idUser)
    .then(response => {
        setUser(response.data)
    })
    .catch(error => {
        console.log(error)
    })
  }

  const {tiempo, correctas, incorrectas} = user
  const tiempoHoras = String((Math.round(Number(tiempo)/6))*10)
  const totalPreguntas = String(Number(correctas) + Number(incorrectas))

  return (
    <Cntr>
      <TituloGeneral>Estadísticas</TituloGeneral>
      <CntrPerfil>
        <CntrEstadistica className='cntr-est'>
          <img src='https://res.cloudinary.com/dbzo53yx4/image/upload/v1645326238/daily-bits/Property_1_clock_xdoajh.svg' alt="icon clock"/>
          <p>Tiempo de estudio (horas)</p>
          <p className='valor'>{tiempoHoras}</p>
        </CntrEstadistica>
        <CntrEstadistica className='cntr-est'>
          <img src='https://res.cloudinary.com/dbzo53yx4/image/upload/v1645326458/daily-bits/Property_1_message-circle_tocvjb.svg' alt="icon clock"/>
          <p>Preguntas contestadas</p>
          <p className='valor'>{totalPreguntas}</p>
        </CntrEstadistica>
        <CntrEstadistica className='cntr-est'>
          <img src='https://res.cloudinary.com/dbzo53yx4/image/upload/v1645326458/daily-bits/Property_1_message-circle_tocvjb.svg' alt="icon clock"/>
          <p>Respuestas correctas</p>
          <p className='valor green-select'>{correctas}</p>
        </CntrEstadistica>
        <CntrEstadistica className='cntr-est'>
          <img src='https://res.cloudinary.com/dbzo53yx4/image/upload/v1645326458/daily-bits/Property_1_message-circle_tocvjb.svg' alt="icon clock"/>
          <p>Respuestas incorrectas</p>
          <p className='valor red-select' >{incorrectas}</p>
        </CntrEstadistica>
      </CntrPerfil>
      <Navbar select="estadisticas"/>
    </Cntr>
  )
}

export default Estadisticas