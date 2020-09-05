import React from "react";

// SearchBar for Home page
function SearchBar() {

    // Set user's input value
    const inputValue = null;

    return (
        // Form for search bar and button
        <form autocomplete="off" action="/gallery/" method="get">
            <div className="searchBar">
                <label htmlFor="search"></label>
                {/* Set search bar value as user's input value, then set to "category" */}
                <input class="homeBar" type="text" value={inputValue} placeholder=" Search for images" name="category"/>
                {/* Button */}
                <button class="homeBtn" type="submit"></button>
            </div>
        </form>
    )
}

export default SearchBar;
