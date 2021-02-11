import { Formik, Field, ErrorMessage, Form } from "formik";
import { Button, Card, Form as BForm } from 'react-bootstrap';
import * as Yup from 'yup'

export default function LoginForm(params) {
  return (
  <Formik
  
  initialValues={{ username: "", password: ""}}
  
  validationSchema={Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required')
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
              <h1>Login</h1>
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
              <Button disabled={formik.isSubmitting} onClick={formik.handleSubmit}>Login</Button>
            </Form>
         </Card.Body>
       </Card>)}
  </Formik>
  )
}

