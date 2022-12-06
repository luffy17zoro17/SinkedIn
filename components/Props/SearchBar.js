import SearchIcon from '@mui/icons-material/Search';



const SearchBar = ({placeholder, inputClass,icon,title,titleClass,searchIconClass,topClass}) => {
    return (
    
      <div className={topClass}>
        <div className={searchIconClass}><SearchIcon/></div>
        <h2 className={titleClass}>{title}</h2>
        <input
          placeholder={placeholder}
          className={inputClass}
        />
      </div>
      
    );
}

export default SearchBar;