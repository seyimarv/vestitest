import styled from "styled-components";
import { device } from '../../styles/breakpoints.styled';
import { Constants } from "../../styles/constants.styles";

export const Navigation = styled.nav`
padding: 3rem 12rem;
display: flex;
overflow: hidden;
width: 100%;


@media ${device.tabLand} {
    padding: 6rem 8rem;
  }

  @media ${device.tabPort} {
    padding: 6rem;
}
@media ${device.mobile} {
    padding: 4rem;
}


 
 .logo {
     width: 25%;
   
     .toggleIcon {
        position: relative;
        margin-top: 3.5rem;
        opacity: 0;

         @media ${device.mobile} {
          opacity: 1;
          &,
        &::before,
        &::after {
            width: 4rem;
            height: 2px;
            background-color: ${Constants.colorPrimary};
            display: inline-block;
            z-index: 12;
        }
        background-color:  ${(props) => props.mobileNavigation ? "transparent" : ''};
        &::before {
            width:  ${(props) => props.mobileNavigation ? "4rem" : '5rem'};
        }
        &::after {
            width:  ${(props) => props.mobileNavigation ? "4rem" : '3rem'};
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            right: 0;
            transition: all .2s;
        }
      

        &::before {
            top:  ${(props) => props.mobileNavigation ? "0" : '-.8rem'};
            transform:  ${(props) => props.mobileNavigation ? "rotate(135deg)" : ''};
          
        }

        &::after {
            top:  ${(props) => props.mobileNavigation ? "0" : '.8rem'};
            transform:  ${(props) => props.mobileNavigation ? "rotate(-135deg)" : ''};
            
        }
        }
         opacity: 0;
         position: fixed;
         right: 5rem;
         top: 6rem;
         z-index: 12;
     }
      
 }
         
       
ul {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    list-style: none;
    align-items: center;

@media ${device.mobile} {
    flex-direction: column;
    position: fixed;
    background: ${Constants.colorSecondaryDark};
    height: 100%;
    z-index: 10;
    overflow: hidden;
    padding: 8rem 0rem;
    top: 0;
    right: 0;
    width: 70%;

  ${'' /* display:  ${(props) => props.mobileNavigation ? "" : 'none'}; */}
  transform:  ${(props) => props.mobileNavigation ? "translateX(0rem)" : 'translateX(50rem)'};
  transition: all 1s;
 
}
}


`

export const NavigationLinks = styled.li`
font-size: 1.6rem;
color: ${(props) => props.color || props.active || ' #14290A;'};
border-bottom: 2px solid ${(props) => props.active || 'white'};
padding-bottom: 3rem;
cursor: pointer;
transition: all .2s;

@media ${device.mobile} {
    font-size: 2rem;
    padding-bottom: 1rem;
}

&:hover {
    opacity: .8;
}



a {
    text-decoration: none;
    
cursor: pointer;
   
}


`