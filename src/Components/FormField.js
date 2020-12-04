import React from 'react'


const FormField = ({ label, type, name, placeholder, required }) => {
    return (
      <div>
        <Label htmlFor={name}>{label}</Label>
        <Input name={name} type={type} placeholder={placeholder} required />
        </div>
     
    );
  };
  
  export default FormField;