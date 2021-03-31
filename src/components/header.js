/** @jsx jsx */
import { jsx } from 'theme-ui'

const Header = ({children, className}) => (
  <header 
    className={"site-header" + className}
    sx={{
      bg: 'primary'
    }}
  >
    {children}
  </header>
)

export default Header