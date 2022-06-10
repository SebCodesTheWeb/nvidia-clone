import React from 'react'
import {VStack, Heading, Divider} from '@chakra-ui/react'
import {FooterLink} from './FooterLink'

interface FooterColumnProps {
        heading: string,
        content: string[],
}

export const FooterColumn: React.FC<FooterColumnProps> = ({heading, content}) => {
        return (
        <VStack align='left' maxW={300} spacing={3}>
                <Heading color='white' size='lg' >{heading}</Heading>
                <Divider pr={10}/>
                {content.map(link => <FooterLink text={link} />)}
        </VStack>);
}