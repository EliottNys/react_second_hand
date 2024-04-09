import ItemCard from "./ItemCard";
import { getItems } from "../api/items/route";

interface ItemListProps {
  page: number;
}

export default async function ItemList(props: ItemListProps) {
  let page = props.page;
  const items = await getItems(page);
  return (
    <div className="grid grid-cols-4 gap-3">
      {items?.map((item: any) => (
        <ItemCard
          title={item.title}
          price="100€"
          description={item.description || ""}
          imgSrc="/plant.jpg"
        />
      ))}
    </div>
  );
}
