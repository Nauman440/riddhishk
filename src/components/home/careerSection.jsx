import React from 'react';
import styled from 'styled-components';
import ConstructionImage from '../../images/construction-site-op-1.jpg';


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
        <div className="col-md-6 d-flex align-items-center mb-5">
          <div className="w-75 mx-auto">
            <MiniHeading>
              Join the Movement
            </MiniHeading>
            <SectionHeading>
              Your Career at Katerra
            </SectionHeading>
            <Paragraph>
              Want to help transform the world’s largest industry?
              We’re looking for the best of the best.
            </Paragraph>
            <Button className="rounded">
              Careers
            </Button>
          </div>
        </div>
        <div className="col-md-6">
          <img src={ConstructionImage} alt="construction" className="img-fluid" />
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Index;
