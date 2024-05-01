import '../Login_page/Login_page.css'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { motion } from 'framer-motion'
import { useFormik } from 'formik'
import Login_schema from './Login_schema'
import axios from 'axios';
import { FaArrowCircleRight, FaLock } from 'react-icons/fa'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login_page() {
    const navigate = useNavigate()
    const { handleBlur, handleChange, handleSubmit, values, errors, resetForm } = useFormik({
        initialValues: {
            Mailid: '',
            Password: ''
        },
        validationSchema: Login_schema,
        onSubmit: async (values) => {
            try {
                const resp = await axios.post('https://bulkmailer-backend.onrender.com/bulkmailer/Login', values)

                console.log(resp);

                if (resp.data.Feedback === "Log In successfull") {

                    navigate('/FirstPage')
                    toast.success('Login Success !')

                } else {
                    toast.error("Account does not exist")
                    resetForm()

                }

            } catch (error) {

                toast.error(error.response.data.Feedback)
            }
        }

    })
    return (
        <div className='container-fluid logIn_body'>
            <div className="row justify-content-center align-items-center min-vh-100">

                <motion.div initial={{ y: -400 }} transition={{ duration: 0.5, type: 'spring', stiffness: 110 }} animate={{ y: 0 }} className="login_content col-6 min-vw-50">
                    <h1>Mass Mailer</h1>
                    <h3>Connect, Communicate, Convert Quicker and Smarter</h3>
                </motion.div>






                <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.5 }} animate={{ opacity: 1 }} className="login_card my-5 col-6">
                    <h5 id='Login_header'>Log-In</h5>
                    <form id='Login_form' onSubmit={handleSubmit} >

                        <div class="input-group">
                            <input type="email" class="form-control" placeholder='Email' aria-label="Recipient's username" aria-describedby="basic-addon2"
                                name='Mailid'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Mailid} />
                            <span class="input-group-text" id="basic-addon2"><FaArrowCircleRight /></span>
                        </div>
                        <p className='signin_err_message'>{errors.Mailid && <small>{errors.Mailid}</small>}</p>

                        <div class="input-group">
                            <input type="password" class="form-control" placeholder='Password' aria-label="Recipient's username" aria-describedby="basic-addon2"
                                name='Password'
                                id='Password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Password} />
                            <span class="input-group-text" id="basic-addon2"><FaLock /></span>
                        </div>
                        <p className='signin_err_message'>{errors.Password && <small>{errors.Password}</small>}</p>
                        <motion.button initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} id='Login_btn'>Log in</motion.button>


                    </form>

                    <Link to={'/Singnin'}><p style={{ color: "#4268b3" }}><u>Create an account</u></p></Link>
                </motion.div>
            </div>



        </div>


    )
}
