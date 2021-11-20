import './CardGenerator.css';

const Search = () =>{
    return(
        
        <form action="/" method="get">
            <label htmlFor="searchBar">
                <span className="accessible">Look up a comic</span>
            </label>
            <div className="searchDiv">
            <input
                className="searchInput"
                type="text"
                id="searchBar"
                placeholder="Look up a comic..."
                name="s" 
            />
            <button type="submit">Search</button>
            </div>
        </form>
    )
}
export default Search;