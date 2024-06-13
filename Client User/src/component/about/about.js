import React from 'react';
import Nav from '../Nav/Nav';
import './about.css';

const About = () => {
    return (
        <div>
            {/* About Section */}
            <div className="page-row padding-large" id="about">
                <div className="about-content">
                    <div className="page-col m6 padding-large">
                        <img src="https://media.houseandgarden.co.uk/photos/62977da831afd4e1e7dd7930/16:9/w_3391,h_1907,c_limit/JubileeRecipessandwiches_.jpg" className="image round opacity-min" alt="Table Setting" width="600" height="350" />
                    </div>

                    <div className="page-col m6 padding-large">
                        <h1 className="center">About Food Blog</h1><br />
                        <h5 className="center">Active since 2023</h5>
                        <p className="large">The Blog was founded in Islamabad by a small team of 3</p>
                        <p className="large text-grey hide-medium">We are committed to finding the best possible food combinations for you to try while ensuring that the blog provides you with the healthiest and cheapest options. We want to make sure that the options we provide are available to everyone and no one misses out on the wonders of food and the different tastes the world provides.</p>
                    </div>
                </div>
            </div>


            <hr />

            {/* Menu Section */}
            <div className="page-row padding-large" id="menu">
                <div className="menu-content">
                    <div className="page-col l6 padding-large">
                        <h1 className="center">Our Variety</h1><br />
                        <h4>Vegetables</h4>
                        <p className="text-grey">Assortment of baked and cooked vegetables for our meatless options</p><br />

                        <h4>Seafood</h4>
                        <p className="text-grey">A variety of fish, prawns, and many more options for necessary nutrition</p><br />

                        <h4>Salads</h4>
                        <p className="text-grey">Different takes on salads from all over the world with fruits and vegetable salads</p><br />

                        <h4>Deserts</h4>
                        <p className="text-grey">From cookies to pretzels, all sorts of sweet options with easy DIY recipes</p><br />

                        <h4>Meat</h4>
                        <p className="text-grey">Plain and Simple meat dishes that can be cooked by novices</p>
                    </div>

                    <div className="page-col l6 padding-large">
                        <img src="https://ivoryandnoire.com/wp-content/uploads/IMG_8913-scaled.jpg" className="image round opacity-min" alt="Menu" width={700} height={700} />
                    </div>
                </div>
            </div>

            <hr />
        </div>
    );
}

export default About;