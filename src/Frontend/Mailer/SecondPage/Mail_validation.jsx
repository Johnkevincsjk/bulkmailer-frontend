import * as Yup from 'yup'



const Mail_validation = Yup.object({
    to: Yup.string().required('Emails is Required').test('to','Email is invalid', (value) => {
        let email = value.split(',')
        return email.every((acc) => Yup.string().email().isValidSync(acc))
    }),
    subject: Yup.string().required("Subject is Required!"),
    text: Yup.string().required('Content is Required!')

})


export default Mail_validation