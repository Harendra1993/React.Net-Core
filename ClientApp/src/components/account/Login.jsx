import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { authenticationService } from '@/services';

class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log(this)
        // redirect to home if already logged in
        if (authenticationService.currentUserValue) {
            // this.props.history.push('/');
        }
    }
    render() {
        return (
            <section className="section">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h4>Login</h4>
                                </div>
                                <div className="card-body">
                                    <Formik
                                        initialValues={{
                                            username: '',
                                            password: ''
                                        }}
                                        validationSchema={Yup.object().shape({
                                            username: Yup.string().required('Username is required'),
                                            password: Yup.string().required('Password is required')
                                        })}
                                        onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
                                            setStatus();
                                            authenticationService.login(username, password)
                                                .then(
                                                    user => {
                                                        console.log(this.props);

                                                        // const { from } = this.props.location.state || { from: { pathname: "/" } };
                                                        this.props.history.push({ pathname: "/" });
                                                    },
                                                    error => {
                                                        setSubmitting(false);
                                                        setStatus(error);
                                                    }
                                                );
                                        }}
                                        render={({ errors, status, touched, isSubmitting }) => (
                                            <Form>
                                                <div className="form-group">
                                                    <label htmlFor="username">Username</label>
                                                    <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="username" component="div" className="invalid-feedback" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={isSubmitting}>Login</button>
                                                    {isSubmitting &&
                                                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                                    }
                                                </div>
                                                {status &&
                                                    <div className={'alert alert-danger'}>{status}</div>
                                                }
                                            </Form>
                                        )}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login; 