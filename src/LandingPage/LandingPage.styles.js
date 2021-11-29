import styled from "styled-components";
import { Constants } from "../styles/constants.styles";
import { device } from "../styles/breakpoints.styled";

export const Button = styled.button`
  background-color: ${Constants.colorPrimary};
  padding: 1.5rem 3rem;
  border-radius: 10px;
  border: 1px solid ${Constants.colorPrimary};
  color: ${Constants.colorSecondaryLight};
  font-weight: 300;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  margin-top: ${(props) => props.margin};
  font-size: ${(props) => props.size || "1.8rem"};
  display: flex;
  justify-content: center;
transition: all .2s;
  &:hover {
      transform: translateY(-.3rem)
  }
`;

export const Introduction = styled.section`
  display: flex;
  padding: 6rem 12rem;

  @media ${device.tabLand} {
    padding: 6rem 8rem;
  }
  @media ${device.tabPort} {
    padding:6rem 5rem;
  }
  @media ${device.mobile} {
    flex-direction: column;
    padding:6rem 4rem;
    padding-bottom: 15rem;
    
  }

  * {
    flex-basis: 100%;
  }

  .images {
    position: relative;
    @media ${device.mobile} {
      left: 1rem;
      top: 2rem;
    }

    img {
      width: 37rem;
      height: 25.33rem;
      position: absolute;
      right: 0;

      @media ${device.tabPort} {
        width: 32rem;
      }

      @media ${device.mobile} {
        width: 26rem;
      }

      &:first-child {
        z-index: 2;
        top: 4rem;
        right: 10rem;
      }
    }
  }
`;



export const Leverage = styled.section`
  text-align: center;
  padding: 10rem;
  background-color: ${Constants.colorSecondaryDark};

  @media ${device.mobile} {
    padding: 4rem;
    margin: 20rem 0rem;
  }
`;
export const About = styled.section`
  display: flex;
  padding: 12rem;

  @media ${device.tabPort} {
    padding: 5rem;
  }
  @media ${device.mobile} {
    flex-direction: column;
    padding: 4rem;
  }

  * {
    flex-basis: 100%;
  }

  .box {
    @media ${device.mobile} {
      order: 2;
      margin: 5rem 0rem;
    }
    div {
      width: 90%;
      height: 100%;
      background-color: ${Constants.colorGrey};
      border-radius: 10px;

      @media ${device.mobile} {
        height: 50rem;
      }
    }
  }
`;




export const Offerings = styled.section`
  padding: 12rem;
  height: 100%;

  @media ${device.tabPort} {
    padding: 5rem;
  }

  @media ${device.mobile} {
    flex-direction: column;
    padding: 4rem;
    margin: 10rem 0rem;
  }

  .contents {
    padding-top: 5rem;
    display: flex;
    @media ${device.mobile} {
      flex-direction: column;
    }

    .offerings-list {
      width: 70%;
      @media ${device.tabPort} {
        width: 90%;
      }

      @media ${device.tabPort} {
        width: 100%;
      }
    }
  }

  .box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      height: 51.14rem;
      width: 53.85rem;
      margin: auto;
      background-color: ${Constants.colorGrey};
      border-radius: 10px;
      @media ${device.tabPort} {
        width: 50rem;
      }
    }
  }
`;
export const DoMore = styled.section`
  border-radius: 50px;
  padding: 12rem;
  background-color: ${Constants.colorSecondaryDark};
  margin: 2rem;
  @media ${device.tabPort} {
    padding: 5rem;
  }
  @media ${device.mobile} {
    padding: 4rem;
    margin: 10rem 0rem;
  }

  .moreofferings-list {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
    .eachofferings {
      width: 33%;

      @media ${device.mobile} {
        width: 100%;
      }
    }
  }
`;




export const CreateVestiCard = styled.section`
  padding: 12rem;

  @media ${device.tabPort} {
    padding: 5rem;
  }
  @media ${device.mobile} {
    padding: 4rem;
    margin: 10rem 0rem;
  }

  .createvesti-steps {
    display: flex;
    flex-wrap: wrap;

    .eachsteps {
      width: 33%;

      @media ${device.mobile} {
        width: 100%;
      }
    }
  }
`;




export const Security = styled.section`
  display: flex;
  padding: 9rem;

  @media ${device.tabPort} {
    padding: 4rem;
  }

  @media ${device.mobile} {
    padding: 3rem;
    flex-direction: column;
  }

  .security-text {
    width: 70%;

    @media ${device.mobile} {
      width: 100%;
    }
  }
  .security-image {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 100%;

    @media ${device.mobile} {
      margin: 3rem 0rem;
      justify-content: center;
    }
    img {
      height: 54rem;

      @media ${device.mobile} {
        width: 100%;
        margin: auto;
      }
    }
  }
  .security-subtext {
    margin: 2rem 0rem;
    display: flex;
    span {
      background: #e5e5e5;
      color: ${Constants.colorPrimary};
      font-weight: 900;
      font-size: 1.3rem;
      padding: 0.1rem;
      border-radius: 2px;
      height: 2rem;
      margin: 0.5rem;
    }
  }
`;




export const Footer = styled.footer`
  padding: 6rem 9rem;
  background: ${Constants.colorPrimary};

  @media ${device.tabPort} {
    padding: 4rem;
  }
  @media ${device.mobile} {
    flex-direction: column;
    padding: 3rem;
  }
  .footer-heading {
    display: flex;
    @media ${device.mobile} {
      flex-direction: column;
    }

    .image {
      width: 40%;

      @media ${device.mobile} {
        width: 80%;
        margin: auto;
      }
    }
    ul {
      display: flex;
      list-style: none;

      @media ${device.tabPort} {
        flex-wrap: wrap;
      }

      @media ${device.mobile} {
        margin-top: 6rem;
      }

      li {
        padding: 0rem 2rem;

        @media ${device.tabPort} {
          width: 33%;
          &:last-child {
            margin-top: 3rem;
          }
        }

        @media ${device.mobile} {
          width: 50%;
          padding: 2rem 0rem;
        }

        h2 {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
  .footer-body {
    border-bottom: 1px solid ${Constants.colorSecondaryLight};
    padding: 3.5rem 0rem;
  }

  .footer-footing {
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;

    @media ${device.mobile} {
      flex-direction: column;
      text-align: center;

      p {
        margin-top: 1rem;
      }
    }

    ul {
      width: 20%;
      display: flex;
      justify-content: space-between;
      list-style: none;

      @media ${device.mobile} {
        width: 100%;
        margin-bottom: 2rem;

        li {
          width: 40%;
        }
      }
    }
  }
`;
