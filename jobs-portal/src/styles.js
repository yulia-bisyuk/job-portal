export const effects = {
  btnHover: 'hover:bg-white hover:text-primaryGreen ',
  textHover:
    'hover:underline hover:underline-offset-8 hover:decoration-[0.5px] ',
};

export const styles = {
  button: `py-[6px] px-[14px] bg-primaryGreen border border-primaryGreen rounded font-poppins text-[12px] leading-[27px] text-white ${effects.btnHover} transition duration-300 `,
  outlinedButton: `py-[6px] px-[14px] bg-primaryGreen border border-primaryGreen rounded font-poppins text-[12px] leading-[27px] text-white ${effects.btnHover} transition duration-300 `,
  // boxWidth: 'xl:max-w-[1280px] w-full',
  textInput:
    'w-full py-[10px] pl-[14px] border-[1px] border-solid  rounded-[8px] focus:outline-0',
  label: 'ml-[16px] text-darkGreen',
  /* display: block;
  width: 245px;
  padding: 14px 16px;

  border-width: 1px 1px 1px 0px;
  border-color: ${props => props.theme.borderInputColor};
  border-style: solid;
  border-radius: 0px 8px 8px 0px;
  color: ${props => props.theme.helperTextColor};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media screen and (min-width: 768px) {
    width: 297px;
  } */
  filePlaceholder:
    'w-full py-[10px] px-[14px] border-solid border-y border-s-0 border-e-[1px] rounded-s-none rounded-r-[8px] rounded-b-[8px] border-lightGreen text-textLightGrey truncate',
  heading1:
    'font-poppins font-bold sm:text-[48px] ss:text-[36px] text-[30px] sm:leading-normal leading-10 w-full mb-[20px] ss:mb-[28px]',
  heading2:
    'font-poppins font-semibold text-center sm:text-[30px] ss:text-[24px] text-[18px] sm:leading-normal leading-10 w-full mb-[20px] ss:mb-[28px]',
  heading3:
    'font-poppins font-semibold text-center sm:text-[24px] ss:text-[18px] text-[12px] sm:leading-normal leading-10 w-full mb-[20px] ss:mb-[28px]',
  heading4:
    'font-poppins font-semibold sm:text-[18px] ss:text-[16px] text-[14px] sm:leading-normal leading-10',
  paragraph:
    'font-poppins font-normal text-[12px] ss:text-[16px] sm:text-[20px] leading-[30px] w-full ',
  errorMsg: 'ml-[16px] mb-0 text-[10px] text-errorRed',
  notificationMsg: 'ml-[16px] mb-0 text-[10px] text-textGrey',
  flexCenter: 'flex justify-center items-center',
  // flexStart: 'flex justify-center items-start',
  // paddingX: 'sm:px-16 px-6',
  // padding: 'sm:px-16 px-6 sm:py-12 py-4',
  // marginX: 'sm:mx-16 mx-6',
  // marginY: 'sm:my-16 my-6',
};

export const layout = {
  section: 'py-[60px]  lg:py-[94px] ',
  grid: 'grid grid-cols-2 gap-8  sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 xl:gap-14',
  // container: `flex md:flex-row flex-col ${styles.paddingY}`,
  // sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  // sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  // sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  // sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};
