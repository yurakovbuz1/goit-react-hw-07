import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../store/filtersSlice';
import css from './SearchBox.module.css'

const SearchBox = () => {

    const dispatch = useDispatch();

    const handleInput = (e) => {
        dispatch(changeFilter(e.target.value))
    }

    const filterValue = useSelector(selectNameFilter);

    return (
        <div className={css.container}>
            <h3>Find contacts by name</h3>
            <input type='text' className={css.inputField} value={filterValue} onChange={handleInput} />
        </div>
    );
}

export default SearchBox