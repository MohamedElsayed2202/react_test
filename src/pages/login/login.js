import { Formik } from 'formik'
import { Form, Button } from 'react-bootstrap';
import './login.css'
const Login = props => {
    return (

        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                } else if (!values.password) {
                    errors.password = 'Required';
                }
                return errors
            }}
            onSubmit={(values, { setSubmiting }) => {
                console.log(values);
            }}
        >
            {({ values, errors, touched, handleChange, handelBlur, handleSubmit, isSubmitting }) => (
                <div className='container-fluid content'>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className={'login_form'}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='text-info'>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name='email'
                                        onChange={handleChange}
                                        onBlur={handelBlur}
                                        value={values.email} />
                                    {errors.email && touched.email && errors.email ? <p className='text-danger'>{errors.email}</p> : <></>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='text-info'>Password</Form.Label>
                                    <Form.Control type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handelBlur}
                                        value={values.password}
                                    />
                                    {errors.password && touched.password && errors.password ? <p className='text-danger'>{errors.password}</p> : <></>}
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default Login;