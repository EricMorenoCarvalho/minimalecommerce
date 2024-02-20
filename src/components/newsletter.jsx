import React from 'react';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <p className='title'>Subscribe to our newsletter</p>
      <p className='text'>Stay informed about the latest trends and exclusive offers!</p>
      <form>
        <input type="email" name="email" className='button-input' placeholder="your@email.com" />
        <p /><button className="button text-small">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
