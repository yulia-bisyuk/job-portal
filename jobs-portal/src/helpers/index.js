export const getAbbreviation = (string) => {
  if (/^[A-Za-z0-9]*$/.test(string[0])) {
    return string.match(/[A-Z]/g).splice(0, 2);
  } else {
    return string[0];
  }
};

export const parseDate = (date) => {
  return date.slice(0, 10).split('-').reverse().join('/');
};

// export const sortByDate = (option, jobs) => {
//   // console.log('option in helpers', option);
//   // const dates = jobs.map((job) => job.publication_date);
//   return jobs.sort((a, b) => {
//     if (option === 'Show from Older ones') {
//       return new Date(b.publication_date) - new Date(a.publication_date);
//     }
//     if (option === 'Show from Newer ones') {
//       return new Date(a.publication_date) - new Date(b.publication_date);
//     }
//   });
// };

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
