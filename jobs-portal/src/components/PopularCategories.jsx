import { layout } from '../styles';
import { popularCategories } from '../constants';

const PopularCategories = () => {
  return (
    <section className={` bg-lightGrey ${layout.section}`}>
      <div className='container'>
        <ul>
          {popularCategories.map((category) => (
            <li key={category.id}>
              <svg width='20' height='20'>
                <use href={category.icon} />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PopularCategories;
