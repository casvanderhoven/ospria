import React from 'react';

import '../style.css';

export default () => (
  <div className="container max-w-2xl px-4 mx-auto text-gray-900 flex flex-col min-h-screen">
    <p className="my-4">Uh oh, you've reached the limits of our brains...</p>
    <p className="text-sm m-0">
      Anyways, send me a{' '}
      <a href="https://twitter.com/messages/compose?recipient_id=255562982">direct message</a> on
      Twitter or an <a href="mailto:casvanderhoven+ospria@gmail.com">email</a> and we can talk.
    </p>
  </div>
);
