import React from 'react'
import {Text} from '@chakra-ui/react'

interface NavItemProps {
    name: string,
    long?: boolean,
}

export const NavItem: React.FC<NavItemProps> = ({name, long=true}) => {
        return (<>
            <Text color='gray.600' fontWeight={long? 'semibold' : 'normal'} fontSize={long? 'lg' : 'md'} textTransform={long? 'capitalize' : 'uppercase'}>{name}</Text>
        </>);
}