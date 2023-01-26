import React from 'react';

import { Form } from '../Form';
import { FormField } from '../FormField';
import { FormSubmit } from '../FormSubmit';

import './style.css';



export const ChangePasswordForm = () => {
  const onSubmit = (values) => {
    console.log('onsubmit', values);

    // Save to API or do somethings
  };

  return (
    <>
    <Form onSubmit={onSubmit} style={{maxWidth: '20rem', margin: '2rem auto'}}>
        {({ values, errors }) => {
            console.log('values', values)
            console.log('errors', errors);

            return (
              <fieldset>
                <legend>Change Password Form</legend>
                <FormField
                  required
                  type="password"
                  name="password"
                  label="Password"
                />
                <FormField
                  required
                  type="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                />
                <br></br>
                <FormSubmit/>
              </fieldset>
            )
          }
        }
    </Form>  
  </>
  )
}