import React from 'react';
import Layout from '../components/common/layout';
import HeroSection from '../components/about/main';
import VisionSection from '../components/about/vision';
import LeaderShip from '../components/about/leadership';
import Sustainability from '../components/about/sustainability';
import Affordiability from '../components/about/affordiability';
import Partners from '../components/about/partners';
import Explore from '../components/about/explore';

const Index = () => (
  <Layout>
    <HeroSection />
    <VisionSection />
    <LeaderShip />
    <Sustainability />
    <Affordiability />
    <Partners />
    <hr />
    <Explore />
  </Layout>
);

export default Index;
