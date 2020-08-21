import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters long')
    .required('Name is Required'),
  size: yup
    .string()
    .oneOf(['small', 'medium', 'large'], 'You need to select a pizza size')
    .required('You need to select a pizza size'),
})

export default formSchema