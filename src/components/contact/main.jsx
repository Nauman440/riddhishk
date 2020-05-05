import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin:130px 5px;
`;

const MainHeading = styled.h2`
font-family: "Publico Banner Web", serif !important;
font-size: 64px !important;
`;

const Paragraph = styled.p`
line-height:32px !important;
font-size:25px !important;
`;

const Index = () => (
  <Wrapper>
    <div className="container">
      <div className="row">
        <div className="col-md-4 ">
          <MainHeading className="mt-5">
            Contact Us
          </MainHeading>
        </div>
        <div className="col-md-8">
          <Paragraph>
            Please reach out to get in touch
            with someone at Katerra or learn
            more about our products and
            services. Scroll below for
            local office contact information.
          </Paragraph>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Index;
