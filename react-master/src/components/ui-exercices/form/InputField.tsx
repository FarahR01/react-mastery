type Props = {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({
  label,
  type = "text",
  value,
  onChange,
}: Props) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginTop: "5px",
        }}
      />
    </div>
  );
}