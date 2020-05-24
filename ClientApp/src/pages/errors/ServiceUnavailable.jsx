import React from "react";
import { Link } from "react-router-dom";

export default function ServiceUnavailable() {
  // Service Unavailable 503
  return (
    <section className="section">
      <div className="container mt-5">
        <div className="page-error">
          <div className="page-inner">
            <h1>503</h1>
            <div className="page-description">
              Whoopps, something went wrong.
            </div>
            <div className="page-search">
              <form>
                <div className="form-group floating-addon floating-addon-not-append">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fas fa-search" />
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary btn-lg">Search</button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="mt-3">
                <Link to="/">Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
