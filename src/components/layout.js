import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Nav from "../components/nav";
import Footer from '../components/footer'
import Content from '../components/content'
import '../static/scss/style.scss';
// import '../static/assets/fonts/Alright_Sans/AlrightSans-Regular-v3.otf'
// import '../static/assets/fonts/Alright_Sans/AlrightSans-Medium-v3.otf'
// import '../static/assets/fonts/Alright_Sans/AlrightSans-Bold-v3.otf'
// import '../static/assets/fonts/PFDinText/PFDINTEXTPRO-MEDIUM.ttf'
import BG from '../static/assets/bg.svg'
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous"/>
        <Nav/>
        <Content>
          {children}
        </Content>
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
