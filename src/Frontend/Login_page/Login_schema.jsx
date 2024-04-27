import * as Yup from 'yup'

const Login_schema = Yup.object({
    Mailid: Yup.string().email('Enter valid mail id').required('Email required'),
    Password: Yup.string().required('Password required')
})


export default Login_schema