import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

const Wraper = styled.section`

`;

const SectionHeading = styled.h2`

`;

const Label = styled.label`
  width: 100% !important;
`;

const Input = styled.input`
   padding:10px !important;
   border:2px solid #ccc !important;
`;


const Index = () => {
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    onSubmit(values) {
      console.log(values);
    },
  });

  return (

    <Wraper>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SectionHeading>
              Questions? Drop us a line:
            </SectionHeading>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form
              className="my-5"
              name="contact"
              method="post"
            // data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* <input type="hidden" name="bot-field" />
            <input type="hidden" name="contact" value="contact" /> */}
              <div className="form-row">
                <div className="form-group col-md-6">
                  <Label htmlFor="InputFirstName">
                    First Name
                    <Input
                      type="text"
                      className="form-control"
                      id="FN"
                      name="firstName"
                      placeholder="First Name"
                      onChange={handleChange}
                    />
                  </Label>
                </div>
                <div className="form-group col-md-6">
                  <Label htmlFor="InputLastName">
                    Last Name
                    <Input
                      type="text"
                      className="form-control"
                      id="LN"
                      name="lastname"
                      placeholder="Last Name"
                      onChange={handleChange}
                    />
                  </Label>
                </div>
                <div className="form-group col-md-6">
                  <Label htmlFor="inputEmail4">
                    Email
                    <Input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                  </Label>
                </div>
                <div className="form-group col-md-6">
                  <Label htmlFor="IP">
                    Phone
                    <Input type="phone" className="form-control" id="IP" placeholder="Phone" />
                  </Label>
                </div>
              </div>
              <div className="form-group">
                <Label htmlFor="inputAddress">
                  Country
                  <Input type="text" className="form-control" id="inputAddress" placeholder="Country" />
                </Label>
              </div>
              <div className="form-group">
                <Label htmlFor="inputAddress2">
                  City
                  <Input type="text" className="form-control" id="inputAddress2" placeholder="City" />
                </Label>
              </div>

              <div className="form-group">
                <Label htmlFor="comment">
                  Comment:
                  <textarea className="form-control" rows="5" id="comment" />
                </Label>
              </div>

              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </Wraper>
  );
};
export default Index;
