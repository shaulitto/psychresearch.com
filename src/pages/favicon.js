import * as React from "react"
import {Container} from 'react-bootstrap'

import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/seo"

const Favicon = () => (
    <Layout>
      <Seo title="Favicon" />
      <Container className="background"><div id="logo">Ψ</div></Container>
    </Layout>
  )
  
  export default Favicon