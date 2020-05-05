import React from 'react';
import styled from 'styled-components';
import ConstructionImage from '../../images/sustainabilit.jpg';


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
              Environmentally Intelligent Building
            </MiniHeading>
            <SectionHeading>
              Sustainability Initiatives
            </SectionHeading>
            <Paragraph>
              Katerra is working to develop and deliver
              sustainable building solutions that are
              scalable to all projects and economically
              viable without adding outsized cost burdens.
            </Paragraph>
            <Button className="rounded">
              Learn More
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
