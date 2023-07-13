import { useState } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { applyFormSchema } from '../helpers/validation/applyFormSchema';
import { levels } from '../constants/index';

import successImg from '../assets/success-img.svg';
import { styles } from '../styles';

const ApplyForm = ({ setModalOpened }) => {
  const [nameFilled, setNameFilled] = useState(false);
  const [emailFilled, setEmailFilled] = useState(false);
  const [phoneFilled, setPhoneFilled] = useState(false);
  const [radioBtnChecked, setRadioBtnChecked] = useState(false);
  const [fileName, setFileName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    language: '',
    resume: null,
  };

  const buttonIsActive =
    nameFilled && emailFilled && phoneFilled && radioBtnChecked && fileName;

  const handleChange = (e) => {
    console.log(`change event: `, e);
    if (e.target.name === 'name') setNameFilled(true);
    if (e.target.name === 'email') setEmailFilled(true);
    if (e.target.name === 'phone') setPhoneFilled(true);
    if (e.target.name === 'language') setRadioBtnChecked(true);
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    setNameFilled(false);
    setEmailFilled(false);
    setPhoneFilled(false);
    setFileName('');
    document.getElementById(values.language).checked = false; //formik doesn't reset radio buttons properly
    console.log(`submit values: `, values);

    setIsSubmitted(true);
  };

  return (
    <>
      {isSubmitted ? (
        <div>
          <img
            src={successImg}
            alt='Success notification'
            className='my-[60px] mx-auto'
          />

          <button
            onClick={() => {
              setModalOpened(false);
              //   props.onHide();
              //   setFormSubmitted(false);
            }}
            className={`${styles.button}`}
          >
            Close
          </button>
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={applyFormSchema}
          onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
          {(formik) => (
            <form
              onSubmit={formik.handleSubmit}
              onChange={handleChange}
              className='mr-auto w-full max-w-[380px]'
            >
              <div>
                <div className='mb-[30px]'>
                  {nameFilled && (
                    <label className={`${styles.label}`}>Your name</label>
                  )}

                  <input
                    id='name'
                    name='name'
                    type='text'
                    className={`${styles.textInput} ${
                      formik.touched.name && formik.errors.name
                        ? 'border-errorRed'
                        : 'border-lightGreen'
                    }`}
                    placeholder={nameFilled ? '' : 'Your name'}
                    onChange={formik.handleChange}
                    {...formik.getFieldProps('name')}
                  />
                  <p className={`${styles.notificationMsg}`}>John Doe</p>
                  {formik.touched.name && formik.errors.name ? (
                    <p className={`${styles.errorMsg}`}>{formik.errors.name}</p>
                  ) : null}
                </div>

                <div className='mb-[30px]'>
                  {emailFilled && (
                    <label className={`${styles.label}`}>Email</label>
                  )}

                  <input
                    id='email'
                    type='email'
                    name='email'
                    className={`${styles.textInput} ${
                      formik.touched.email && formik.errors.email
                        ? 'border-errorRed'
                        : 'border-lightGreen'
                    }`}
                    placeholder={emailFilled ? '' : 'Email'}
                    onChange={formik.handleChange}
                    {...formik.getFieldProps('email')}
                  />
                  <p className={`${styles.notificationMsg}`}>
                    example@mail.com
                  </p>
                  {formik.touched.email && formik.errors.email ? (
                    <p className={`${styles.errorMsg}`}>
                      {formik.errors.email}
                    </p>
                  ) : null}
                </div>

                <div className='mb-0'>
                  {phoneFilled && (
                    <label className={`${styles.label}`}>Phone</label>
                  )}

                  <input
                    id='phone'
                    type='text'
                    name='phone'
                    className={`${styles.textInput} ${
                      formik.touched.phone && formik.errors.phone
                        ? 'border-errorRed'
                        : 'border-lightGreen'
                    }`}
                    placeholder={phoneFilled ? '' : 'Phone'}
                    onChange={formik.handleChange}
                    {...formik.getFieldProps('phone')}
                  />
                  <p className={`${styles.notificationMsg}`}>+380XXXXXXXXX</p>

                  {formik.touched.phone && formik.errors.phone ? (
                    <p className={`${styles.errorMsg}`}>
                      {formik.errors.phone}
                    </p>
                  ) : null}
                </div>
              </div>

              <p className={`mt-[25px] mb-[12px] ${styles.label}`}>
                Indicate your English level:
              </p>

              <div className='mb-[30px]'>
                {levels.map((level) => (
                  <label
                    className='flex items-center mb-[4px] last:mb-0'
                    key={level.id}
                  >
                    <input
                      id={level.id}
                      type='radio'
                      name='language'
                      value={level.id}
                      onChange={formik.handleChange}
                      className='radio-group-input'
                    />
                    {`${level.id} ${level.name}`}
                  </label>
                ))}
                {formik.touched.language && formik.errors.language ? (
                  <p>{formik.errors.language}</p>
                ) : null}
              </div>

              <input
                id='resume'
                name='resume'
                type='file'
                placeholder='Upload your CV'
                onChange={(e) => {
                  formik.setFieldValue('resume', e.currentTarget.files[0]);
                  setFileName(e.currentTarget.files[0].name);
                }}
              />
              <label htmlFor='resume'>
                <span>Upload</span>
                <span>{fileName ? fileName : 'Upload your CV'}</span>
              </label>
              {formik.touched.resume && formik.errors.resume ? (
                <p>{formik.errors.resume}</p>
              ) : null}

              <button
                type='submit'
                className={`${styles.button}`}
                disabled={!buttonIsActive}
              >
                Apply
              </button>
            </form>
          )}
        </Formik>
      )}
    </>
  );
};

ApplyForm.propTypes = {
  setModalOpened: PropTypes.func,
};

export default ApplyForm;
