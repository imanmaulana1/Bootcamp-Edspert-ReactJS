import React from "react";

const Footer = () => {
  return (
    <footer className="w-100 py-4 flex-shrink-0">
      <div className="container py-4">
        <div className="row gy-4 gx-5">
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white">Assassins Creed</h5>
            <p className="small text-muted mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            <p className="small text-muted mb-0"> &#169; Copyrights. All rights reserved. </p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3">About</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-secondary custom-a">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#feature" className="text-decoration-none text-secondary">
                  Feature
                </a>
              </li>
              <li className="mb-2">
                <a href="#gallery" className="text-decoration-none text-secondary">
                  Gallery
                </a>
              </li>
              <li className="mb-2">
                <a href="#gallery" className="text-decoration-none text-secondary">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-6 col-md-6">
            <h5 className="text-white mb-3">Newsletter</h5>
            <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            <form action="#">
              <div className="input-group mb-3">
                <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-secondary" id="button-addon2" type="button">
                  <i className="fas fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
