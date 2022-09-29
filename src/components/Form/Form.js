import { useFormik } from 'formik';
// import toast from 'react-hot-toast';
import {
  FormSection,
  FormWrapper,
  FormStyled,
  Title,
  Label,
  Input,
  ErrorWrapper,
  ErrorText,
} from './Form.styled';
import PictureWrapper from 'components/PictureWrapper';
import Icon from 'components/Icon';
import Button from 'components/Button';
import contactWebp1x from 'assets/images/home/contact.webp';
import contactWebp2x from 'assets/images/home/contact@2x.webp';
import contactJpg1x from 'assets/images/home/contact.jpg';
import contactJpg2x from 'assets/images/home/contact@2x.jpg';

const initialValues = {
  name: '',
  email: '',
};

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'This is a required field';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Form = () => {
  const onSubmit = values => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => {
        alert('Success!');
        formik.resetForm();
      })
      .catch(error => alert(error));
  };

  // const onSubmit = () => {
  //   toast.success("Thank you, we'll call you back!", {
  //     duration: 3500,
  //     style: {
  //       borderRadius: '10px',
  //       background: 'white',
  //       color: 'black',
  //       padding: '10px',
  //       textAlign: 'center',
  //     },
  //   });
  //   formik.resetForm();
  // };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return (
    <FormSection id="contact">
      <FormWrapper>
        <PictureWrapper
          picsClassName="formPicWrapper"
          srcsetWebp={`${contactWebp1x} 1x, ${contactWebp2x} 2x`}
          srcsetJpg={`${contactJpg1x} 1x, ${contactJpg2x} 2x,`}
          src={contactJpg1x}
          alt="contact us"
        />

        <FormStyled onSubmit={formik.handleSubmit} data-netlify="true" name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <Title>Request Callback</Title>
          <Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Label>
          <Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email*"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorWrapper>
                <Icon iconId="warning" className="formIcon" width="20px" height="20px" />
                <ErrorText>{formik.touched.email && formik.errors.email}</ErrorText>
              </ErrorWrapper>
            ) : null}
          </Label>
          <Button type="submit" btnClassName="formBtn" content="Send" />
        </FormStyled>
      </FormWrapper>
    </FormSection>
  );
};

export default Form;
