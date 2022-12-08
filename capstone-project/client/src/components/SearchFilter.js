const SearchFilter = ({searchTerm, setSearchTerm}) => {

    return (
      <div>
        <input
          type="text"
          value={searchTerm}
          placeholder="   Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "90%", height: "3rem",border:"solid black 1px", borderRadius:"0px"}}
        />
        <button className="search_button">🡪</button>
      </div>
    );
}

export default SearchFilter