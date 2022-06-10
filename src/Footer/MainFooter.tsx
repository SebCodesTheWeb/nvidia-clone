import React from 'react'
import {VStack, HStack, Image} from '@chakra-ui/react'
import {FooterColumn} from './FooterColumn'
import {NavItem} from '../Nav/NavItem'

interface MainFooterProps {

}

export const MainFooter: React.FC<MainFooterProps> = () => {
        return (<VStack bgColor='black'>
                <HStack align='flex-start' spacing={20} justify='center' py={10}>
                        <FooterColumn heading="Företagsinformation" content={['Om Nvidia', 'Företagsöversikt', 'Tekniker', "NVIDIAS forskning", 'Investerare', 'Socialt ansvar', 'NVIDIA Foundation']}/>
                        <FooterColumn heading="Engagera dig" content={['Forum', 'Karriär', 'Startsida för utvecklare', 'NVIDIA-partnernätverket', 'NVIDIA Inception', 'Resurser för riskkapitalister', 'NVIDIA Inception GPU Ventures', 'Teknisk utbildning', 'Utbildning för IT-proffs', 'Profesionella tjänster för datavetenskap']}/>
                        <FooterColumn heading="Företagsinformation" content={['Om Nvidia', 'Företagsöversikt', 'Tekniker', "NVIDIAS forskning", 'Investerare', 'Socialt ansvar', 'NVIDIA Foundation']}/>
                </HStack>
        </VStack>);
}