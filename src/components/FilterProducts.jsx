import React, {useEffect} from "react";

function FilterProducts({products , setFiltered , activeCategory , setActiveCategory}) {

  useEffect (()=>{
    if(activeCategory === 0){
      setFiltered(products);
      return;
    }
    const filtered = products.filter((product) => product.category == activeCategory);
    setFiltered(filtered);

  }, [activeCategory] )

  return (
    <>
      <div className="nav__general">
        <button className={activeCategory === 0 ? 'active' : null} onClick={()=>{setActiveCategory(0)}}>Todos</button>
        <button className={activeCategory === 1 ? 'active' : null} onClick={()=>{setActiveCategory(1)}}>Nuevo</button>
        <button className={activeCategory === 2 ? 'active' : null} onClick={()=>{setActiveCategory(2)}}>Retro</button>
      </div>
    </>
  );
}

export default FilterProducts;
