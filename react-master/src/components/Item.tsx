
type ItemProps = {
    name: string;
}
function Item ({name}: ItemProps) {
    return (
        <li>{name}</li>
    )
}
export default Item;