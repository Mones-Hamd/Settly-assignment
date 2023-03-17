const LOGIN_FIELDS = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email address',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
  },
];
const REGISTER_FIELDS = [
  {
    name: 'firstName',
    type: 'text',
    placeholder: 'First Name',
  },
  {
    name: 'surname',
    type: 'text',
    placeholder: 'Surname',
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email address',
  },
  {
    name: 'confirmedEmail',
    type: 'email',
    placeholder: 'Confirm Email address',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
  },
  {
    name: 'confirmedPassword',
    type: 'password',
    placeholder: 'Repeat your Password',
  },
];
const FIELDS = { LOGIN_FIELDS, REGISTER_FIELDS };
export default FIELDS;
