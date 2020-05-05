/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';
import brand from '../../images/brand.png';
import kovas from '../../images/Kova.png';

const Wrapper = styled.section`
  background: #333;
  padding: 120px 5px 60px 5px;
`;

const ImageWraper = styled.img`
  display: block;

`;

const UnorderList = styled.ul`
  list-style: none;
`;

const List = styled.li`
 font-family : ${(props) => props.theme.btn_font};
 color: ${(props) => props.theme.color_h};
 font-size: 18px;
 padding:3px !important;
`;

const MiniHeading = styled.h6`
  font-family : ${(props) => props.theme.btn_font} !important;
  color: #fff;
  // display:inline-block;
  padding-bottom:10px;
`;

const Index = () => (
  <Wrapper>
    <div className="container-fluid">
      <div className="row pb-5 mb-5">
        <div className="col-md-4">
          <ImageWraper
            src={logo}
            className="img-fluid"
          />
        </div>
        <div className="col-md-4">
          <UnorderList>
            <List>Home</List>
            <List>About</List>
            <List>Service</List>
            <List>Projects</List>
            <List>Contact</List>
          </UnorderList>
        </div>

        <div className="col-md-4">
          <MiniHeading>
            Our Brands
          </MiniHeading>
          <ImageWraper
            src={brand}
            className="img-fluid"
          />
          <ImageWraper
            src={kovas}
            className="img-fluid"
          />
        </div>
      </div>
      <hr className="bg-white" />
      <div className="col-md-12 d-flex justify-content-center pt-5">
        <MiniHeading>
          &copy; Kattra 2020
        </MiniHeading>
      </div>
    </div>
  </Wrapper>
);

export default Index;
