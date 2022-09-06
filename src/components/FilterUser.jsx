import React, {useEffect} from "react";

function FilterUsers({users , setFilteredUser , activeRole , setActiveRole}) {

  useEffect (()=>{
    if(activeRole === 2){
      setFilteredUser(users.filter((user) => user.role_id == 2));
      return;
    }
    const filtered = users.filter((user) => user.role_id == activeRole);
    setFilteredUser(filtered);

  }, [activeRole] )

  return (
    <React.StrictMode>
      <div className="nav__general">
        <button className={activeRole === 2 ? 'active' : null} onClick={()=>{setActiveRole(2)}}>Clientes</button>
        <button className={activeRole === 1 ? 'active' : null} onClick={()=>{setActiveRole(1)}}>Administradores</button>
      </div>
    </React.StrictMode>
  );
}

export default FilterUsers;
