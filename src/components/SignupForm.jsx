import { Formik, Field, ErrorMessage, Form } from "formik";
import { Button, Card, Form as BForm } from 'react-bootstrap';
import * as Yup from 'yup'

export default function SignupForm() {
  return (
  <Formik
  
  initialValues={{firstname: "", lastname: "", email: "", username: "", password: "", confirmPassword: ""}}
  
  validationSchema={Yup.object({
    username: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    email: Yup.string().email().required('Required'),
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')
  })}
  
  onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }}
  >
     {(formik) => (
        <Card className='form-card'>
          <Card.Body>
            <Form>
                <h1>Sign Up</h1>

                <BForm.Group>
                  <BForm.Label>First Name</BForm.Label>
                  <Field name="firstname" type="text" as={BForm.Control} isInvalid={formik.errors.firstname && formik.touched.firstname}/>
                  <ErrorMessage name="firstname"/>
                </BForm.Group>

                <BForm.Group>
                  <BForm.Label>Last Name</BForm.Label>
                  <Field name="lastname" type="text" as={BForm.Control} isInvalid={formik.errors.lastname && formik.touched.lastname}/>
                  <ErrorMessage name="lastname"/>
                </BForm.Group>

                <BForm.Group>
                  <BForm.Label>Email</BForm.Label>
                  <Field name="email" type="text" as={BForm.Control} isInvalid={formik.errors.email && formik.touched.email}/>
                  <ErrorMessage name="email"/>
                </BForm.Group>

                <BForm.Group>
                  <BForm.Label>Username</BForm.Label>
                  <Field name="username" type="text" as={BForm.Control} isInvalid={formik.errors.username && formik.touched.username}/>
                  <ErrorMessage name="username"/>
                </BForm.Group>

                <BForm.Group>
                  <BForm.Label>Password</BForm.Label>
                  <Field name="password" type="password" as={BForm.Control} isInvalid={formik.errors.password && formik.touched.password}/>
                  <ErrorMessage name="password"/>
                </BForm.Group>

                <BForm.Group>
                  <BForm.Label>Confirm Password</BForm.Label>
                  <Field name="confirmPassword" type="password" as={BForm.Control} isInvalid={formik.errors.confirmPassword && formik.touched.confirmPassword}/>
                  <ErrorMessage name="confirmPassword"/>
                </BForm.Group>

                <Button disabled={formik.isSubmitting} onClick={formik.handleSubmit}>Sign Up</Button>
              </Form>
          </Card.Body>
        </Card>)}
  </Formik>
  )
}

