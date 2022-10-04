import { Formik } from 'formik';
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
import contactSchema from 'models/contactSchema';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const initialValues = {
  name: '',
  email: '',
};

const Form = () => {
  const onSubmit = (values, submitProps) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => {
        submitProps.resetForm();
      })
      .catch(error => alert(error));
  };

  // const onSubmit = (values, { resetForm }) => {
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
  //   resetForm();
  // };

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
        <Formik
          initialValues={initialValues}
          validationSchema={contactSchema}
          validateOnBlur
          onSubmit={onSubmit}
        >
          {props => (
            <FormStyled
              onSubmit={props.handleSubmit}
              data-netlify="true"
              name="contact"
              method="POST"
            >
              <input type="hidden" name="form-name" value="contact" />
              <Title>Request Callback</Title>
              <Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                />
              </Label>
              <Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email*"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                />
                {props.touched.email && props.errors.email ? (
                  <ErrorWrapper>
                    <Icon iconId="warning" className="formIcon" width="20px" height="20px" />
                    <ErrorText>{props.touched.email && props.errors.email}</ErrorText>
                  </ErrorWrapper>
                ) : null}
              </Label>
              <Button type="submit" btnClassName="formBtn" content="Send" />
            </FormStyled>
          )}
        </Formik>
      </FormWrapper>
    </FormSection>
  );
};

export default Form;
