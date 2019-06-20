import React from "react"
import { Link } from "gatsby"
import Wizard from '../components/Form/WizardForm'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Form = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Here's the start of the enquiry</p>
    <Wizard />
    <Link to="/form-completed/">Go to form completed</Link>
  </Layout>
)

export default Form
