import ProductCard from "../../components/ui-exercices/product/ProductCard";

export default function ProductPage() {
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 59.99,
      image: "https://picsum.photos/300/200?1",
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 99.99,
      image: "https://picsum.photos/300/200?2",
    },
    {
      id: 3,
      title: "Gaming Mouse",
      price: 39.99,
      image: "https://picsum.photos/300/200?3",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}