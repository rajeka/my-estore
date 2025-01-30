import "./_products.scss";

const Products = () => {
  const productData = [
    { id: 1, name: "Jacket", price: 75, img: "shop-1.jpg" },
    { id: 2, name: "Purse", price: 45, img: "shop-2.jpg" },
    { id: 3, name: "Dress", price: 45, img: "shop-3.jpg" },
    { id: 4, name: "Denim", price: 45, img: "shop-4.jpg" },
    { id: 5, name: "Boots", price: 45, img: "shop-5.jpg" },
    { id: 5, name: "Bag", price: 65, img: "shop-6.jpg" },
  ];
  return (
    <div className="product-container">
      {productData.map((prod, key) => {
        return (
          <div className="mx-5 p-3  product-card" key={prod.id}>
            <div className="product-image-container">
              <img src={require(`../../assets/images/${prod.img}`)} alt="" />
            </div>
            <div className="product-info">
              <h5>
                <a href="">{prod.name}</a>
              </h5>
              <p className="product-price">${prod.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
