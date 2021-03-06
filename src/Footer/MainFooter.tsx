import React from 'react'
import {VStack, HStack} from '@chakra-ui/react'
import {FooterColumn} from './FooterColumn'

interface MainFooterProps {

}

export const MainFooter: React.FC<MainFooterProps> = () => {
        return (<VStack bgColor='black'>
                <HStack align='flex-start' spacing={150} justify='center' py={10} px={10} maxWidth={1600}>
                        <FooterColumn heading="Företagsinformation" content={['Om Nvidia', 'Företagsöversikt', 'Tekniker', "NVIDIAS forskning", 'Investerare', 'Socialt ansvar', 'NVIDIA Foundation']}/>
                        <FooterColumn heading="Engagera dig" content={['Forum', 'Karriär', 'Startsida för utvecklare', 'NVIDIA-partnernätverket', 'NVIDIA Inception', 'Resurser för riskkapitalister', 'NVIDIA Inception GPU Ventures', 'Teknisk utbildning', 'Utbildning för IT-proffs', 'Profesionella tjänster för datavetenskap']}/>
                        <FooterColumn heading="Företagsinformation" content={['Om Nvidia', 'Företagsöversikt', 'Tekniker', "NVIDIAS forskning", 'Investerare', 'Socialt ansvar', 'NVIDIA Foundation']}/>
                </HStack>
        </VStack>);
}