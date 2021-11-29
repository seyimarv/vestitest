import React from 'react'
import { Paragraph, SecondaryHeading } from '../../styles/Typograpghy.styles'
import { EachOfferCard, Index } from './offersCard.styles'



export const OffersCard = ({index, title, content, indexBorderRadius, background, textAlign}) => {

    return (
        <>
            <EachOfferCard background={background} textAlign={textAlign}>
                <Index borderRadius={indexBorderRadius} textAlign={textAlign}>{index + 1}</Index>
                <SecondaryHeading size='1.8rem'>
                    {title}
                </SecondaryHeading>
                <Paragraph size='1.6rem'>
                   {content}
                </Paragraph>
            </EachOfferCard>
        </>
    )
}