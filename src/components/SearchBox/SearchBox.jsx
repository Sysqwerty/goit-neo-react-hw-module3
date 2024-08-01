import css from './SearchBox.module.css';

const SearchBox = ({ value, onSearch }) => {
  return (
    <>
      <label className={css.search}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={e => onSearch(e.target.value)}
        />
      </label>
    </>
  );
};

export default SearchBox;
