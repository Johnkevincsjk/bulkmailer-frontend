import React, { useEffect } from 'react'
import '../Signin_Page/Signin.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { motion } from 'framer-motion'
import axios from 'axios';
import { FaSmile, FaMailBulk, FaUserLock } from 'react-icons/fa'
import Signin_schema from './Signin_validation'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Signin = () => {
  const navigate = useNavigate()


  const { handleBlur, handleChange, values, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      Full_name: '',
      Mailid: '',
      Password: '',
      Cpassword: ''
    },
    validationSchema: Signin_schema,
    onSubmit: async (values) => {


      try {

        const resp = await axios.post('http://localhost:5000/bulkmailer/api/createuser', values);


        if (resp.data.Feedback === "user created successfully") {
          console.log(resp.data.Feedback)
          toast.success(resp.data.Feedback)
          resetForm()
          navigate('/')


        }

      } catch (error) {
        toast.error(error.response.data.Feedback)
        resetForm()
        console.error('Registration failed', error.response.data);
      }
    }

  })


  return (
    <div className='container-fluid logIn_body signin_body'>
      <div className="row w-90 justify-content-between  align-items-center">
        <motion.div initial={{ x: -400 }} transition={{ duration: 0.5, type: 'spring', stiffness: 110 }} animate={{ x: 0 }} className="login_content col-6">
          <h1>Your Journey Begins Here...</h1>
          <h3>Sign In and Explore !</h3>
        </motion.div>



        <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.5 }} animate={{ opacity: 1 }} className="login_card signin_card my-1 mt-5 col-6">

          <h5 id='signin_head'>Sign-up</h5>




          <form id='Signin_form' onSubmit={handleSubmit}>
            <div class="input-group">
              <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2"
                placeholder='Full Name'
                name='Full_name'
                value={values.Full_name}
                onChange={handleChange}
                onBlur={handleBlur} />
              <span class="input-group-text" id="basic-addon2"><FaSmile /></span><br />
            </div>
            <p className='signin_err_message'>{errors.Full_name && <small>{errors.Full_name}</small>}</p>




            <div class="input-group">
              <input type="email" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2"
                placeholder='Email'
                name='Mailid'
                value={values.Mailid}
                onChange={handleChange}
                onBlur={handleBlur} />
              <span class="input-group-text" id="basic-addon2"><FaMailBulk /></span><br />
            </div>
            <p className='signin_err_message'>{errors.Mailid && <small>{errors.Mailid}</small>}</p>





            <div class="input-group">
              <input type="password" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2"
                placeholder='Enter New Password'
                name='Password'
                value={values.Password}
                onChange={handleChange}
                onBlur={handleBlur} />
              <span class="input-group-text" id="basic-addon2"><FaUserLock /></span><br />
            </div>
            <p className='signin_err_message'> {errors.Password && <small>{errors.Password}</small>}</p>

            <div class="input-group">
              <input type="password" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2"
                placeholder='Re-enter Password'
                name='Cpassword'
                value={values.Cpassword}
                onChange={handleChange}
                onBlur={handleBlur} />
              <span class="input-group-text" id="basic-addon2"><FaUserLock /></span><br />
            </div>
            <p className='signin_err_message'>{errors.Cpassword && <small>{errors.Cpassword}</small>}</p>


            <motion.button initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} id='signup_btn' type='submit'>Sign up</motion.button>
          </form>

          <p >Already have an Account? <Link to={'/'} style={{ color: 'blue' }}>Login</Link></p>
        </motion.div>

      </div>

    </div>
  )
}

export default Signin