import React from "react"
import { Link } from "gatsby"
import Wizard from '../components/Form/WizardForm'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Form = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>You need to build the form completion. Check our the data structure in firestore database.</p>
    <p>Now go build something great.</p>
    <Wizard />
    <Link to="/form-enquiries/">You can refer to the above example for enquiries</Link>
  </Layout>
)

export default Form
