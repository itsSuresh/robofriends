import React from 'react';

const SearchBox = ({searchChange})=>{
    return(
        <div>
            <input style={{height:'50px',width:'200px'}}
                className="tc bg-light-blue ba b--green br2 " 
                type="search" 
                placeholder="search robots here"
                onChange={searchChange}
            >
            </input>
        </div>
    );
}

export default SearchBox;