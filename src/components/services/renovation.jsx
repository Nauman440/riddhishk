import React from 'react';
import styled from 'styled-components';
import renovation from '../../images/renovation.jpg';


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
          <img src={renovation} alt="construction" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="w-75 mx-auto">
            <MiniHeading>
              Full-Service National Renovations
            </MiniHeading>
            <SectionHeading>
              Renovations Services
            </SectionHeading>
            <Paragraph>
              For property and business owners,
              Katerra provides fully-integrated
              renovation services for multi-family
              market rates, affordable,
              commercial and retail markets.
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
