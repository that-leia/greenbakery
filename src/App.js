import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SweetsImg from "../img/sweets.jpg";
import BreadImg from "../img/bread1.jpg";
import CookieImg from "../img/cookies1.jpg";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <html lang="en">
          <head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              rel="stylesheet"
              href="./node_modules/bootstrap/dist/css/bootstrap.min.css"
            />
            <link
              rel="stylesheet"
              href="./node_modules/font-awesome/css/font-awesome.min.css"
            />
            <link
              rel="stylesheet"
              href="./node_modules/bootstrap-social/bootstrap-social.css"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Lobster|Open+Sans"
            />
            <link rel="stylesheet" href="./css/styles.css" />
            <title>Green Bakery</title>
          </head>
          <body>
            <header className="jumbotron jumbotron-fluid">
              <div className="container">
                <div className="row row-content align-items-center">
                  <div className="col-4 col-sm-3 col-md-2 align-self-center"></div>
                  <div className="col">
                    <h1>Green Bakery</h1>
                    <h2>clean and healthy eating</h2>
                  </div>
                </div>
              </div>
            </header>
            <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
              <div className="container">
                <button
                  className="navbar-toggler ml-auto"
                  type="button"
                  data-toggle="collapse"
                  data-target="#Navbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="Navbar">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        <i className="fa fa-home fa-lg"></i>Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="aboutus-green.html">
                        <i className="fa fa-info fa-lg"></i>About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-list fa-lg"></i>Sites
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contactus-green.html">
                        <i className="fa fa-address-card fa-lg"></i>Contact
                      </a>
                    </li>
                  </ul>
                  <span className="navbar-text ml-auto"></span>
                </div>
              </div>
            </nav>
            <div className="container">
              <div className="row row-content">
                <div className="col-md-8 mx-auto">
                  <div
                    id="homeCarousel"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#homeCarousel"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li data-target="#homeCarousel" data-slide-to="1"></li>
                      <li data-target="#homeCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          className="d-block w-100"
                          src={SweetsImg}
                          alt="Bakery Sweets"
                        />
                        <div className="carousel-caption">
                          <h3>Check out our variety of sweets.</h3>
                          <p className="d-none d-sm-block"></p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          src={BreadImg}
                          alt="Stack of bread"
                        />
                        <div className="carousel-caption">
                          <h3>Fresh homemade breads and pastries.</h3>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          src={CookieImg}
                          alt="Cookies"
                        />
                        <div className="carousel-caption">
                          <h3>Many cookies made fresh daily!</h3>
                        </div>
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#homeCarousel"
                      role="button"
                      data-slide="prev"
                    >
                      <span className="carousel-control-prev-icon"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#homeCarousel"
                      role="button"
                      data-slide="next"
                    >
                      <span className="carousel-control-next-icon"></span>
                      <span className="sr-only">Next</span>
                    </a>
                    <button
                      className="btn btn-danger btn-sm"
                      id="carouselButton"
                    >
                      <i className="fa fa-pause"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="row row-content align-items-center">
                <div className="col-sm-4 order-sm-last col-md-3">
                  <h2 className="text-sm-right">Discover & Review</h2>
                </div>
                <div className="col">
                  <div className="media">
                    <img
                      className="d-flex mr-3 img-thumbnail"
                      src="img/sweets2-thumb.jpg"
                      alt="Cupcakes"
                    />
                    <div className="media-body align-self-center">
                      <h3>Our Menu</h3>
                      <p className="d-none d-sm-block">
                        Check out our clean and healthy eating in person!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-content align-items-center">
                <div className="col-sm-4 order-sm-last col-md-3">
                  <h2 className="text-sm-right">Our Community Partners</h2>
                </div>
                <div className="col">
                  <div className="media">
                    <img
                      className="d-flex mr-3 img-thumbnail"
                      src="img/museum.jpg"
                      alt="Nature's Hand Museum"
                    />
                    <div className="media-body align-self-center">
                      <h3>Nature's Hand Museum</h3>
                      <p className="d-none d-sm-block">
                        Nature's Hand Museum is a fun, interactive museum for
                        families to enjoy learning about Mother Earth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="site-footer">
              <div className="container">
                <div className="row row-content align-items-center">
                  <div className="col-4 col-sm-2 offset-1">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="aboutus-green.html">About</a>
                      </li>
                      <li>
                        <a href="#">Sites</a>
                      </li>
                      <li>
                        <a href="contactus-green.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-sm-5 text-center">
                    <h5>Social</h5>
                    <a
                      className="btn btn-social-icon btn-instagram"
                      href="http://instagram.com/"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a
                      className="btn btn-social-icon btn-facebook"
                      href="http://facebook.com/"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a
                      className="btn btn-social-icon btn-twitter"
                      href="http://twitter.com/"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-social-icon btn-google"
                      href="http://youtube.com/"
                    >
                      <i className="fa fa-youtube"></i>
                    </a>
                  </div>
                  <div className="col-sm-4 text-center">
                    <a
                      role="button"
                      className="btn btn-link"
                      href="tel:+12065551234"
                    >
                      <i className="fa fa-phone"></i> 1-123-456-1234
                    </a>
                    <br />
                    <a
                      role="button"
                      className="btn btn-link"
                      href="mailto:greenbakery@gmail.com"
                    >
                      <i className="fa fa-envelope-o"></i> greenbakery@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </body>
        </html>
      </div>
    );
  }
}

export default App;
