import React from 'react';
import styled from 'styled-components';
import img from '../../images/homepage_intro.jpg';
import { Title } from '../../globalStyle';

const Wrapper = styled.section`
  background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${img});
  background-position:fixed;
  background-size:cover;
  height:100vh;
`;

const Button = styled.button`
  background-color: ;
//   font-family: ${(props) => props.theme.btn_font};
  font-size: 16px !important;
  border: 1px solid ${(props) => props.theme.color_h};
  transition: color 0.25s ease;

  &:hover {
    color:white;
  }

  &:after {
    position: absolute;
    content: '';
    top:0;
    left: 0;
    width: 0;
    height: 100%;
    color:'white';
    background-color: red;
    transform-origin:left;
    transition:width 0.25s ease;
    z-index:-1;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Index = () => (

  <Wrapper className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="pl-2">
            <Title>
              Transforming construction through technology – every process and every product.
            </Title>
            <Button className="px-3 py-2 rounded">
              Play Video
              <i className="fa fa-play ml-2" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Index;
