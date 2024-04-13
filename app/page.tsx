import ItemList from "./components/ItemList";
import Pages from "./components/Pages";

export default function Home(context: any) {
  const page =
    context.searchParams.page === undefined
      ? 1
      : parseInt(context.searchParams.page);
  return (
    <div>
      <ItemList page={page} />
      <Pages />
    </div>
  );
}
