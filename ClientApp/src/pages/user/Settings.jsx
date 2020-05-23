import React from "react";
import { DefaultLayout } from "@/layouts";

export default function Settings() {
  return (
    <DefaultLayout>
      {" "}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
              <div className="card card-primary">
                <div className="card-header">
                  <h4>Reset Password</h4>
                </div>
                <div className="card-body">
                  <form method="POST">
                    <div className="form-group">
                      <label htmlFor="current-password">Current Password</label>
                      <input
                        id="current-password"
                        type="password"
                        className="form-control pwstrength"
                        data-indicator="pwindicator"
                        name="password"
                        tabIndex={2}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">New Password</label>
                      <input
                        id="password"
                        type="password"
                        className="form-control pwstrength"
                        data-indicator="pwindicator"
                        name="password"
                        tabIndex={2}
                        required
                      />
                      <div id="pwindicator" className="pwindicator">
                        <div className="bar" />
                        <div className="label" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password-confirm">Confirm Password</label>
                      <input
                        id="password-confirm"
                        type="password"
                        className="form-control"
                        name="confirm-password"
                        tabIndex={2}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block"
                        tabIndex={4}
                      >
                        Reset Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
