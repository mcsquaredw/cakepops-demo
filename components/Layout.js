import Link from 'next/link';
import Head from 'next/head';

import Basket from './Basket';
import Checkout from './Checkout';

const Layout = ({ children, title = "Cheryl's Cake Pops" }) => (
  <div>
    <Head>
      <title>Cheryl's Cake Pops</title>
      <meta name="viewport" content="initial-scale=1.0, width=device.width" />
      <link
        href="https://fonts.googleapis.com/css?family=Lobster"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
    </Head>

    <nav className="navbar navbar-expand-sm fixed-top">
      <button
        className="navbar-toggler btn text-eggplant"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <i className="fa fa-birthday-cake" />
      </button>
      <Link href="/">
        <a className="navbar-brand m-auto">
          <i className="fa fa-birthday-cake d-none d-md-inline" /> Cheryl's Cake
          Pops!
        </a>
      </Link>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav m-auto text-center">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link active">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/order">
              <a className="nav-link">Order</a>
            </Link>
          </li>
        </ul>
      </div>
      <Basket />
      <Checkout />
    </nav>

    {children}

    <footer id="main-footer" className="bg-dark text-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col py-2 text-center">
            Copyright &copy; 2018 - Design by M C Wake for Cheryl's Cake Pops
          </div>
        </div>
      </div>
    </footer>
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    />
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    />
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    />
    <style jsx global>{`
      body {
        background-image: url('static/cakepops.jpg');
        background-attachment: fixed;
        background-size: cover;
      }

      h1,
      h4,
      .navbar a,
      .card-img-overlay,
      footer {
        font-family: 'Lobster', cursive;
        font-size: 2em;
      }

      .btn-grape-on-eggplant {
        color: #94618E;
        background-color: #49274A;
        font-size: 2em;
      }

      .btn-eggplant-on-grape {
        color: #49274A;
        background-color: #94618E;
        font-size: 2em;
      }

      .bg-grape-solid {
        background-color: #94618E;
      }

      .bg-eggplant-solid {
        background-color: #49274A;
      }

      .text-grape {
        color: #94618E;
      }

      .text-eggplant {
        color: #49274A;
      }

      .navbar {
        background-color: #94618E;
      }

      .navbar a {
        color: #49274A;
      }

      .navbar-toggler-icon {
        color: #49274A;
      }

      .dropdown-menu {
        height: 500px;
        overflow-y: scroll;
      }
    `}</style>
  </div>
);

export default Layout;
