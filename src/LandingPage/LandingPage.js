import React from 'react'
import { AlignTextCenter, Center, FooterHeading, FooterIcons, FooterParagraph, Paragraph, PrimaryHeading, SecondaryHeading, StyledLink } from '../styles/Typograpghy.styles'
import { About, Button, CreateVestiCard, DoMore, Footer, Introduction, Leverage, Offerings, Security } from './LandingPage.styles'
import VestiCard1 from '../img/Card 1.svg'
import VestiCard2 from '../img/card 2.svg'
import { OffersCard } from './LandingPageOffers/offersCard'
import SecurityImage from '../img/Group 7797.svg'
import VestiLogo from '../img/VestiLogo.svg'
import instagramLogo from '../img/instagram-logo.svg'
import linkedInLogo from '../img/linkedin.svg'
import TwitterLogo from '../img/twitter.svg'
import YoutubeLogo from '../img/youtube-logo.svg'
import FacebookLogo from '../img/Facebook.svg'
import Navbar from './Navbar/Navbar'
import Fade from 'react-reveal/Fade';
import Headroom from 'react-headroom'

const offerings = [
    {
        title: 'Virtual Dollar Card',
        background: '#F9F8F9',
        content: 'We use state-of-the-art data encryption when handling your financial details. We use state of the art data encryption when handling financial details.'
    },
    {
        title: 'Second Benefit',
        content: 'We use state-of-the-art data encryption when handling your financial details. We use state of the art data encryption when handling financial details.'
    },
    {
        title: 'Third Benefit',
        content: 'We use state-of-the-art data encryption when handling your financial details. We use state of the art data encryption when handling financial details.'
    }
]

const CreateVestiSteps = [
    {
        title: 'First Step',

        content: 'We use state-of-the-art data encryption when handling your financial details. We use state of the art data encryption when handling financial details.'
    },
    {
        title: 'Second Step',
        content: 'We use state-of-the-art data encryption when handling your financial details. We use state of the art data encryption when handling financial details.'
    },
    {
        title: 'Third Step',
        content: 'We use state-of-the-art data encryption when handling your financial details. We use state of the art data encryption when handling financial details.'
    }
]

const moreOfferings = [
    {
        title: 'First Benefit',
        background: '#DFFFD0',
        content: 'We use state-of-the-art data encryption when handling your financial details. We use state of the art data encryption when handling financial details.'
    },
    {
        title: 'First Benefit',
        content: 'We use state-of-the-art data encryption when handling your financial details. We use state of the art data encryption when handling financial details.'
    },
    {
        title: 'First Benefit',
        content: 'We use state-of-the-art data encryption when handling your financial details. We use state of the art data encryption when handling financial details.'
    },
    {
        title: 'First Benefit',
        content: 'We use state-of-the-art data encryption when handling your financial details. We use state of the art data encryption when handling financial details.'
    },
    {
        title: 'First Benefit',
        content: 'We use state-of-the-art data encryption when handling your financial details. We use state of the art data encryption when handling financial details.'
    }
]


const LandingPage = () => {

    return (
        <div style={{
            position: 'relative',
            overflow: 'hidden'
        }}>
        <Headroom>
           <Navbar />
        </Headroom>
           
            <Introduction>
            <Fade left duration={1000}>
                <div className='text'>
                    <PrimaryHeading>
                        Introducing Our <br />
                        <span>New Vesti cards.</span>
                    </PrimaryHeading>
                    <Paragraph>
                        Get all the benefits of the Vesti card - spend online, in-store<br />
                        and abroad while saving on currency conversion fees, with the<br />
                        extra layer of security of the Vesti digital card.
                    </Paragraph>
                    <Button margin='2rem'>
                        Order Your Card Now
                    </Button>
                </div>
                </Fade>
                <Fade right>
                <div className='images'>
                    <img src={VestiCard1} alt="Vesticard" />
                    <img src={VestiCard2} alt="Vesticard" />
                </div>
                </Fade>
            </Introduction>
            
            <Leverage>
                <SecondaryHeading size='3.6rem' lineHeight='130%'>
                    Leverage support that helps you grow;<br />
                    designed for freelancers, small businesses,<br />
                    and large corporate entities.
                </SecondaryHeading>
            </Leverage>
            <Fade bottom  duration={2000}>
            <About>
                <div className='box'>
                    <div> </div>

                </div>
                <div className='text'>
                    <SecondaryHeading>
                        What is the Vesti card?
                    </SecondaryHeading>
                    <Paragraph>
                        The Vesti card lets you spend using the real exchange rate online, in-store and while you travel - but exists only in your Wise account, either on your phone or laptop.<br /> <br />

                        There’s no need to carry your wallet, and no risk of your card being compromised. Your Vesti card has different details to your physical card, and can be frozen after each purchase. That means it’s a safe, smart and simple way to spend no matter where in the world you are.
                        <br /> <br />
                        Hold 50+ currencies at once, convert them in real time using the free Vesti app, then spend online, in-store and abroad with your virtual card.
                        <br /> <br />
                        Currently to get the Vesti card you’ll first need to order a physical card. But don’t worry, you don’t need to wait for your physical card to arrive before you start spending on your virtual one.
                    </Paragraph>
                    <StyledLink>Order The Vesti Card Now
                        <span>&#8594;</span>
                    </StyledLink>
                </div>
            </About>
            </Fade>
            <Fade bottom  duration={2000}>
            <Offerings>
                <AlignTextCenter>
                    <SecondaryHeading>Vesti Card Offerings</SecondaryHeading>
                    <Paragraph>Spend safely online, in-store and abroad with the new Vesti card.</Paragraph>
                </AlignTextCenter>
                <div className='contents'>
                    <div className='offerings-list'>
                        {
                            offerings.map(({ title, content, background }, index) => {
                                return (
                                    <OffersCard key={index} background={background} title={title} content={content} indexBorderRadius='5px' index={index} />
                                )
                            })
                        }
                    </div>
                    <div className='box'>
                        <div></div>
                    </div>
                </div>
            </Offerings>
            </Fade>
            <Fade duration={2000}>
            <DoMore>
                <AlignTextCenter>
                    <SecondaryHeading>Do more with your vesti card</SecondaryHeading>
                    <Paragraph>Spend safely online, in-store and abroad with the new Vesti card.</Paragraph>
                </AlignTextCenter>
                <div className='moreofferings-list'>
                    {
                        moreOfferings.map(({ title, content, background }, index) => {
                            return (
                                <div className='eachofferings' >
                                    <OffersCard key={index} background={background}
                                        title={title} content={content} indexBorderRadius='50%' index={index} />
                                </div>
                            )
                        })
                    }
                </div>
            </DoMore>
            </Fade>
            <Fade duration={2000}>
            <CreateVestiCard>
                <AlignTextCenter>
                    <SecondaryHeading>Create Vesti Card</SecondaryHeading>
                    <Paragraph>Create your Vestvirtual card in 3 simple steps.</Paragraph>
                </AlignTextCenter>
                <div className='createvesti-steps'>
                    {
                        CreateVestiSteps.map(({ title, content, background }, index) => {
                            return (
                                <div className='eachsteps' >
                                    <OffersCard key={index} background={background}
                                        title={title} content={content} indexBorderRadius='50%' index={index} textAlign='center' />
                                </div>
                            )
                        })
                    }
                </div>
                <Center>
                    <Button>Order Your Card Today</Button>
                </Center>
            </CreateVestiCard>
            </Fade>
            <Security>
                <div className='security-text'>
                    <SecondaryHeading size='1.8rem'>Safety and security guaranteed.</SecondaryHeading>
                    <Paragraph size='1.6rem'>The Vesti card lets you spend using the real exchange rate online, in-store and while you travel - but exists only in your Wise account, either on your phone or laptop. <br /> <br />
                        There’s no need to carry your wallet, and no risk of your card being compromised. Your Vesti card has different details to your physical card, and can be frozen after each purchase..</Paragraph>
                    <div className='security-subtext'>
                        <span>&#10003;</span>
                        <div>
                            <SecondaryHeading size='1.8rem'>Protected by NG & US SEC</SecondaryHeading>
                            <Paragraph size='1.6rem'>That means it’s a safe, smart and simple way to spend no matter where in the world you are.</Paragraph>
                        </div>
                    </div>
                    <div className='security-subtext'>
                        <span>&#10003;</span>
                        <div>
                            <SecondaryHeading size='1.8rem'>PADSS Certification</SecondaryHeading>
                            <Paragraph size='1.6rem'> Hold 50+ currencies at once, convert them in real time using the free Vesti app, then spend online, in-store and abroad with your virtual card.</Paragraph>
                        </div>
                    </div>
                    <StyledLink>Order The Vesti Card Now
                        <span>&#8594;</span>
                    </StyledLink>
                </div>
                <div className='security-image'>
                    <img src={SecurityImage} alt="securityimage" />
                </div>
            </Security>
            <Leverage>
                <SecondaryHeading size='3rem' lineHeight='130%'>
                    Get your virtual card and start spending <br />
                    safely online, in-store and abroad.
                </SecondaryHeading>
                <Center>
                    <Button margin='2rem'>Order Your Card Today</Button>
                </Center>
            </Leverage>
            <Footer>
                <div className='footer-heading'>
                    <div className='image'>
                        <img src={VestiLogo} alt='vestilogo' />
                    </div>
                    <ul>

                        <li>
                            <FooterHeading>
                                Products
                            </FooterHeading>
                            <FooterParagraph size='1.5rem'>
                                Cryptocurrency
                                MLab (Migration Lab)
                            </FooterParagraph>
                        </li>
                        <li>
                            <FooterHeading>
                                CONTACT
                            </FooterHeading>
                            <FooterParagraph size='1.5rem'>
                                support@sycainvest.com
                            </FooterParagraph>
                        </li>
                        <li>
                            <FooterHeading>
                                NIGERIA (LAGOS)
                            </FooterHeading>
                            <FooterParagraph size='1.5rem'>
                                110 Randol Mill Rd #240
                                Arlington Texas, 76011

                            </FooterParagraph>
                        </li>
                        <li>
                            <FooterHeading>
                                DALLAS TEXAS, USA
                            </FooterHeading>
                            <FooterParagraph size='1.5rem'>
                                110 Randol Mill Rd #240
                                Arlington Texas, 76011

                            </FooterParagraph>
                        </li>
                    </ul>
                </div>
                <div className='footer-body'>
                    <FooterParagraph size='1.6rem'>
                        Vesti Technologies Inc does not provide investment advice and individual investors should make their own decisions or seek independent advice. The value of investments can go up as well as down and you may receive back less than your original investment. We are a technology platform, not a registered broker-dealer or investment adviser. <br /> <br />
                        Vesti Technologies Inc complies with the EU-U.S. Privacy Shield Framework as set forth by the U.S. Department of Commerce regarding the collection, use, and retention of all personal information transferred from the European Union to the United States. In using our website, we may ask you to provide us with some specific and personally identifiable information that can be used for the purpose of contacting, identifying and tagging you. Such information could include your name, Phone numbers, Email address, and geographical location. It should be noted that personally identifiable information may include but is not restricted to your name (“Personal Information”). We may also collect anonymous demographic information, which is not unique to you. Our website collects information that your device sends every time you use it. This Log Data may include information such as phone number, type of device, version of Operating system, the pages of our application that you visit, the time and date of visit, the time spent on those pages and other statistics. Additionally, we may use third party services such as Google Analytics that collect, monitor and analyze this information.
                    </FooterParagraph>
                </div>
                <div className="footer-footing">
                    <ul className="footer-footing-icons">
                        <FooterIcons>
                            <img src={FacebookLogo} alt='socialmediaicon'/>
                        </FooterIcons>
                        <FooterIcons>
                            <img src={instagramLogo} alt='socialmediaicon'/>
                        </FooterIcons>
                        <FooterIcons>
                            <img src={linkedInLogo} alt='socialmediaicon'/>
                        </FooterIcons>
                        <FooterIcons>
                            <img src={TwitterLogo} alt='socialmediaicon'/>
                        </FooterIcons>
                        <FooterIcons>
                            <img src={YoutubeLogo} alt='socialmediaicon'/>
                        </FooterIcons>
                    </ul>
                    <FooterParagraph size='1.8rem'>
                        POLICIES   •   TERMS   •   PRIVACY
                    </FooterParagraph>
                    <FooterParagraph size='1.8rem' copyright>
                        © 2021 VEST. All rights reserved.
                    </FooterParagraph>
                </div>
            </Footer>
        </div>
    )
}


export default LandingPage