import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import demoImage1 from '../assets/images/demo-image-01.jpg';
import demoImage2 from '../assets/images/demo-image-02.jpg';
import bgMaster from '../assets/images/bg-masthead.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 type="id" element="tippy" className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5" element="tippy">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="text-white mb-4">Our Methodology: </h1>
              <ul className="left-align">
              <i className="fa fa-cogs fa-2x mb-2 text-white"></i><br/>
                <p className="text-white mb-2 lineup">
                
                  Modern frameworks and technologies.
                </p>
                <i className="fa fa-plus fa-1x mb-2 text-white"></i>
                <p className="text-white mb-2 lineup">
                  Built with attention to mobile UI
                </p>
                <i className="fa fa-arrow-down fa-2x mb-2 text-white"></i>
                <p className="text-white mb-2 lineup">
                  Simple, beautiful, and <strong>functional</strong> websites.
                </p>
                <i class="fa fa-cubes fa-4x text-white"></i>
             </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Application Services</h4>
                <p className="text-black-50 mb-0">
                 From websites to applications, we can leverage a variety of technologies in order to solve real problems that affect your 
                 day-to-day. If you need to track data more accurately, expand your services online, or have anything else we may be able to assist 
                 with, don't hesitate to reach out.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Website Maintenence + Content Management</h4>
                  <p className="mb-0 text-white-50">
                    From CMS creation and management to blog posts and SEO, we can work with you to streamline and modernize your online presence. 
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Logo and Custom Design Work</h4>
                  <p className="mb-0 text-white-50">
                    Let us know what you're looking for and one of our amazing graphic designers will work with you to make it real. 
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Subscribe />

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
