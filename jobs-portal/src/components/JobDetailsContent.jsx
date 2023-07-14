import PropTypes from 'prop-types';
import { layout } from '../styles';

const JobDetailsContent = ({ name, company, date, info }) => {
  return (
    <section className={` ${layout.section}`}>
      <div className='container'>
        <h1>{name}</h1>
        {/* <h2>{company}</h2>
          <p>Posted {date} by </p>
          <div>{info}</div> */}
      </div>
    </section>
  );
};

JobDetailsContent.propTypes = {
  name: PropTypes.string,
  company: PropTypes.string,
  date: PropTypes.string,
  info: PropTypes.string,
};

export default JobDetailsContent;
