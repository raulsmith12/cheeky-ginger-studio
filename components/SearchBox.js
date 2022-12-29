const SearchBox = ({ searchChange, category }) => {
    return (
        <div className="mb-3 input-group">
            <span className="input-group-text">Search {category}</span>
            <input type="text" className="form-control" onChange={(e) => {searchChange(e.target.value.toLocaleLowerCase())}} />
        </div>
    )
}

export default SearchBox;