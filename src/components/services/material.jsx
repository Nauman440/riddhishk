import React from 'react';
import styled from 'styled-components';
import Material from '../../images/material.jpg';

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
              One-Stop-Shop for Building Materials
            </MiniHeading>
            <SectionHeading>
              Materials & Supply Chain Services
            </SectionHeading>
            <Paragraph>
              Katerra works with a wide variety of
              clients to supply a range of
              structural and finish material
              products, along with a
              robust set of supply chain services.
            </Paragraph>
            <Button className="rounded">
              Katerra Vision
            </Button>
          </div>
        </div>
        <div className="col-md-6">
          <img src={Material} alt=" material " className="img-fluid" />
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Index;
