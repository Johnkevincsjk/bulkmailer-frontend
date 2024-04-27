import '../SecondPage/SecondPage.css'
import { motion } from 'framer-motion'
import { FaPaperPlane } from 'react-icons/fa'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik';
import Mail_validation from './Mail_validation';
import Nav from '../NavBar/Nav';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';








export default function SecondPage() {

    let textedit

    const formik = useFormik({
        initialValues: {
            to: '',
            subject: '',
            text: ''
        },
        validationSchema: Mail_validation,


        onSubmit: async (values) => {
            try {


                const node_resp = await axios.post('http://localhost:5000/bulkmailer/api/nodemailer', values)
                console.log(node_resp)
                if (node_resp) {
                    toast.success('Mail sent successfully')
                    formik.resetForm()
                }

            } catch (error) {
                toast.error(error.data.Feedback)
                console.log(error)
            }
        }

    })
    const handleEditorChange = () => {

        const textbucket = textedit.getEditor().getText()
        console.log(textbucket)
        formik.setFieldValue('text', textbucket)


    };








    return (

        <section>
            <Nav />
            <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} animate={{ opacity: 1 }} className="container-fluid mail_page">
                <div className="container input_body">

                    <h2>Get Your Mail Ready <hr /> </h2>



                    {/* form starts here */}
                    <div className="container-fluid form">
                        <form id='Mail_form' onSubmit={formik.handleSubmit}>
                            <div className='input_boxes'>
                                <h6>To :</h6>
                                <input type="text" className='input_box' required
                                    placeholder='Insert comma after every mail id'
                                    id='to'
                                    name='to'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.to}
                                />
                                <p className='signin_err_message'>{formik.errors.to && <small>{formik.errors.to}</small>}</p>
                            </div>
                          
                            <div className='input_boxes'>
                                <h6>Subject :</h6>
                                <input type="text" className='input_box' required
                                    id='subject'
                                    name='subject'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.subject} />
                                <p className='signin_err_message'>{formik.errors.subject && <small>{formik.errors.subject}</small>}</p>
                            </div>



                            <div className="textarea">
                                <h6>Mail Content :</h6>

                                <ReactQuill style={{ width: '100%', marginBottom: '10px' }} theme="snow"
                                    id='text'
                                    name='text'
                                    onChange={handleEditorChange}
                                    ref={(el) => textedit = el} />



                            </div>
                            <div className="input_btns">
                                <motion.button initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} id='send_btn' className='FirstPage_btn' type='submit'>Send <span> <FaPaperPlane /></span></motion.button>

                            </div>

                        </form>
                        {/* Form ends here */}
                    </div>




                </div>


            </motion.div>
        </section>




    )
}
