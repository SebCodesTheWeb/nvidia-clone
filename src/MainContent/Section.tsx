import React from 'react'
import {Box, Heading, VStack, Text, Wrap} from '@chakra-ui/react'
import {Card} from './Card'
import data from "./data.json"

interface SectionProps {
    category: string,
    heading: string,
    subheading?: string,
}

interface CardObject {
    heading: string,
    text: string,
    img: string,
    category: string,
}

const displayCard = (card: CardObject, category: string) => {
    if(card.category === category) {
        return  <Card heading={card.heading} text={card.text} img={card.img} />
    }
    else {
        console.log(card.category);
    }
}

function isEmpty(str: string | undefined) {
    return (!str || str.length === 0 );
}

export const Section: React.FC<SectionProps> = ({category, heading, subheading,}) => {
        return (<Box p={10}>
            <VStack spacing={10}>
                <Heading color='#76b900' fontWeight='thin' letterSpacing={2} textTransform='uppercase' >{heading}</Heading>
                {isEmpty(subheading)? 0 : <Text>{subheading}</Text>}
                <Wrap spacing={10} px={0} justify='center' maxW={1600}>
                    {data.map(card => displayCard(card, category))}
                </Wrap>
            </VStack>

        </Box>);
}