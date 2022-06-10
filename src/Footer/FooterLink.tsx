import React from 'react'
import {Box, Link} from '@chakra-ui/react'

interface FooterLinkProps {
        text: string,
}

export const FooterLink: React.FC<FooterLinkProps> = ({text}) => {
        return (<Box>
                <Link color='#76b900' as='a'>{text}</Link>
        </Box>);
}