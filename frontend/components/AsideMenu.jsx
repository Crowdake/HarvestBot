import React, { useState, useEffect } from "react";

const AsideMenu = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Mi cultivo",
    },
    {
      id: 2,
      name: "Plantas",
    },
    {
      id: 3,
      name: "Estadísticas",
    },
  ]);

  useEffect(() => {
    // Carga las categorías
    setCategories([
      {
        id: 1,
        name: "Mi cultivo",
      },
      {
        id: 2,
        name: "Plantas",
      },
      {
        id: 3,
        name: "Estadísticas",
      },
    ]);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategorySelect = (categoryId) => {
    onSelect(categoryId);
  };

  return (
    <div style={{width:500, height:'100vh', backgroundColor:'#87BBA2', margin:0}}>
      <div className="aside-menu__header">
        <input
          type="text"
          placeholder="Buscar"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <ul className="aside-menu__list" style={{}}>
        {categories.map((category) => (
          <li
            key={category.id}
            className={category.id === searchTerm ? "active" : ""}
            onClick={() => handleCategorySelect(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsideMenu;   
