import React from 'react'

export default function Create(props) {
    return (
        <section className="section">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h4>Register</h4>
                            </div>
                            <div className="card-body">
                                <form method="POST">
                                    <div className="row">
                                        <div className="form-group col-6">
                                            <label for="frist_name">First Name</label>
                                            <input id="frist_name" type="text" className="form-control" name="frist_name" autofocus />
                                        </div>
                                        <div className="form-group col-6">
                                            <label for="last_name">Last Name</label>
                                            <input id="last_name" type="text" className="form-control" name="last_name" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input id="email" type="email" className="form-control" name="email" />
                                        <div className="invalid-feedback">
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-6">
                                            <label for="password" className="d-block">Password</label>
                                            <input id="password" type="password" className="form-control pwstrength" data-indicator="pwindicator"
                                                name="password" />
                                            <div id="pwindicator" className="pwindicator">
                                                <div className="bar"></div>
                                                <div className="label"></div>
                                            </div>
                                        </div>
                                        <div className="form-group col-6">
                                            <label for="password2" className="d-block">Password Confirmation</label>
                                            <input id="password2" type="password" className="form-control" name="password-confirm" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" name="agree" className="custom-control-input" id="agree" />
                                            <label className="custom-control-label" for="agree">I agree with the terms and conditions</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-lg btn-block">
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {/* <div className="mb-4 text-muted text-center">
                                Already Registered? <a href="auth-login.html">Login</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
