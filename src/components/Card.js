import React from 'react';


const Card = ({name,email,id})=>{
      return(
        <div className="bg-light-green dib ma3 pa3 bw2 br3 shadow-5 grow tc">
            <img src={`https://robohash.org/${id}?200x200`} alt="robo"></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
      
    );
}

export default Card;