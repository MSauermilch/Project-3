import React from 'react';
import { Button } from '@material-ui/core';

export function Input(props) {
  return (
    <div className="">
      <input className=""{...props} /></div>
  );
}

export function TextArea(props) {
  return (
    <div className="">
      <textarea className="" rows="20" {...props} /></div>
  );
}

export function SubmitBtn(props) {
  return (
    <Button  {...props} variant="contained" color="primary" >
      {props.children}
      Submit
</Button>

  );
}