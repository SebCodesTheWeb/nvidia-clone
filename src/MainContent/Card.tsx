import React, {useState} from 'react'
import {Box, VStack, Image, Heading, Text, AspectRatio} from '@chakra-ui/react'

interface CardProps {
    heading: string,
    text: string,
    img: string,
}

export const Card: React.FC<CardProps> = ({heading, text, img}) => {
    const [activated, setActivated] = useState(false);


        return (<Box w={300} h={300} bgColor='white' rounded={3} boxShadow={activated? 'xl' : 'md'}>
            <VStack align='left'>
                <AspectRatio w={300} ratio={16 / 9}>
                <Image 
                src={img} 
                objectFit='cover'
                borderTopLeftRadius={3} 
                borderTopRightRadius={3} 
                cursor='pointer' 
                onMouseEnter={() => setActivated(true)} 
                onMouseLeave={() => setActivated(false)}
                />

                </AspectRatio>
                <Box px={5} pt={2}>
                    <Heading size='md' textAlign='left' fontWeight='400' color='#76b900'>{heading}</Heading>
                    <Text color='gray.600' mt={2} fontSize='sm'>{text}</Text>
                </Box>
            </VStack>
        </Box>);
}