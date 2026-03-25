import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import AddToCartButton from "./AddToCartButton";

type Props = {
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ title, price, image }: Props) {
  const handleAdd = () => {
    alert(`${title} added to cart!`);
  };

  return (
    <div
      style={{
        width: "250px",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <ProductImage src={image} />
      <ProductDetails title={title} price={price} />
      <AddToCartButton onAdd={handleAdd} />
    </div>
  );
}