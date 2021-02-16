import React from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineLoading } from 'react-icons/ai'

// Styled components

import { Input, Button, Container } from './styles'

interface FormProps {
  city?: string
  onSubmit: (values: { name: string }) => void
  isLoading: boolean
}

const Form = ({ city, onSubmit, isLoading }: FormProps) => {
  const initialValues = { name: city ?? '' }
  console.log('CITY', city)
  const validationSchema = yup.object({
    name: yup.string().required()
  })


  return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      > 
        {({ values, handleChange, handleBlur, errors, isValid }) => (
          <Container>
            <Input
              name="name"
              id="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={!!errors.name}
            />
           <Button type="submit">
             {isLoading ? (
               <AiOutlineLoading size={22} color="white" />
             ) : (
              <BsSearch size={22} color="white" />
             )}
           </Button>
        </Container>
        )}
      </Formik>
  )
}

export default Form