import { getItem } from "@/app/api/item/[item]/route";
import Item from "../../components/Item";

export default async function Page({ params }: { params: { item: string } }) {
  const item = await getItem(parseInt(params.item));
  return (
    <div>
      <Item
        title={item?.title || ""}
        sellerName={item?.username || ""}
        publishedDate="12/03/2024"
        description={item?.description || ""}
        price={(item?.price.toString() || "0.0") + "€"}
        imgSrc={item?.imgSrc || ""}
        condition={item?.condition || ""}
        category={item?.category?.name || ""}
      />
    </div>
  );
}
