import React from "react"
import { Link } from "gatsby"
import Wizard from '../components/Form/Step1'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Form = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Wizard />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default Form
