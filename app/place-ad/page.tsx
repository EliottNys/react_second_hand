import { getCategories } from "@/tools/tools";
import PlaceAdForm from "../components/PlaceAdForm";

export default async function Page() {
  const categories = await getCategories();
  const categoryList = categories.map((category) => [
    category.name,
    category.id,
  ]);
  return <PlaceAdForm categoryList={categoryList} />;
}
