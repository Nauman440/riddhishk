import React from 'react';
import styled from 'styled-components';
import ConstructionImage from '../../images/affordiability.jpg';


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
          <img src={ConstructionImage} alt="construction" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="w-75 mx-auto mb-5">
            <MiniHeading>
              Innovative Solutions for Lasting Change
            </MiniHeading>
            <SectionHeading>
              Housing Affordability
            </SectionHeading>
            <Paragraph>
              Katerra is uniquely positioned to impact a
              wide range of market sectors and building
              asset types, delivering a new generation
              of high-quality affordable housing.
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
