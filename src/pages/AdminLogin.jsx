// src/components/AdminLogin.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/AdminLogin.css';

const AdminLogin = () => {
    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required'),
    });

    const onSubmit = (values) => {
        console.log(values);
        // Handle login logic here
    };

    return (
        <div className="admin-login-container">
            <div className="login-form">
                <h2>Admin Login</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field type="password" id="password" name="password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                    </Form>
                </Formik>
                <p className="info-message">If you don't have an admin account, please ask the admin to provide you with an account.</p>
            </div>
        </div>
    );
};

export default AdminLogin;
