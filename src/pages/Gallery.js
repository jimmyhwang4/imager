import React, { useEffect, useState } from "react";
// Import axios to call API
import axios from "axios";
// Import useHistory to for navigation based on category input
import { useHistory } from "react-router-dom";

// Import components for Gallery
import GalleryHeader from "../components/GalleryHeader.js";
import Footer from "../components/Footer.js";

// Import third party node module for enlarging images on click
import ModalImage from "react-modal-image";

function Gallery() {

    // Set "category" and "setCategory" for category input
    const [category, setCategory] = useState(null);
    let history = useHistory();

    // Params for "category" and "setCategory" based on the input
    // History for navigation based on the input
    useEffect(() => {
        let searchParams = history.location.search;
        let urlParams = new URLSearchParams(searchParams);
        let category = urlParams.get("category");
        if (category) {
          setCategory(category);
        }
      },[history]);

    // Imgur API call starts here
    class Images extends React.Component {
        
        state = {
            // Empty array for images
            images: [],
            // Message when images are loading
            isLoading: true,
            // Errors for image loading
            errors: null,
            // Input value for category
            inputValue: ""
        };

        // Imgur API URL and Authorization
        getImages() {
            const config = {
                method: 'get',
                // URL with category input variable
                url: 'https://api.imgur.com/3/gallery/search/?q=' + category,
                headers: { 
                'Authorization': 'Client-ID b067d5cb828ec5a',
                }
            };

            // Axios
            axios(config)
                .then(response =>
                    // Map data from cURL and assign to variables
                    response.data.data.map(images => ({
                        id: `${images.id}`,
                        cover: `${images.cover}`,
                        title: `${images.title}`
                    }))
                )
                // Loading image conditions
                .then(images => {
                    this.setState({
                        images,
                        isLoading: false
                    });
                })
                .catch(error => this.setState({error, isLoading: false }));
        }

        // Mount variables linked to API data
        componentDidMount() {
            this.getImages();
        }

        render() {
            const { isLoading, images } = this.state;

            // Imgur API return
            return (
                <div>
                    {/* Header component at top */}
                    <GalleryHeader />
                        <div className="wrapper">
                            {/* Show user their category input */}
                            <div className="resultsText">
                                <p>Your results for "{category}"</p>
                            </div>
                            <section id="gallery">
                                {/* Call images in category gallery based on its cover code */}
                                {!isLoading ? (
                                    images.map(imagesInfo => {
                                        const { id, cover, title } = imagesInfo;
                                        const imgUrl = "https://i.imgur.com/" + cover + ".jpg";

                                        return (
                                            <div key={id}>
                                                {/* ModalImage node module */}
                                                <ModalImage
                                                    small={imgUrl}
                                                    large={imgUrl}
                                                    alt={title}
                                                />;
                                            </div>
                                        );

                                    })

                                ) : (
                                    // Loading message
                                    <div className="loading">
                                        <p>. . .</p>
                                    </div>
                                )}
                            </section>
                        </div>
                    {/* Footer at the bottom of page */}
                    <Footer />
                </div>
            );
        }
    }

    // Return Images class
    return (
        <Images />
    )
}

export default Gallery;