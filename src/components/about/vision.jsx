import React from 'react';
import styled from 'styled-components';


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
              Smarter Building, Better Living
            </MiniHeading>
            <SectionHeading>
              Our Vision
            </SectionHeading>
            <Paragraph>
              Katerra is putting modern technology to work at all
              levels of building design and construction to help
              address some of the industry’s most entrenched challenges.
            </Paragraph>
            <Paragraph>
              Learn more about our mission to transform
              construction through technology – every
              process and every product.
            </Paragraph>
            <Button className="rounded">
              Katerra Vision
            </Button>
          </div>
        </div>
        <div className="col-md-6">
          <iframe
            title="vimeo video"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            src="https://player.vimeo.com/video/351522523?dnt=1&app_id=122963"
          />
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Index;
