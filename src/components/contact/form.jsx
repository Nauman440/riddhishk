import React from 'react';

const Index = () => (
  <form name="contact" method="POST" data-netlify="true">
    <p>
      <label htmlFor="firstname">
        Your Name:
        <input type="text" name="name" />
      </label>
    </p>
    <p>
      <label htmlFor="email">
        Your Email:
        <input type="email" name="email" />
      </label>
    </p>
    <p>
      <label htmlFor="firstname">
        Your Role:
        <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select>
      </label>
    </p>
    <p>
      <label htmlFor="firstname">
        Message:
        <textarea name="message" />
      </label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
);

export default Index;