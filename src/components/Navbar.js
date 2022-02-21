import React from 'react'
import { Link } from 'react-router-dom'
import { CntrNavbar, LinkNavbar } from '../style/estilos'

const Navbar = ({select}) => {

  const claseHome = select==="home" ? "select" : ""
  const srcHome = select==="home" ? "https://res.cloudinary.com/dbzo53yx4/image/upload/v1645284724/daily-bits/home-select_f6x1o6.svg" : "https://res.cloudinary.com/dbzo53yx4/image/upload/v1645284788/daily-bits/Property_1_home_q9s6nb.svg"
  const claseEst = select==="estadisticas" ? "select" : ""
  const srcEst = select==="estadisticas" ? "https://res.cloudinary.com/dbzo53yx4/image/upload/v1645284724/daily-bits/activity-select_gynl8g.svg" : "https://res.cloudinary.com/dbzo53yx4/image/upload/v1645284725/daily-bits/Property_1_activity_ks2fm0.svg"
  const clasePerfil = select==="perfil" ? "select" : ""
  const srcPerfil = select==="perfil" ? "https://res.cloudinary.com/dbzo53yx4/image/upload/v1645284689/daily-bits/user-select_l0ql3o.svg" : "https://res.cloudinary.com/dbzo53yx4/image/upload/v1645284773/daily-bits/Property_1_user_iiqwsz.svg"

  return (
    <CntrNavbar>
        <LinkNavbar as={Link} to="/home" className={claseHome}>
          <img src={srcHome} alt="home icon"/>
          <p>Home</p>
        </LinkNavbar>
        <LinkNavbar as={Link} to="/estadisticas" className={claseEst}>
          <img src={srcEst} alt="home icon"/>
          <p>Estadísticas</p>
        </LinkNavbar>
        <LinkNavbar as={Link} to="/perfil" className={clasePerfil}>
          <img src={srcPerfil} alt="home icon"/>
          <p>Perfil</p>
        </LinkNavbar>
    </CntrNavbar>
  )
}

export default Navbar