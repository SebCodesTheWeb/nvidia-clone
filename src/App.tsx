import * as React from "react"
import {ChakraProvider,theme, Box, HStack} from "@chakra-ui/react"
import {MainNav} from './Nav/MainNav'
import {MainBanner} from './Banners/MainBanner'
import {MainSection} from './MainContent/MainSection'
import {MainFooter} from './Footer/MainFooter'

export const App = () => (
  <ChakraProvider theme={theme}>
    <HStack w='full' h='full' justify='center'>
      <Box w='full' maxW='1920px' h='100vh' bgColor='black'>
        <MainNav />
        <MainBanner />
        <MainSection />
        <MainFooter />
      </Box>
    </HStack>
  </ChakraProvider>
)
