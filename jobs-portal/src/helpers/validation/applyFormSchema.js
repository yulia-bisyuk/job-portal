import * as Yup from 'yup';

export const applyFormSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be minimum 2 characters')
    .max(60, 'Name must be maximum 60 characters')
    .required('Required'),
  email: Yup.string()
    .min(2, 'Email must be minimum 2 characters')
    .max(100, 'Email must be maximum 100 characters')
    .matches(
      /^[\w-|.]+@([\w-]+\.)+[\w-]{2,4}$/,
      'Email must contain "@" and domain name after it and may contain "-" and "."characters before @'
    )
    .required('Required'),
  phone: Yup.string()
    .matches(
      //eslint-disable-next-line
      /^[\+]{0,1}380([0-9]{9})$/,
      'Number should start with code of Ukraine +380 and include 9 more digits'
    )
    .required('Required'),
  language: Yup.string().min(2).required('* Required'),
  resume: Yup.mixed()
    .required('Required')
    .test(
      'fileSize', // unique name identifying the test
      'File too large', // the validation error message
      (value) => value && value.size <= 5000000 // test function, determines schema validity
    )
    .test(
      'fileFormat', // unique name identifying the test
      'Unsupported file format. Only .pdf files allowed', // the validation error message
      (value) => value && ['application/pdf'].includes(value.type) // test function, determines schema validity
    ),
});
