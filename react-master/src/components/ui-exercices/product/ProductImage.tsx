type Props = {
  src: string;
  alt?: string;
};

export default function ProductImage({ src, alt }: Props) {
  return (
    <img
      src={src}
      alt={alt || "product"}
      style={{
        width: "100%",
        height: "180px",
        objectFit: "cover",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
      }}
    />
  );
}