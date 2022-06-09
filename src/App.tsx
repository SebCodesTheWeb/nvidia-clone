import * as React from "react"
import {ChakraProvider,theme,} from "@chakra-ui/react"
import {MainNav} from './Nav/MainNav'
import {MainBanner} from './Banners/MainBanner'

export const App = () => (
  <ChakraProvider theme={theme}>
    <MainNav />
    <MainBanner />
  </ChakraProvider>
)
