import "./index.css";

const Cart = (data) => {
  console.log(data);
  let total = 0;

  return (
    <div className="cart">
      <div className="cart-content">
        <button className="validate-cart">Valider mon panier</button>
        <div className="commande">
          {data.lineCart.length > 0 &&
            data.lineCart.map((item, index) => {
              total += item.amount * item.price;
              return (
                <div key={item.id} className="article">
                  <div className="counter">
                    <button
                      onClick={() => {
                        const newTab = [...data.lineCart];
                        newTab[index].amount -= 1;
                        data.setLineCart(newTab);
                      }}
                    >
                      -
                    </button>
                    <span>{item.amount}</span>
                    <button
                      onClick={() => {
                        const newTab = [...data.lineCart];
                        newTab[index].amount += 1;
                        data.setLineCart(newTab);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="article">
                    <span>{item.title}</span>
                    <span>{item.amount * item.price} €</span>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="tot">
          <span>Sous-total</span>
          <span>{total.toFixed(2)} €</span>
        </div>
        <div className="article">
          <span>Frais de livraison</span>
          <span>2,5 €</span>
        </div>
        <div className="tot">
          <span>Total</span>
          <span>{(total + 2.5).toFixed(2)} €</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
