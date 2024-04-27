import * as Yup from 'yup'

const Feedback_validationschema = Yup.object({
    Your_name: Yup.string().required('Enter your name'),
    title: Yup.string().required('Enter feedback title'),
    Feedback: Yup.string().required('Enter your valuable feedback')
})

export default Feedback_validationschema