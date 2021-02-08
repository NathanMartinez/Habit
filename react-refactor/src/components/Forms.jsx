import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup'

export function LoginForm(params) {
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
     {formik => (<Form>
      <h1>Login</h1>
      <label htmlFor="username">Username</label>
       <Field name="username" type="text"/>
       <ErrorMessage name="username"/>

      <label htmlFor="password">Password</label>
       <Field name="password" type="password"/>
       <ErrorMessage name="password"/>

      <button type='button' onClick={formik.handleSubmit}>Login</button>
    </Form>)}
  </Formik>
  )
}