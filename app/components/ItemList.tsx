import ItemCard from "./ItemCard";
import { getItems } from "@/tools/tools";

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
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description || ""}
          imgSrc={item.imgSrc}
          condition={item.condition}
          user={item.username}
        />
      ))}
    </div>
  );
}
