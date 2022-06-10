import React from 'react'
import {Box} from '@chakra-ui/react'
import {Section} from './Section'

interface MainSectionProps {

}

export const MainSection: React.FC<MainSectionProps> = () => {
        return (<Box bgColor='gray.100' pb={5}>

            <Section heading="köp" category="buy"/>
            <Section heading="företagslösningar" subheading="Läs mer om våra övriga företagslösningar" category="enterprise"/>
        </Box>);
}