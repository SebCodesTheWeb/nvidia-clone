import React from 'react'
import {Box} from '@chakra-ui/react'
import {Hero} from './Hero'

interface MainBannerProps {

}

export const MainBanner: React.FC<MainBannerProps> = () => {
        return (<Box>
            <Hero heading='bildhastighet vinner spel' text='nvidia reflex kommer snart' button='mer information' img='./img/hero.jpg' alignToCenter={true} />
        </Box>);
}