import "./index.css";

const Item = ({ data, lineCart, setLineCart }) => {
  return (
    <div className="item">
      {data.map((item) => {
        return (
          <div
            className="item-content"
            key={item.id}
            onClick={() => {
              // copie du panier en cours
              const newTab = [...lineCart];
              let isIdFound = false;
              // pour chaque article dans le panier
              for (let i = 0; i < newTab.length; i++) {
                // vérifier si id de l'article du panier est comme celui de l'article à ajouter
                if (newTab[i].id === item.id) {
                  // si oui augmenter la quantité
                  isIdFound = true;
                  newTab[i].amount += 1;
                }
              }
              // si l'article n'est pas déjà dans le panier
              if (isIdFound === false) {
                newTab.push({
                  amount: 1,
                  id: item.id,
                  title: item.title,
                  price: item.price,
                });
              }
              // ce tableau sera parcouru pour afficher le panier
              setLineCart(newTab);
            }}
          >
            <div className="item-description">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div>
                <span>{item.price} €</span>
                {item.populate && <span>Populate</span>}
              </div>
            </div>
            {item.picture && <img src={item.picture} alt={item.title} />}
          </div>
        );
      })}
    </div>
  );
};

export default Item;
