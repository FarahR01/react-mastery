import Item from "./Item";

type ItemListProps = {
  items: string[];
};

function ItemList({ items }: ItemListProps) {
  return (
    <ul>
      {items.map((name) => (
        <Item key={name} name={name} />
      ))}
    </ul>
  );
}

export default ItemList;