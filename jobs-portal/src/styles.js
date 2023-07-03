export const effects = {
  btnHover: 'hover:bg-white hover:text-primaryGreen ',
};

export const styles = {
  button: `py-[6px] px-[14px] bg-primaryGreen border border-primaryGreen rounded font-poppins text-[12px] leading-[27px] text-white ${effects.btnHover} transition duration-300 `,

  // boxWidth: 'xl:max-w-[1280px] w-full',
  heading1:
    'font-poppins font-bold sm:text-[48px] ss:text-[36px] text-[30px] sm:leading-normal leading-10 w-full mb-[20px] ss:mb-[28px]',
  heading2:
    'font-poppins font-semibold text-center sm:text-[30px] ss:text-[24px] text-[18px] sm:leading-normal leading-10 w-full mb-[20px] ss:mb-[28px]',
  heading3:
    'font-poppins font-semibold text-center sm:text-[24px] ss:text-[18px] text-[12px] sm:leading-normal leading-10 w-full mb-[20px] ss:mb-[28px]',
  paragraph:
    'font-poppins font-normal text-[12px] ss:text-[16px] sm:text-[20px] leading-[30px] w-full ',
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
