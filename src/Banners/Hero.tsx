import React from 'react'
import {HStack, VStack, Box, Heading, Text, Button} from '@chakra-ui/react'

interface HeroProps {
    heading: string,
    text: string,
    button: string,
    img: string,
    alignToCenter?: boolean,
}

export const Hero: React.FC<HeroProps> = ({heading, text, button, img, alignToCenter}) => {
        return (
        <Box 
        textTransform='uppercase' 
        w='full' h={600} 
        bgColor='green.200' 
        bgImage={img} 
        bgPosition='center' 
        bgSize='cover'
        >
            <VStack 
            spacing={5} 
            justify={alignToCenter? 'flex-start' : 'center'} 
            h='full' 
            align={alignToCenter? 'center' : 'flex-start'}
            pt={alignToCenter? 10: 0}
            >
                <Heading color='white' size='3xl'>{heading}</Heading>
                <Text textAlign='left' color='#76b900' fontSize='4xl' fontWeight='bold'>{text}</Text>
                <Button 
                color='white' 
                bgColor='#76B901' 
                textTransform='uppercase' 
                rounded='none' 
                _hover={{color: 'black'}}
                >{button}</Button>
            </VStack>
        </Box>);
}