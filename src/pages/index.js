import React from 'react'
// import { Link } from 'gatsby'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Deals from '../components/deals'
// import Poster from '../static/assets/poster.png'
import Fade from 'react-reveal/Fade'
const IndexPage = () => (
  <Layout>
    <Hero/>
    {/* <div className="py-5">
      <h1 className="text-center">Auginame</h1>
      <h1 className="text-center">Perdirbame</h1>
      <h1 className="text-center">Parduodame</h1>
    </div>
    <div className="container">
      <img src={Poster} class="w-100" alt="asd"/>
    </div> */}
    <div>
          <div className="py-4" style={{background:'#efefef'}}>
              <div className="col-lg-6 mx-auto">
                <img src="/static/story/heading.svg" class="w-100" alt=""/>
              </div>
          </div>
          <div className="d-lg-flex container py-5">
            <Fade>
              <div className="py-4 mx-auto" style={{maxWidth:300,marginTop:46}}>
                  <img src="/static/story/grow.svg" class="w-100" alt=""/>
              </div>
            </Fade>
            <Fade>
              <div className="py-4 mx-auto" style={{maxWidth:300}}>
                <img src="/static/story/produce.svg" class="w-100" alt=""/>
              </div>
            </Fade>
          </div>
        </div>
        <div style={{ display: 'flex', background:'#fcfcfc'}}>
          <Fade>
            <div className="py-4 mx-auto" style={{maxWidth:500}}>
              <img src="/static/story/sell.svg" class="w-100" alt=""/>
            </div>
          </Fade>
        </div>
  </Layout>
)

export default IndexPage
