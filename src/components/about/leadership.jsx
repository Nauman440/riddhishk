import React from 'react';
import styled from 'styled-components';
import TestView from '../../images/leadership.jpg';


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
              Big Thinking + Even Bigger Doing
            </MiniHeading>
            <SectionHeading>
              Katerra Leadership
            </SectionHeading>
            <Paragraph>
              Katerra’s team brings together deep
              AEC knowledge with the experience
              of disrupting and scaling major
              global industries – the right
              combination to pursue this ambitious vision.
            </Paragraph>
            <Button className="rounded">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Index;
