import React from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineLoading } from 'react-icons/ai'

// Styled components

import { Input, Button, Container } from './styles'

interface FormProps {
  onSubmit: (values: { name: string }) => void
  isLoading: boolean
}

const Form = ({ onSubmit, isLoading }: FormProps) => {
  const initialValues = { name: '' }
  const validationSchema = yup.object({
    name: yup.string().required()
  })


  return (
    <div>
      Wat
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
            <Button type="submit" error={!!errors.name}>
              {isLoading ? (
                <AiOutlineLoading size={26} color="white" /> 
              ) : (
                <BsSearch size={26} color="white" />
              )}  
            </Button>
        </Container>
        )}
      </Formik>
    </div>
  )
}

export default Form