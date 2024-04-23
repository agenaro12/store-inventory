import ClassMoudle from './SearchText.module.css';
const SearchText = (props) => {
    const onChangeTextHandle = (event) => {
        props.onChange(event.target.value);
    }

    return (
    <>
    <label className={ClassMoudle.searchBar__label} htmlFor='txtSearch'>Search:</label>
    <input id = 'txtSearch' type='text' className={ClassMoudle.searchBar__text} onChange={onChangeTextHandle}/>
    </>);
}

export default SearchText;