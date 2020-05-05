import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
margin: 130px auto;
`;

const SectionHeading = styled.h2`
  
`;

const Button = styled.button`
`;

const Index = () => (
  <Wrapper>
    <div className="container">
      <div className="row ">
        <div className="col-md-12">
          <SectionHeading className="d-block mb-5">
            Get in Touch
          </SectionHeading>
          <Button className="rounded">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Index;
