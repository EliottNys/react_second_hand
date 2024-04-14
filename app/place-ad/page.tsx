import { getCategories } from "../api/categories/route";
import PlaceAdForm from "../components/PlaceAdForm";

export default async function Page() {
  const categories = await getCategories();
  const categoryNames = categories.map((category) => category.name);
  return <PlaceAdForm categories={categoryNames} />;
}
