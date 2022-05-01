/** @jsx jsx */
import { jsx } from 'theme-ui'
import * as React from "react";

const Header: React.FC<React.PropsWithChildren<any>> = ({children}) => (
  <header 
    className={"site-header"}
    sx={{
      bg: 'primary'
    }}
  >
    {children}
  </header>
)

export default Header
