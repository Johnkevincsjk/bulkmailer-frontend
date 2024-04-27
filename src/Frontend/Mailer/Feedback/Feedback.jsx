import './Feedback.css'
import { motion } from 'framer-motion'
import { useFormik } from 'formik'
import Feedback_validationschema from './Feedback_validationSchema'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// react tostify
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../NavBar/Nav';


// Actual code starts below...
export default function Feedback() {
  const notify = () => toast.success('Feedback sent successfully!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce

  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm('service_erh25f5', 'template_pc465ph', form.current, {
        publicKey: 'D3zSg9eD9hOQ2dpHM',
      })
      .then(
        () => {
          notify('Feedback sent successfully!');
        },
        (error) => {
          notify('FAILED...', error.text);
        },
      );
  };







  const { values, errors, handleBlur, handleChange, resetForm } = useFormik({
    initialValues: {
      Your_name: '',
      title: '',
      Feedback: ''
    },
    validationSchema: Feedback_validationschema,

  })

  return (
    <section>
      <Nav />
      <div className='container-fluid feedback_body'>
        <motion.div className="">
          <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} animate={{ opacity: 1 }} className="feedback_form">
            <h5 id='feedback_header'>Feeback:</h5>


            <form id='feedback_form' ref={form} onSubmit={sendEmail}>
              <input className='feedback_input' type="text" placeholder='Your Name'
                id='Your_name'
                name='Your_name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Your_name} />
              <p className='signin_err_message'>{errors.Your_name && <small>{errors.Your_name}</small>}</p>

              <input className='feedback_input' type="text" placeholder='title'
                id='title'
                name='title'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title} />
              <p className='signin_err_message'>{errors.title && <small>{errors.title}</small>}</p>






              <textarea cols={40} rows={5} placeholder='Feedback matters lot'
                id='Feedback'
                name='Feedback'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Feedback}></textarea>
              <p className='signin_err_message'>{errors.Feedback && <small>{errors.Feedback}</small>}</p>
              <motion.input whileHover={{ scale: 1.1, color: "white" }} onClick={resetForm} type="submit" value="Send Feedback" id='feedback_btn' />
            </form>

          </motion.div>

        </motion.div>
        <ToastContainer />
      </div>
    </section>
  )
}
