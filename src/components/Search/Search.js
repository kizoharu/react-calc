import './Search.css'

const Search = () => {
    const handleKey = (event) => {
        if (event.key === 'Enter') {
            // this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    return (
        <>
            <div className='row'>
                <div className='col s12'>
                    <div className='input-field '>
                        {/* <div class='container'>
                <div class='left-element'> */}
                        <input
                            placeholder='calc'
                            // type='search'
                            className='validate'
                            // value='asdфывфыв'
                            // value={this.state.search}
                            // onChange={(e) => this.setState({ search: e.target.value })}
                            onKeyDown={handleKey}
                        />
                        {/* </div>
                <div class='right-element'> */}
                        {/* <button
                            className='btn search-btn'
                            // onClick={() =>
                            //     this.props.searchMovies(
                            //         this.state.search,
                            //         this.state.type
                            //     )
                            // }
                        >
                            Search
                        </button> */}
                        {/* </div>
            </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
