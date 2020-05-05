import React from 'react';
import styled from 'styled-components';
import ConstructionImage from '../../images/Catalyst-crop.jpg';


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
          <div className="w-75 mx-auto">
            <MiniHeading>
              Getting to Zero Carbon
            </MiniHeading>
            <SectionHeading>
              Katerra Carbon Life-Cycle Analysis
            </SectionHeading>
            <Paragraph>
              We are proud to release a Life-Cycle Analysis
              (LCA) of our CLT manufacturing process and
              Catalyst – our first turnkey mass timber
              project and the first building to feature
              CLT produced in Katerra’s Spokane Valley CLT factory.
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
