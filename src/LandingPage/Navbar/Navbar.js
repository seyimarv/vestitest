import React, { useState } from 'react'
import { Button } from '../LandingPage.styles'
import { Navigation, NavigationLinks } from './Navbar.styles'
import VestiLogo from '../../img/VestiHeaderLogo.svg'
import Headroom from 'react-headroom'



const Navbar = () => {
    const [mobileNavigation, setMobileNavigation] = useState(false)
    const toggleMobileNavigation = () => {
        setMobileNavigation(!mobileNavigation)
    }
    return (
      
        
        <Navigation mobileNavigation={mobileNavigation}>
            <div className='logo'>
                <img src={VestiLogo} alt="vestilogoimage" />

                <span className='toggleIcon' onClick={toggleMobileNavigation}></span>
            </div>
            <ul  mobileNavigation={mobileNavigation}>
                <NavigationLinks active='#67A948'>
                    Home
                </NavigationLinks>
                <NavigationLinks>
                    About
                </NavigationLinks>
                <NavigationLinks>
                    Fees
                </NavigationLinks>
                <NavigationLinks>
                    FAQs
                </NavigationLinks>
                <NavigationLinks>
                    Support
                </NavigationLinks>
                <NavigationLinks>
                    Migration Fries
                </NavigationLinks>
                <NavigationLinks color="#67A948">
                    Sign In
                </NavigationLinks>
                <NavigationLinks>
                    <Button size='1.6rem'>
                        Join for free
                    </Button>
                </NavigationLinks>
            </ul>
        </Navigation>
       
    )
}


export default Navbar