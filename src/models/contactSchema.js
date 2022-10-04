import * as yup from 'yup';

const contactSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email().required('This is a required field'),
});

export default contactSchema;
