import './SearchBar.css'

const SearchBar = ( {onChangeText} ) => {
    return (
        <>
        <form>
            <label htmlFor="">Producto</label>
            <input 
            onChange={onChangeText}
            type="search"
            name="search"
            id="search"
            placeholder="Reloj, Mochila..." 
            />
        </form>
        </>
    )
}

export default SearchBar;