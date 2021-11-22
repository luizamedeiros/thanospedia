import './style.css';

const Search = ( {searchQuery, setSearchQuery} ) =>{

    return(
        <form action="/" className="responsiveForm" onSubmit={(e)=>{
            e.preventDefault();
        }}>
        <label htmlFor="searchBar">
            <span className="accessible">Pesquisar por um quadrinho</span>
        </label>
        <div className="searchDiv">
        <input
            value= {searchQuery}
            onInput={ event => setSearchQuery(event.target.value)}
            className="searchInput"
            type="text"
            id="searchBar"
            placeholder="Achar um quadrinho..."
            name="search" 
        />
        </div>
        </form>
    )
}
export default Search;