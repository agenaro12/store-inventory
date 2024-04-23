import SearchText from "./SearchText";
import ClassModule from './SearchBar.module.css';
import Buttom from './Buttom';

const SearchBar = ({onChange,value}) => {
    const onClicHandle = (content) => {
        alert(content);
    }

    return(
        <div className={ClassModule.searchBar}>
            <SearchText onChange={onChange}/>
            <Buttom clickHandle={onClicHandle} content={'Search'} value={value}/>
        </div>
    );
}

export default SearchBar;