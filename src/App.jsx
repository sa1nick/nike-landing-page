// import React from 'react'

export default function App() {
  return (
    <div>
      <NavBar />
      <Container />
    </div>
  );
}

function NavBar() {
  return (
    <div className="navbar">
      <Logo />
      <Menu />
      <Button />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img src="./Nike-Logo-500x281.webp" alt="nike-logo" />
    </div>
  );
}

function Menu() {
  return (
    <ul className="nav-menu">
      <li>Menu</li>
      <li>Location</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
}

function Button() {
  return <button className="login-btn">Login</button>;
}

function Container() {
  return (
    <div className="container">
      <div className="text-container">
        <div className="heading-container">
          <h1>Your Feet Deserve the best</h1>
        </div>
        <div className="para-container">
          <p>
            Your Feet Deserve the best and we&apos;re here to help you with our
            shoes. Your Feet Deserve the best and we&apos;re here to help you
            with our shoes.
          </p>
        </div>
        <div className="buttons-grp">
          <button className="btn shop-now">Shop Now</button>
          <button className="btn category">Category</button>
        </div>
        <Socials />
      </div>
      <div className="img-container">
        <img src="./hero-image.png" alt="" />
      </div>
    </div>
  );
}

function Socials() {
  return (
    <div className="social">
      <p>Also Availble On</p>
      <ul>
        <li>
          <img src="./flipkart.png" alt="flipkart-logo" />
        </li>
        <li>
          <img src="./amazon.png" alt="amazon-logo" />
        </li>
      </ul>
    </div>
  );
}
