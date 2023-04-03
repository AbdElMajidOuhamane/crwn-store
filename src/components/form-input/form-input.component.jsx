import React from 'react'
import { FormInputLabel, Group, Input } from "./form-input.style.js"

const FormInput = ({ label,...otherProps }) => {
  return (
    <Group>
        <Input {...otherProps}/>
        {label && (
            <FormInputLabel
            shrink={otherProps.value.length }
            >
                {label}
            </FormInputLabel>
        )}
        
       
    </Group>
  )
}

export default FormInput