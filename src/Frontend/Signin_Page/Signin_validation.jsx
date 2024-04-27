import * as Yup from 'yup'

    const Signin_schema = Yup.object({
        
        Full_name: Yup.string().required('Enter full name'),
        Mailid: Yup.string().email('Enter valid mail id').required('Email is required'),
        Password: Yup.string().min(8, 'Minimum 8 charectors').required('Enter new password'),
        Cpassword: Yup.string().oneOf([Yup.ref('Password')], 'Password is not matched').required('Re-enter password')
    })


    export default Signin_schema
