import React from 'react';
import styled from 'styled-components';
// import img from '../../images/homepage_intro.jpg';
import { Title } from '../../globalStyle';

const Wrapper = styled.section`
background: linear-gradient(-90deg,transparent,rgba(0,0,0,.86));
  background-position:fixed;
  background-size:cover;
  height:100vh;
`;


const Index = () => (

  <Wrapper className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="pl-2">
            <Title>
              Learn more about how we are breaking new ground in the building industry.
            </Title>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Index;
