import styled from "styled-components";
import { Constants } from "./constants.styles";

export const Paragraph = styled.p`
color: ${Constants.colorPrimaryLight};
font-size: ${props => props.size || "2rem"};
line-height: ${props => props.lineHeight || "150%"};
font-weight: 300;
`

export const PrimaryHeading = styled.h1`
font-size: 5rem;
color:  #14290A;
line-height: 130%;
font-weight: 900;
margin: 1rem 0rem;
span {
    color: ${Constants.colorPrimary}
}


`

export const SecondaryHeading = styled.h2`
font-size: ${props => props.size || "2.4rem"};
line-height:  ${props => props.lineHeight || "2.88rem"};
font-weight: 700;
color: ${Constants.colorPrimaryDark}

`

export const StyledLink = styled.a`
display: inline-block;
text-decoration: none;
font-size: 2rem;
color: ${Constants.colorPrimary};
font-weight: 600;
margin-top: 4rem;

span  {
    font-size: 3rem;
}
`

export const FooterParagraph = styled.p`
font-weight: ${props => props.copyright ? 300 : 400};
font-size:  ${props => props.size};
color: #FFFFFF;
font-family: Roboto;
line-height: 170%;
`

export const FooterHeading = styled.h2`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 1.8rem;
line-height: 21px;
color: #FFFFFF;
`

export const FooterIcons = styled.li`

display: inline-block;
img {
    width: 3rem;
height: 3rem;
}


`

export const AlignTextCenter = styled.div`
text-align: center;

`

export const Center = styled.div`
display: flex;
justify-content: center;
`