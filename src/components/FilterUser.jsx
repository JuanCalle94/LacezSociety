import React, {useEffect} from "react";

function FilterUsers({users , setFilteredUser , activeRole , setActiveRole}) {

  useEffect (()=>{
    if(activeRole === 0){
      setFilteredUser(users);
      return;
    }
    const filtered = users.filter((user) => user.role_id == activeRole);
    setFilteredUser(filtered);

  }, [activeRole] )

  return (
    <>
      <div className="nav__general">
        <button className={activeRole === 0 ? 'active' : null} onClick={()=>{setActiveRole(0)}}>Todos</button>
        <button className={activeRole === 2 ? 'active' : null} onClick={()=>{setActiveRole(2)}}>Clientes</button>
        <button className={activeRole === 1 ? 'active' : null} onClick={()=>{setActiveRole(1)}}>Administradores</button>
      </div>
    </>
  );
}

export default FilterUsers;
