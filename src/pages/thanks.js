import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiCheckboxCircleLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <SEO title="Thank you"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <RiCheckboxCircleLine style={{
        fontSize: "128px",
        color: "var(--primary-color)"
      }}/>
      <h1>Dostaliśmy Twoją wiadomość!</h1>
      <p>Dziękujemy za wysłanie wiadomośći. Odpowiemy tak szybko jak to będzie możliwe.</p>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Wróć do strony głównej</Link>
    </div>

  </Layout>
)

export default Thanks