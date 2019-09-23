import React from 'react';
import { Link } from 'react-router-dom';
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to Busha React</h1>
      <div className="links">
        <Link to="/balance">Go to Balance Page</Link>
        <Link to="/transfer">Go to Transfer Page</Link>
      </div>
    </div>
  )
}
