import { getCategories } from "../api/categories/route";
import PlaceAdForm from "../components/PlaceAdForm";

export default async function Page() {
  const categories = await getCategories();
  const categoryList = categories.map((category) => [
    category.name,
    category.id,
  ]);
  console.log(categoryList);
  return <PlaceAdForm categoryList={categoryList} />;
}
