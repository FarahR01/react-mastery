type AvatarProps = {
  src: string;
  alt?: string;
};

export default function Avatar({ src, alt }: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt || "avatar"}
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
  );
}