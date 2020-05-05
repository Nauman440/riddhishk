import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
 background: ${(props) => props.theme.line_color};
 padding:100px 5px;
`;

const Blockquote = styled.h1`
  font-family: ${(props) => props.theme.h_font};
  font-size:56px;
  color: #fff;
// &:before {
//   content: "❝";
//   font-size:150px;
//   height:150px;
//   opacity:0.27;
// }

@media (max-width: 955px) {
  width:75% !important;
  font-size:48px !important;
}

@media (max-width: 750px) {
  width: 100% !important;
  font-size:36px !important;
  line-height:45px !important;
}
`;

const SubHeading = styled.h5`
   color: #fff;
   font-size:18px;

`;

const Index = () => (
  <Wrapper>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Blockquote className="w-75  mx-auto">
            We can improve on time and costs, create a
            new generation of skilled jobs, and
            modernize an industry that’s
            important to our social fabric and the planet.
          </Blockquote>
        </div>
        <div className="col-md-12 w-75 mt-5">
          <div className="ceo-statement d-flex justify-content-end w-75">
            <img
              src="https://www.katerra.com/wp-content/themes/katerra/dist/svg/katerra-logomark-white.svg"

              alt="logo"
              width="6%"
              height="6%"
              className="align-self-center mr-2"
            />
            <div>
              <SubHeading>Michael Marks,</SubHeading>
              <SubHeading>Katerra Co-Founder</SubHeading>
              <SubHeading>+ CEO</SubHeading>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Index;
