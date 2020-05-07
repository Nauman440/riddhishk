import React from 'react';

const Index = () => (
  <form
    name="contact"
    method="post"
    action="/success"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <div>
      <label htmlFor="name">
        Name
        <input type="text" name="name" id="name" />
      </label>
    </div>
    <div>
      <label htmlFor="email">
        Email
        <input type="text" name="email" id="email" />
      </label>
    </div>
    <div>
      <label htmlFor="message">
        Message
        <textarea name="message" id="message" rows="6" required />
      </label>
    </div>
    <div>
      <input type="submit" value="Drop a line" />
      <input type="reset" value="Eraser" />
    </div>
  </form>
);

export default Index;
