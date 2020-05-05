import React from 'react';
import styled from 'styled-components';
import TestView from '../../images/Test_View.jpg';


const Wrapper = styled.section`
  margin: 130px auto;
`;

const MiniHeading = styled.h6`
  
`;

const SectionHeading = styled.h2`

`;

const Paragraph = styled.p`
`;

const Button = styled.button`
`;

const Index = () => (
  <Wrapper>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <img src={TestView} alt="construction" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="w-75 mx-auto">
            <MiniHeading>
              Fully-Integrated Building Services
            </MiniHeading>
            <SectionHeading>
              End-to-End New Build
            </SectionHeading>
            <Paragraph>
              For developers, we provide end-to-end
              products and services for ground-up
              new build projects. This includes
              integrated design, engineering,
              materials, manufacturing, and construction.
            </Paragraph>
            <Button className="rounded">
              LearMore
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Index;
