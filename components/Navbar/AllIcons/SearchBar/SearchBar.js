import SearchIcon from '@mui/icons-material/Search';



const SearchBar = () => {
    return (
    
      <div className="flex items-center justify-start">
        <div className="fixed px-2"><SearchIcon/></div>
        <input
          placeholder="Search"
          className="bg-gray-200 pl-10 outline-none
          py-2 placeholder-gray-600 rounded-md text-sm"
        />
      </div>
      
    );
}

export default SearchBar;