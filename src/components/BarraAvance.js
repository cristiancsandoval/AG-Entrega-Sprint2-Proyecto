import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Avance, BarraAvanceFondo, BarraAvanceSelect, BtnSalir, CntrBarraAvance, CntrVidas } from '../style/estilos'

const BarraAvance = ({vidas, avance}) => {

    const valorWidth = (avance*100);
    const navigate = useNavigate()

  return (
    <Avance>
        <BtnSalir onClick={()=>(navigate("/home"))}>
            <img src="https://res.cloudinary.com/dbzo53yx4/image/upload/v1645284686/daily-bits/x_wqfibq.svg"  alt="salir"/>
        </BtnSalir>
        <CntrBarraAvance>
            <BarraAvanceFondo/>
            <BarraAvanceSelect style={{"width":`${valorWidth}%`}} />
        </CntrBarraAvance>
        <CntrVidas>
            <img src="https://res.cloudinary.com/dbzo53yx4/image/upload/v1645284724/daily-bits/heart_wrk8tz.svg" alt="heart"/>
            <p>{vidas}</p>
        </CntrVidas>
    </Avance>
  )
}

export default BarraAvance