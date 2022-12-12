const SearchInputProp = ({searchClass,inputClass,placeholderr}) => {

  return (
    <div className={searchClass}>
      <input
        className={inputClass}
        placeholder={placeholderr}
      />
    </div>  
  );
}

export default SearchInputProp;