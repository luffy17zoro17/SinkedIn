import SearchIcon from '@mui/icons-material/Search';



const SearchBar = ({placeholder, inputClass,icon}) => {
    return (
    
      <div className="flex items-center justify-start z-30">
        <div className="fixed px-2"><SearchIcon/></div>
        <input
          placeholder={placeholder}
          className={inputClass}
        />
      </div>
      
    );
}

export default SearchBar;