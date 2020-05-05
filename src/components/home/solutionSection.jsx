import React from 'react';
import styled from 'styled-components';
import BuildImg from '../../images/new-build.png';
import MaterialSales from '../../images/material-sales.png';
import Renovation from '../../images/rennovations.png';
import PS from '../../images/public-services.png';

const Wrapper = styled.section`
 margin-top:50px !important;
 background-color: #333;
 padding:45px 5px;
`;

const SectionHeading = styled.h2`
  color: white;
  font-family: ${(props) => props.theme.btn_font} !important;

  &:after {
    margin: 15px auto !important;
  }
`;

const Paragraph = styled.p`
   color: #fff;
`;

const SubHeadiing = styled.h3`
  font-family: ${(props) => props.theme.btn_font} !important;
  font-size: 18px !important;
`;

const SubParagraph = styled.p`

`;

const Button = styled.button`
 border: 2px solid #ccc !important;
 color: #ccc !important;
`;

const Index = () => (
  <Wrapper>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <SectionHeading className="text-center mb-5" center>
            Solutions Across the Building Life Cycle
          </SectionHeading>
          <Paragraph className="w-75 mx-auto text-center my-5">
            As a full-service partner for developers, specifiers, and builders,
            Katerra can provide every product and service needed to deliver
            the highest quality building projects.
          </Paragraph>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-3">
          <img src={BuildImg} className="img-fluid mx-auto d-block" alt="icon" />
          <SubHeadiing className="text-white text-center mt-3">
            End-to-End New Build
          </SubHeadiing>
          <SubParagraph className="text-center text-white">
            Turnkey delivery of every product and service necessary to
            design and build the highest quality buildings.
          </SubParagraph>
        </div>
        <div className="col-md-3">
          <img src={MaterialSales} className="img-fluid mx-auto d-block" alt="icon" />
          <SubHeadiing className="text-white text-center mt-3">
            End-to-End New Build
          </SubHeadiing>
          <SubParagraph className="text-center text-white">
            Turnkey delivery of every product and service necessary to
            design and build the highest quality buildings.
          </SubParagraph>
        </div>
        <div className="col-md-3">
          <img src={Renovation} className="img-fluid mx-auto d-block" alt="icon" />
          <SubHeadiing className="text-white text-center mt-3">
            End-to-End New Build
          </SubHeadiing>
          <SubParagraph className="text-center text-white">
            Turnkey delivery of every product and service necessary to
            design and build the highest quality buildings.
          </SubParagraph>
        </div>
        <div className="col-md-3">
          <img src={PS} className="img-fluid mx-auto d-block" alt="icon" />
          <SubHeadiing className="text-white text-center mt-3">
            End-to-End New Build
          </SubHeadiing>
          <SubParagraph className="text-center text-white">
            Turnkey delivery of every product and service necessary to
            design and build the highest quality buildings.
          </SubParagraph>
        </div>

      </div>

      <div className="row mt-5">
        <div className="col-md-12 d-flex justify-content-center mt-5">
          <Button>
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Index;
