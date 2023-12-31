import { forwardRef, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { layout, styles } from '../styles';
import { popularCategories } from '../constants';
import { scrollToView } from '../helpers';
import { JobDetailsContext } from '../App';

const PopularCategories = forwardRef(function PopularCategories(props, ref) {
  const { setCategory } = useContext(JobDetailsContext);
  //eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <section className={` bg-lightGrey ${layout.section}`}>
      <div className='container'>
        <h2 className={`text-darkGreen ${styles.heading2}`}>
          Popular Categories
        </h2>
        <ul className={`${layout.grid}`}>
          {popularCategories.map((category) => (
            <li
              key={category.id}
              className={`bg-white p-[30px] group relative cursor-pointer ${styles.flexCenter} rounded-lg shadow`}
            >
              <div
                className={`rounded-full bg-lightGreen w-[75px] h-[75px] ${styles.flexCenter}`}
              >
                <svg width='24' height='24'>
                  <use href={category.icon} />
                </svg>
              </div>
              <div
                onClick={() => {
                  setCategory(category.title);
                  setSearchParams({ page: 1 });
                  scrollToView(ref);
                }}
                className={`absolute top-0 left-0 w-full h-0 p-[4px] ${styles.flexCenter} bg-darkGreen opacity-0 group-hover:h-full group-hover:opacity-100 duration-500 rounded-lg`}
              >
                <p
                  className={` text-white text-center underline underline-offset-8 decoration-[0.5px] ${styles.paragraph}`}
                >
                  {category.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});

export default PopularCategories;
