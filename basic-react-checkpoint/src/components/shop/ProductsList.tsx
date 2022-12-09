import Product from "./Product";
import "./ProductsList.scss";
import useFetchPLP from "../Hooks/useFetchPLP";

const ProductsList = () => {
  // const [products, setProducts] = useState<ListItems[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("https://fakestoreapi.com/products?limit=6");
  //     if (!response.ok) {
  //       throw new Error("Something went wrong :(");
  //     }

  //     const responseData = await response.json();

  //     const productsList: Items[] = [];

  //     for (const key in responseData) {
  //       productsList.push({
  //         id: key,
  //         title: responseData[key].title,
  //         image: responseData[key].image,
  //         price: responseData[key].price,
  //         quantity: 0,
  //         totalPrice: 0,
  //       });
  //     }

  //     setProducts(productsList);
  //   };
  //   fetchData();
  // }, []);

  const products = useFetchPLP("https://fakestoreapi.com/products?limit=6");

  return (
    <>
      <div className="plp-container">
        {products?.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
