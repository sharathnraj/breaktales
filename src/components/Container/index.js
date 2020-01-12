import React from 'react'
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import customTheme from 'theme'

export default ({ children }) => (
  <ThemeProvider theme={customTheme}>
    {/* <CSSReset /> */}
    <div style={{ width: "100%", margin: "0 auto", position: "relative" }}>{children}</div>
  </ThemeProvider>
)
