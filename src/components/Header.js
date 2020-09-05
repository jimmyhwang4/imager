import React from "react";
// Import SearchBar to put in Header
import SearchBar from "./SearchBar.js";

// Header for top of Home page
function Header() {

    return (
        <div className="header">
            <div className="headerContent">
                {/* Title / Logo */}
                <a href="/"><div className="logo">
                    <h1>imager</h1>
                </div></a>
                {/* Subtitle */}
                <div className="logo">
                    <p>Discover new images</p>
                </div>
                {/* SearchBar component */}
                <SearchBar />
            </div>
        </div>
    )
}

export default Header;