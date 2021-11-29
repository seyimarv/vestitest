import styled from "styled-components";


export const EachOfferCard = styled.div `
padding: 3rem;
border-radius: 10px;
background-color: ${props => props.background};
text-align: ${props => props.textAlign};
`

export const Index = styled.div `
border-radius:  ${props => props.borderRadius};
font-size: 2rem;
display: flex;
justify-content: center;
align-items: center;
background: #C4C4C4;;
color: black;
width: 5.2rem;
height: 5.4rem;
margin:${props => props.textAlign ? 'auto' : ''};;
margin-bottom: 10px
`