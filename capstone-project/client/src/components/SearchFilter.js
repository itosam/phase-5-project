const SearchFilter = ({searchTerm, setSearchTerm}) => {

    return(
        <div>
            Search <input type= "text"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default SearchFilter