import { Form, Button } from "react-bootstrap"

const Register = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-info'>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name='email'
                // onChange={handleChange}
                // onBlur={handelBlur}
                // value={values.email}
                />
                {/* {errors.email && !touched.email && errors.email ? <p className='text-danger'>{errors.email}</p> : <></>} */}
                {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='text-info'>Password</Form.Label>
                <Form.Control type="password"
                    placeholder="Password"
                    name="password"
                // onChange={handleChange}
                // onBlur={handelBlur}
                // value={values.password}
                />
                {/* {errors.password && touched.password && errors.password} */}
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Register