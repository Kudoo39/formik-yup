// import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './SignupForm.css'

const SignupForm = () => {
  // const [email, setEmail] = useState('')
  // const [name, setName] = useState('')
  // const [phone, setPhone] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmedPassword, setConfirmedPassword] = useState('')

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
      password: '',
      confirmedPassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required').min(4, 'Must be 4 or more characters'),
      email: Yup.string()
        .required('Required')
        .matches(/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/, 'Please enter a valid email address'),
      password: Yup.string()
        .required('Required')
        .matches(/^(?=.*[A-Z])(?=.*\d).{8,}$/, 'More than 8 characters, contain one uppercase letter and a digit'),
      confirmedPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Password must match'),
      phone: Yup.string()
        .required('Required')
        .matches(/^\+?[0-9]{0,3}[-\s]?\(?[0-9]{3}\)?[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/, 'Must be a valid phone number')
    }),
    onSubmit: (value, { resetForm }) => {
      window.alert('Form submitted')
      console.log(value)

      resetForm()
    }
  })

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const newUser = {
  //     email: email,
  //     name: name,
  //     phone: phone,
  //     password: password
  //   }
  //   console.log(newUser)
  // }

  // console.log(formik.values)

  return (
    <section>
      <form className="info-form" onSubmit={formik.handleSubmit}>
        <label htmlFor="">Your name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter your name"
        />
        {formik.errors.name && <p className="errorMsg">{formik.errors.name}</p>}

        <label htmlFor="">Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
        />
        {formik.errors.email && <p className="errorMsg">{formik.errors.email}</p>}

        <label htmlFor="">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
        />
        {formik.errors.password && <p className="errorMsg">{formik.errors.password}</p>}

        <label htmlFor="">Confirmed password</label>
        <input
          type="text"
          id="confirmedPassword"
          name="confirmedPassword"
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
          placeholder="Confirm your password"
        />
        {formik.errors.confirmedPassword && <p className="errorMsg">{formik.errors.confirmedPassword}</p>}

        <label htmlFor="">Phone number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="Enter your phone number"
        />
        {formik.errors.phone && <p className="errorMsg">{formik.errors.phone}</p>}

        <button type="submit">Continue</button>
      </form>
    </section>
  )
}

export default SignupForm
