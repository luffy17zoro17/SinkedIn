import SearchIcon from '@mui/icons-material/Search';



const SearchBar = ({placeholder, inputClass,icon,title,titleClass,searchIconClass}) => {
    return (
    
      <div className="flex items-center justify-start z-30">
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