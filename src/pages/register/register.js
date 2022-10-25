import { Form, Button } from "react-bootstrap"
import { useState } from "react"
import './register.css'
const Register = () => {
    const [userData, setData] = useState({
        name: "",
        email: '',
        userName: "",
        password: "",
        confirmPassword: ""
    })

    const [error, setError] = useState({
        nameError: null,
        emailError: null,
        userNameError: null,
        passError: null,
        conPassError: null
    })

    console.log(error);
    const changeValues = (event) => {
        if (event.target.name === "name") {
            setData({
                ...userData,
                name: event.target.value
            })
            setError({
                ...error,
                nameError: event.target.value.length === 0 ? "This Field is Required" : event.target.value.length < 3 ? "please insert valid name" : null
            })
        }
        else if (event.target.name === "email") {
            setData({
                ...userData,
                email: event.target.value,
            })
            setError({
                ...error,
                emailError: event.target.value.length === 0 ? " Required" : (event.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) ? null : ' not valid'
            })

        }
        else if (event.target.name === "userName") {
            setData({
                ...userData,
                userName: event.target.value
            })
            setError({
                ...error,
                userNameError: event.target.value.length === 0 ? " Required"
                    : (event.target.value.match(/^[A-Za-z]*$/)) ? null : ' not valid '
            })

        }
        else if (event.target.name === "password") {
            setData({
                ...userData,
                password: event.target.value,
            })
            setError({
                ...error,
                passError: event.target.value.length === 0 ?
                    "required" : (event.target.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)) ?
                        null : 'password length not less than 8 characters , contains at least one lowercase , one uppercase ,  at least one digit and special character [ example : *@%$# ]'
            })

        }
        else if (event.target.name === "conPassword") {
            setData({
                ...userData,
                confirmPassword: event.target.value,
            })
            setError({
                ...error,
                conPassError: event.target.value.length === 0 ? " Required" : (event.target.value === userData.password) ? null : ' invalid not match'
            })
        }
    }
    return (
        <div className='container-fluid content'>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <div className={'reg_form'}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupName">
                            <input className="form-control" type="text" name='name'
                                value={userData.name} placeholder="Enter ur Name"
                                onChange={(event) => changeValues(event)} />
                            {error && <p style={{ color: 'red' }}>{error.nameError}</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <input className="form-control" type="email" name='email'
                                value={userData.email} placeholder="Enter email"
                                onChange={(event) => changeValues(event)} />
                            {error && <p style={{ color: 'red' }}>{error.emailError}</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupUserName">
                            <input className="form-control" type="text" name='userName'
                                value={userData.userName} placeholder="Enter ur user Name"
                                onChange={(event) => changeValues(event)} />
                            {error && <p style={{ color: 'red' }}>{error.userNameError}</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <input className="form-control"
                                type="password" name='password' placeholder="Password"
                                onChange={(event) => changeValues(event)} value={userData.password} />
                            {error && <p style={{ color: 'red' }}>{error.passError}</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <input className="form-control"
                                type="password" name='conPassword' placeholder="Confirm Password"
                                onChange={(event) => changeValues(event)} value={userData.confirmPassword} />

                            {error && <p style={{ color: 'red' }}>{error.conPassError}</p>}
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={error.conPassError === null && error.emailError === null && error.nameError === null && error.passError === null && error.userNameError === null ? false : true}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Register