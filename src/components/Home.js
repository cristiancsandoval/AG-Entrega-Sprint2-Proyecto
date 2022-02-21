import React from 'react'
import { Link } from 'react-router-dom'
import { Cntr, ParHome, CntrCateg } from '../style/estilos'
import Navbar from './Navbar'

const Home = () => {
  return (
    <Cntr>
        <ParHome>Practica tus conocimientos en la categoria que prefieras</ParHome>
        <CntrCateg>
          <Link className='link-categ-home' to={`/preguntas/html`}>
            <img src="https://res.cloudinary.com/dbzo53yx4/image/upload/v1645286308/daily-bits/logo-html_ysyujw.svg" alt="logo html"/>
            <p>HTML</p>
          </Link>
          <Link className='link-categ-home' to={`/preguntas/css`}>
            <img src="https://res.cloudinary.com/dbzo53yx4/image/upload/v1645286343/daily-bits/logo-css_dkemet.svg" alt="logo css"/>
            <p>CSS</p>
          </Link>
          <Link className='link-categ-home' to={`/preguntas/js`}>
            <img src="https://res.cloudinary.com/dbzo53yx4/image/upload/v1645286365/daily-bits/logo-java_cyub0t.svg" alt="logo javascript"/>
            <p>JS</p>
          </Link>
          <Link className='link-categ-home' to={`/preguntas/figma`}>
            <img src="https://res.cloudinary.com/dbzo53yx4/image/upload/v1645286388/daily-bits/logo-figma_xybkus.svg" alt="logo figma"/>
            <p>FIGMA</p>
          </Link>
          <Link className='link-categ-home' to={`/preguntas/ux`}>
            <img src="https://res.cloudinary.com/dbzo53yx4/image/upload/v1645286448/daily-bits/logo-ux_m8yilu.svg" alt="logo ux"/>
            <p>UX</p>
          </Link>
        </CntrCateg>
        <Navbar select={"home"}/>
    </Cntr>
  )
}

export default Home