import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <p>this is the second page</p>
      <Link to="/balance">Go to page 1</Link>
      <Link to="/transfer">Go to page 2</Link>
    </div>
  )
}
