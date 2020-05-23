import React from "react";
import { DefaultLayout } from "@/layouts";

import "@/assets/sass/author.scss";
import user from "@/assets/img/user.png";

export default function Profile() {
  return (
    <DefaultLayout>
      <section className="section">
        <div className="section-body">
          <div className="row mt-sm-4">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card author-box">
                <div className="card-body">
                  <div className="author-box-center">
                    <img
                      alt="image"
                      src={user}
                      className="rounded-circle author-box-picture"
                    />
                    <div className="clearfix" />
                    <div className="author-box-name">
                      <a href="#">Sarah Smith</a>
                    </div>
                    <div className="author-box-job">Web Developer</div>
                  </div>
                  <div className="text-center">
                    <div className="author-box-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur voluptatum alias molestias minus quod
                        dignissimos.
                      </p>
                    </div>
                    <div className="mb-2 mt-3">
                      <div className="text-small font-weight-bold">
                        Follow Hasan On
                      </div>
                    </div>
                    <a
                      href="#"
                      className="btn btn-social-icon mr-1 btn-facebook"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-social-icon mr-1 btn-twitter"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#" className="btn btn-social-icon mr-1 btn-github">
                      <i className="fab fa-github" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-social-icon mr-1 btn-instagram"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <div className="w-100 d-sm-none" />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4>Personal Details</h4>
                </div>
                <div className="card-body">
                  <div className="py-4">
                    <p className="clearfix">
                      <span className="float-left">Birthday</span>
                      <span className="float-right text-muted">30-05-1998</span>
                    </p>
                    <p className="clearfix">
                      <span className="float-left">Phone</span>
                      <span className="float-right text-muted">
                        (0123)123456789
                      </span>
                    </p>
                    <p className="clearfix">
                      <span className="float-left">Mail</span>
                      <span className="float-right text-muted">
                        test@example.com
                      </span>
                    </p>
                    <p className="clearfix">
                      <span className="float-left">Facebook</span>
                      <span className="float-right text-muted">
                        <a href="#">John Deo</a>
                      </span>
                    </p>
                    <p className="clearfix">
                      <span className="float-left">Twitter</span>
                      <span className="float-right text-muted">
                        <a href="#">@johndeo</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4>Skills</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled user-progress list-unstyled-border list-unstyled-noborder">
                    <li className="media">
                      <div className="media-body">
                        <div className="media-title">Java</div>
                      </div>
                      <div className="media-progressbar p-t-10">
                        <div
                          className="progress"
                          data-height={6}
                          style={{ height: "6px" }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            data-width="70%"
                            style={{ width: "70%" }}
                          />
                        </div>
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-body">
                        <div className="media-title">Web Design</div>
                      </div>
                      <div className="media-progressbar p-t-10">
                        <div
                          className="progress"
                          data-height={6}
                          style={{ height: "6px" }}
                        >
                          <div
                            className="progress-bar bg-warning"
                            data-width="80%"
                            style={{ width: "80%" }}
                          />
                        </div>
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-body">
                        <div className="media-title">Photoshop</div>
                      </div>
                      <div className="media-progressbar p-t-10">
                        <div
                          className="progress"
                          data-height={6}
                          style={{ height: "6px" }}
                        >
                          <div
                            className="progress-bar bg-green"
                            data-width="48%"
                            style={{ width: "48%" }}
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-8">
              <div className="card">
                <div className="padding-20">
                  <ul className="nav nav-tabs" id="myTab2" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="home-tab2"
                        data-toggle="tab"
                        href="#about"
                        role="tab"
                        aria-selected="false"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="profile-tab2"
                        data-toggle="tab"
                        href="#settings"
                        role="tab"
                        aria-selected="true"
                      >
                        Setting
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content tab-bordered" id="myTab3Content">
                    <div
                      className="tab-pane fade"
                      id="about"
                      role="tabpanel"
                      aria-labelledby="home-tab2"
                    >
                      <div className="row">
                        <div className="col-md-3 col-6 b-r">
                          <strong>Full Name</strong>
                          <br />
                          <p className="text-muted">Emily Smith</p>
                        </div>
                        <div className="col-md-3 col-6 b-r">
                          <strong>Mobile</strong>
                          <br />
                          <p className="text-muted">(123) 456 7890</p>
                        </div>
                        <div className="col-md-3 col-6 b-r">
                          <strong>Email</strong>
                          <br />
                          <p className="text-muted">johndeo@example.com</p>
                        </div>
                        <div className="col-md-3 col-6">
                          <strong>Location</strong>
                          <br />
                          <p className="text-muted">India</p>
                        </div>
                      </div>
                      <p className="m-t-30">
                        Completed my graduation in Arts from the well known and
                        renowned institution of India – SARDAR PATEL ARTS
                        COLLEGE, BARODA in 2000-01, which was affiliated to M.S.
                        University. I ranker in University exams from the same
                        university from 1996-01.
                      </p>
                      <p>
                        Worked as Professor and Head of the department at Sarda
                        Collage, Rajkot, Gujarat from 2003-2015{"{"}" "{"}"}
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                      <div className="section-title">Education</div>
                      <ul>
                        <li>B.A.,Gujarat University, Ahmedabad,India.</li>
                        <li>M.A.,Gujarat University, Ahmedabad, India.</li>
                        <li>P.H.D., Shaurashtra University, Rajkot</li>
                      </ul>
                      <div className="section-title">Experience</div>
                      <ul>
                        <li>
                          One year experience as Jr. Professor from April-2009
                          to march-2010 at B. J. Arts College, Ahmedabad.
                        </li>
                        <li>
                          Three year experience as Jr. Professor at V.S. Arts
                          &amp; Commerse Collage from April - 2008 to April -
                          2011.
                        </li>
                        <li>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </li>
                        <li>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </li>
                        <li>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </li>
                        <li>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </li>
                      </ul>
                    </div>
                    <div
                      className="tab-pane fade active show"
                      id="settings"
                      role="tabpanel"
                      aria-labelledby="profile-tab2"
                    >
                      <form method="post" className="needs-validation">
                        <div className="card-header">
                          <h4>Edit Profile</h4>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="form-group col-md-6 col-12">
                              <label>First Name</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="John"
                              />
                              <div className="invalid-feedback">
                                Please fill in the first name
                              </div>
                            </div>
                            <div className="form-group col-md-6 col-12">
                              <label>Last Name</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Deo"
                              />
                              <div className="invalid-feedback">
                                Please fill in the last name
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group col-md-7 col-12">
                              <label>Email</label>
                              <input
                                type="email"
                                className="form-control"
                                defaultValue="test@example.com"
                              />
                              <div className="invalid-feedback">
                                Please fill in the email
                              </div>
                            </div>
                            <div className="form-group col-md-5 col-12">
                              <label>Phone</label>
                              <input
                                type="tel"
                                className="form-control"
                                defaultValue
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group col-12">
                              <label>Bio</label>
                              <textarea
                                className="form-control summernote-simple"
                                style={{ display: "none" }}
                                defaultValue={
                                  "                                Lorem ipsum dolor sit amet, consectetur\n                                adipisicing elit. Pariatur voluptatum alias\n                                molestias minus quod dignissimos.\n                              "
                                }
                              />
                              <div className="note-editor note-frame card">
                                <div className="note-dropzone">
                                  {"{"}" "{"}"}
                                  <div className="note-dropzone-message" />
                                </div>
                                <div
                                  className="note-toolbar-wrapper"
                                  style={{ height: "36px" }}
                                >
                                  <div
                                    className="note-toolbar card-header"
                                    style={{
                                      position: "relative",
                                      top: "0px",
                                      width: "100%",
                                    }}
                                  >
                                    <div className="note-btn-group btn-group note-style">
                                      <button
                                        type="button"
                                        className="note-btn btn btn-light btn-sm note-btn-bold"
                                        tabIndex={-1}
                                        title
                                        data-original-title="Bold (CTRL+B)"
                                      >
                                        <i className="note-icon-bold" />
                                      </button>
                                      <button
                                        type="button"
                                        className="note-btn btn btn-light btn-sm note-btn-italic"
                                        tabIndex={-1}
                                        title
                                        data-original-title="Italic (CTRL+I)"
                                      >
                                        <i className="note-icon-italic" />
                                      </button>
                                      <button
                                        type="button"
                                        className="note-btn btn btn-light btn-sm note-btn-underline"
                                        tabIndex={-1}
                                        title
                                        data-original-title="Underline (CTRL+U)"
                                      >
                                        <i className="note-icon-underline" />
                                      </button>
                                      <button
                                        type="button"
                                        className="note-btn btn btn-light btn-sm"
                                        tabIndex={-1}
                                        title
                                        data-original-title="Remove Font Style (CTRL+\)"
                                      >
                                        <i className="note-icon-eraser" />
                                      </button>
                                    </div>
                                    <div className="note-btn-group btn-group note-font">
                                      <button
                                        type="button"
                                        className="note-btn btn btn-light btn-sm note-btn-strikethrough"
                                        tabIndex={-1}
                                        title
                                        data-original-title="Strikethrough (CTRL+SHIFT+S)"
                                      >
                                        <i className="note-icon-strikethrough" />
                                      </button>
                                    </div>
                                    <div className="note-btn-group btn-group note-para">
                                      <div className="note-btn-group btn-group">
                                        <button
                                          type="button"
                                          className="note-btn btn btn-light btn-sm dropdown-toggle"
                                          tabIndex={-1}
                                          data-toggle="dropdown"
                                          title
                                          data-original-title="Paragraph"
                                        >
                                          <i className="note-icon-align-left" />
                                        </button>
                                        <div className="dropdown-menu">
                                          <div className="note-btn-group btn-group note-align">
                                            <button
                                              type="button"
                                              className="note-btn btn btn-light btn-sm"
                                              tabIndex={-1}
                                              title
                                              data-original-title="Align left (CTRL+SHIFT+L)"
                                            >
                                              <i className="note-icon-align-left" />
                                            </button>
                                            <button
                                              type="button"
                                              className="note-btn btn btn-light btn-sm"
                                              tabIndex={-1}
                                              title
                                              data-original-title="Align center (CTRL+SHIFT+E)"
                                            >
                                              <i className="note-icon-align-center" />
                                            </button>
                                            <button
                                              type="button"
                                              className="note-btn btn btn-light btn-sm"
                                              tabIndex={-1}
                                              title
                                              data-original-title="Align right (CTRL+SHIFT+R)"
                                            >
                                              <i className="note-icon-align-right" />
                                            </button>
                                            <button
                                              type="button"
                                              className="note-btn btn btn-light btn-sm"
                                              tabIndex={-1}
                                              title
                                              data-original-title="Justify full (CTRL+SHIFT+J)"
                                            >
                                              <i className="note-icon-align-justify" />
                                            </button>
                                          </div>
                                          <div className="note-btn-group btn-group note-list">
                                            <button
                                              type="button"
                                              className="note-btn btn btn-light btn-sm"
                                              tabIndex={-1}
                                              title
                                              data-original-title="Outdent (CTRL+[)"
                                            >
                                              <i className="note-icon-align-outdent" />
                                            </button>
                                            <button
                                              type="button"
                                              className="note-btn btn btn-light btn-sm"
                                              tabIndex={-1}
                                              title
                                              data-original-title="Indent (CTRL+])"
                                            >
                                              <i className="note-icon-align-indent" />
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="note-editing-area">
                                  <div className="note-handle">
                                    <div
                                      className="note-control-selection"
                                      style={{ display: "none" }}
                                    >
                                      <div className="note-control-selection-bg" />
                                      <div className="note-control-holder note-control-nw" />
                                      <div className="note-control-holder note-control-ne" />
                                      <div className="note-control-holder note-control-sw" />
                                      <div className="note-control-sizing note-control-se" />
                                      <div className="note-control-selection-info" />
                                    </div>
                                  </div>
                                  <textarea
                                    className="note-codable"
                                    defaultValue={""}
                                  />
                                  <div
                                    className="note-editable card-block"
                                    style={{
                                      minHeight: "150px",
                                      height: "19.5px",
                                    }}
                                    contentEditable="true"
                                  >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Pariatur voluptatum alias
                                    molestias minus quod dignissimos.
                                  </div>
                                </div>
                                <div className="note-statusbar">
                                  {"{"}" "{"}"}
                                  <div className="note-resizebar">
                                    {"{"}" "{"}"}
                                    <div className="note-icon-bar" />
                                    {"{"}" "{"}"}
                                    <div className="note-icon-bar" />
                                    {"{"}" "{"}"}
                                    <div className="note-icon-bar" />
                                    {"{"}" "{"}"}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group mb-0 col-12">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="remember"
                                  className="custom-control-input"
                                  id="newsletter"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="newsletter"
                                >
                                  Subscribe to newsletter
                                </label>
                                <div className="text-muted form-text">
                                  You will get new information about products,
                                  offers and promotions
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer text-right">
                          <button className="btn btn-primary">
                            Save Changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
