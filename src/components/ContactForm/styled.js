import styled from 'styled-components';
import { Form, Field } from 'formik';

const FormContact = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 5px;
  background-color: #e1ded9;`

const Label = styled.label`
font-weight: 500;
font-size: 28px;
margin-bottom: 20px;
display: block;`

const Input = styled(Field)`
border: 0;
outline: 0;
width: 100%;
margin-bottom: 20px;
border-radius: 10px;
padding: 5px;
background-color: #f2f1e6;
font-weight: 400;
font-size: 22px;`

const Button = styled.button`
border-radius: 20px;
margin: 0 auto;
padding: 10px 20px;
font-weight: 400;
font-size: 22px;
 background-color: #94877e;`

export { FormContact, Label, Input, Button };
