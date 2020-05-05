import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 100px auto;
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
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <MiniHeading>
            Integration + Innovation
          </MiniHeading>
          <SectionHeading>
            Katerra Products
          </SectionHeading>
          <Paragraph>
            Explore Katerra’s unique portfolio of products,
            focused on optimizing building structures and systems,
            creating beautiful interior spaces, and developing smarter building operations.
          </Paragraph>
          <Button className="rounded">
            Explore Products
          </Button>
        </div>
        <div className="col-md-6">
          <video width="100%" height="100%" autoPlay loop>
            <source src="https://assets2.katerra.com/wp-content/uploads/2019/08/07194512/Kattera-Dot-Com_v4.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Index;
