import React from "react"
//import { Link } from "gatsby"

import "../styles/style.scss"
//import SEO from "../components/seo"

import Header from '../components/header'
import Footer from '../components/footer'
import Banner from "../components/banner"
import IndexBlurb from "../components/index-blurb"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <Footer />
    <IndexBlurb />
  </div>
    // <div class="container">
    //   <ParallaxImage/>
    // </div>
)

export default IndexPage
