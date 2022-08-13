import React from 'react'
import Logo from '../assets/logo.png'

const Footer: React.FC<{}> = () => {
  return (
    <div>
        <footer>
            <a href="/">
                <img src={Logo} alt="Logo" />
            </a>

            <p>Built & Designed by Caniggia Thompson</p>
            <p>&copy; All rights reserved</p>
        </footer>
    </div>
  )
}

export default Footer