
import React, { Component } from 'react'; 
import rickAndMorty from 'rick-and-morty';
// state less component 
const Home = () => {
    let rickNmortyImg = rickAndMorty.random();

    return (
        <div>
           <h1>home</h1>
            <p> Rick and Morty Quoutes App </p>
            <img src={rickNmortyImg} />  
        </div>
     

    )
} 

export default Home