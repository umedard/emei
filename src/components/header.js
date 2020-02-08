import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Menu from './mainMenu'

const Head = styled.h1`
  padding: 1em;
  background: orange;
`



const Header = ({ siteTitle }) => (
  <header style={{
    margin: `0 auto`,
    maxWidth: 960,
    border: '2px solid red'
  }}>
    
    <Head>  

       logo - english/search
     </Head>
     <Menu/>
  </header>
)

export default Header
