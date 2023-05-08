import PropTypes from 'prop-types';


const SearchMovies = ({onSubmit}) => {
    
    const handelsubmit = e => {
        e.preventDefault();
        const query = e.target.elements.query.value;
        if (query === '') {
            alert('Please enter something');
            return
        } else {
            onSubmit(query);
            e.target.reset();
        }
}

    return (
        <form onSubmit={handelsubmit}>
            <input name="query" type="text" placeholder='Search movies' ></input>
            <button>Search</button>
        </form>
    )

}

SearchMovies.propTypes = {
    onSubmit:PropTypes.func.isRequired,
}
export default SearchMovies;