/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { useEffect, useState } from 'react'

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation";

import "../assets/scss/style.scss"
import Footer from "./footer";
// import Theme from "../components/theme"


const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      siteTitle: title
    }
  }
}
`

const Layout = ({children, className, props}) => {

    const [classListState, setClassListState] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            if (scrolled > 0) {
                setClassListState(' site-header-scrolled')
            } else if (scrolled === 0) {
                setClassListState("")
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [classListState]);

  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata


  return (
    <div className="primary-container">
      <Header className={classListState}>
        <Logo title={siteTitle} />
        <Navigation/>
        {/* <div sx={layoutStyle.theme}>
          <Theme/>
        </div> */}
      </Header>
      <main className={"container " + className}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout

// const layoutStyle = {
//   theme: {
//     display:["none", "none", "none", "block"],
//   }
// }