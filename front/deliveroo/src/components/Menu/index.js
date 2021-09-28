import "./index.css";
import Item from "../Items";

const Menu = ({ data, lineCart, setLineCart }) => {
  return (
    <div className="categorie">
      {data.map((category, index) => {
        return (
          // if inline (if sans else)
          category.meals.length > 0 && (
            <div key={index}>
              <h2>{category.name}</h2>
              <Item
                data={category.meals}
                lineCart={lineCart}
                setLineCart={setLineCart}
              />
            </div>
          )
        );
      })}
    </div>
  );
};

export default Menu;
