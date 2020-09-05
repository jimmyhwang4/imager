import React from "react";
// Import GallerySearchBar to put in GalleryHeader
import GallerySearchBar from "./GallerySearchBar.js";

// Header for top of Gallery page
function GalleryHeader() {

    return (
        <div className="galleryHeader">
            <div className="galleryHeaderContent">
                {/* Title / Logo */}
                <a href="/"><div className="logo">
                    <h3>imager</h3>
                </div></a>
                {/* GallerySearchBar component */}
                <GallerySearchBar />
            </div>
        </div>
    )
}

export default GalleryHeader;