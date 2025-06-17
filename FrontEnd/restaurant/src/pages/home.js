import React from "react";
import '../assets/home.css';
import NavBar from "../components/navbar";


const Home = () => {
    return (
        <div id="body">
            <header>
                <NavBar />
            </header>
            <div>
                <h1>Welcome to * Insert restaurant's name *</h1>
            </div>
            <article>
                <h2>Where Flavor Meets Atmosphere</h2>
                <p>Step into a world of rich aromas, delicious cuisine, and warm hospitality. At [Restaurant Name],
                    we blend traditional recipes with modern creativity to bring you a dining experience that's both comforting
                    and unforgettable.
                    Whether you're craving a romantic dinner, a family celebration, or a quick lunch with colleagues, our menu
                    has something for every appetite.</p>
                <hr />
                <h2>What We Offer.</h2>
                <ul>
                    <li>Fresh, locally-sourced ingredients</li>
                    <li>Chef-crafted dishes made to order</li>
                    <li>Cozy and elegant dining atmosphere</li>
                    <li>Friendly, attentive service</li>
                    <li>Takeout & online reservations</li>
                </ul>
                <hr />
                <h2>Hours</h2>
                <p>Mon-Sun: 11 AM - 10 PM (Restaurant)</p>
                <p>📍 [123 Main Street, YourCity]</p>
                <hr />
            </article>
            <footer></footer>
        </div>
    )
}

export default Home;