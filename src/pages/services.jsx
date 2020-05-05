import React from 'react';
import Layout from '../components/common/layout';
import HeroSection from '../components/services/main';
import MaterialSection from '../components/services/material';
import FIBSectiob from '../components/services/fibSection';
// import Sustainability from '../components/services/sustainability';
import Renovation from '../components/services/renovation';
import GetTouch from '../components/services/explore';

const Index = () => (
  <Layout>
    <HeroSection />
    <FIBSectiob />
    <MaterialSection />
    <Renovation />
    {/* <Sustainability /> */}
    <hr />
    <GetTouch />
  </Layout>
);

export default Index;
