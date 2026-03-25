type Props = {
  message?: string;
};

export default function ErrorMessage({ message }: Props) {
  if (!message) return null;

  return (
    <p style={{ color: "red", fontSize: "14px", margin: "5px 0" }}>
      {message}
    </p>
  );
}