import { createContext, useState } from "react";

export const ProductContext = createContext({
  products: [],
  toggleFav: (id) => {},
});

const ProductProvider = (props) => {
  const [productList, setProductList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFav = (id) => {
    setProductList((currProdList) => {
      const prodIndex = currProdList.findIndex((p) => p.id === id);
      const newFavStatus = !currProdList[prodIndex].isFavorite;
      const updatedProducts = [...currProdList];
      updatedProducts[prodIndex] = {
        ...currProdList[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };
  return (
    <ProductContext.Provider
      value={{ products: productList, toggleFav: toggleFav }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
