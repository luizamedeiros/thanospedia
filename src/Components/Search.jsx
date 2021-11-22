import './style.css';

const Search = ( {searchQuery, setSearchQuery} ) =>{

    return(
        <form action="/" method="get" className="responsiveForm">
            <label htmlFor="searchBar">
                <span className="accessible">Look up a comic</span>
            </label>
            <div className="searchDiv">
            <input
                value= {searchQuery}
                onInput={ event => setSearchQuery(event.target.value)}
                className="searchInput"
                type="text"
                id="searchBar"
                placeholder="Look up a comic..."
                name="search" 
            />
            </div>
        </form>
    )
}
export default Search;