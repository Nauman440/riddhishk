import React from 'react';
import styled from 'styled-components';
import backimg from '../../images/backimg.jpg';
import kattera from '../../images/kattera.jpg';
import service from '../../images/service.png';


const Wrapper = styled.section`
margin: 130px auto;
`;

const ImageWrapper = styled.div`
 width: 100%;
 overflow:hidden;
`;
const Image = styled.img`

  transition: transform .5s ease;

 &:hover {
   transform: scale(1.2);
 }
`;

const SubHeading = styled.h5`
 font-family: ${(props) => props.theme.btn_font};
 font-size: 17px;
 line-height: 11px;
 
 color: #333;
 border-bottom: 1px solid #333
`;

const Index = () => (
  <Wrapper>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <ImageWrapper>
            <Image src={backimg} alt="construction" className="img-fluid" />
          </ImageWrapper>
          <SubHeading className="py-3 d-inline-block">
            Leadership
            {' '}
            <i className="fa fa-long-arrow-right" aria-hidden="true" />
          </SubHeading>
        </div>
        <div className="col-md-4">
          <ImageWrapper>
            <Image src={kattera} alt="construction" className="img-fluid" />
          </ImageWrapper>
          <SubHeading className="py-3 d-inline-block">
            Products
            {' '}
            <i className="fa fa-long-arrow-right" aria-hidden="true" />
          </SubHeading>
        </div>

        <div className="col-md-4">
          <ImageWrapper>
            <Image src={service} alt="construction" className="img-fluid" />
          </ImageWrapper>
          <SubHeading className="py-3 d-inline-block">
            Services
            {' '}
            <i className="fa fa-long-arrow-right" aria-hidden="true" />
          </SubHeading>
        </div>

      </div>
    </div>
  </Wrapper>
);

export default Index;
