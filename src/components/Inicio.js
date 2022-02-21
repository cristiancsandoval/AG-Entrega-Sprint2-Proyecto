import React from 'react'
import { Link } from 'react-router-dom'
import {UsuarioStatus} from '../helpers/Usuario'
import { CntrInicio } from '../style/estilos'

const Inicio = () => {

  const ruta = UsuarioStatus() ? "/home" : "/login"

  return (
    <CntrInicio as={Link} to={ruta}>
        <img src="https://res.cloudinary.com/dbzo53yx4/image/upload/v1645286199/daily-bits/Color_white_Container_No_mnpaj0.png" alt="link inicio"/>
    </CntrInicio>
  )
}

export default Inicio