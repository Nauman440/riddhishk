import React from 'react';
import styled from 'styled-components';
import ConstructionImage from '../../images/partners.jpg';


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
        <div className="col-md-6 d-flex align-items-center">
          <div className="w-75 mx-auto mb-5">
            <MiniHeading>
              Meet Our Partners
            </MiniHeading>
            <SectionHeading>
              Katerra Affiliate Companies
            </SectionHeading>
            <Paragraph>
              Katerra’s acquisitions, mergers and other
              strategic transactions are helping
              to scale our core competencies
              and executional capabilities.
            </Paragraph>
            <Button className="rounded">
              Explore
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
