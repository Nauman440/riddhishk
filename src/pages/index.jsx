import React from 'react';
import Layout from '../components/common/layout';
import HeroSection from '../components/home/heroSection';
import ProductSection from '../components/home/productSection';
import SolutionSection from '../components/home/solutionSection';
import CareerSection from '../components/home/careerSection';
import CarbonSection from '../components/home/carbonSection';
import Quote from '../components/home/quote';

const Index = () => (
  <Layout>
    <HeroSection />
    <ProductSection />
    <SolutionSection />
    <CareerSection />
    <hr />
    <CarbonSection />
    <Quote />
  </Layout>
);

export default Index;
