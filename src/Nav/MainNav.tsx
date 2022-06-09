import React from 'react'
import {Image, HStack, Icon} from '@chakra-ui/react'
import {NavItem} from './NavItem'
import {FaShoppingCart, FaSearch, FaRegUserCircle} from "react-icons/fa"

interface MainNavProps {

}

export const MainNav: React.FC<MainNavProps> = () => {
        return (<>
            <HStack justify='space-around' bgColor='white'>
                <HStack spacing={5}>
                    <Image src='./img/logo_small_green.svg' />
                    <NavItem name='produkter' />
                    <NavItem name='lösningar' />
                    <NavItem name='branscher' />
                    <NavItem name='för dig' />
                </HStack>
                <HStack spacing={5}>
                    <NavItem name='drivrutiner' long={false} />
                    <NavItem name='support' long={false}/>
                    <Icon as={FaSearch}/>
                    <Icon as={FaShoppingCart} />
                    <Icon as={FaRegUserCircle} />
                </HStack>
            </HStack>
        </>);
}
