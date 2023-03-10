import React from "react";
import "./styles.scss";

export default  function Card({pokemon, loading,infoPokemon}) {
  console.log(pokemon);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item,id) => {
          return (
            <>
              <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                <h2 >{item.id }</h2>
                <img  src={item.sprites.front_default} alt="" />
                <h2>{item.name}</h2>
              </div>
            </>
          );
        })
      )}
    </div>
  );
}
