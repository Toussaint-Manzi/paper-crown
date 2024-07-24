import * as yup from 'yup';

const phoneNumberRegex = /^(\+2507)\d{8}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const gender = ['Male', 'Female', 'Non-Binary', 'Other'];

export const sectionOneSchema = yup.object().shape({
  fullname: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: yup.string().matches(/^\d{9}$/, 'Please provide a valid phone number (78X XXXXXXX)').required('Phone number is required'),
  gender: yup.string().oneOf(gender, 'Select a valid gender').required('Gender is required'),
  country: yup.string().required('Country is required'),
});

export const sectionTwoSchema = yup.object().shape({
  organisationDescr: yup.string().required('Please select an option that best describes your organisation/work'),
  organisation: yup.string().required('Organisation name is required'),
  position: yup.string().required('Position is required'),
  password: yup.string().matches(passwordRegex, 'Password must have at least 8 characters, including uppercase, lowercase, and a digit').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords do not match').required('Confirm password is required'),
});
