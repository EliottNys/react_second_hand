import { getItem } from "@/app/api/item/[item]/route";
import Item from "../../components/Item";

export default async function Page({ params }: { params: { item: string } }) {
  const item = await getItem(parseInt(params.item));
  return (
    <div>
      <Item
        title={item?.title || ""}
        sellerName="Paul S."
        publishedDate="12/03/2024"
        description={item?.description || ""}
        price="50€"
        imgSrc="/plant.jpg"
      />
    </div>
  );
}