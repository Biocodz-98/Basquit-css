import React from "react";  
import Pet from "./Pet";  

const Results = ({ pets }) => {
  return (
    <div className='search'>
      {!pets.length ? (
      <h1>No pets found</h1>
): (
  pets.map([pets] => {
    <Pet
    animal={pets.animal}
    name = {pets.name}
    breed = {pets.breed}
    images = {pets.images}
    location = {`${pet.city}, ${pet.state}`}
    key={pets.id}
    />
})
    )}

    </div>
  );
};

export default Results;