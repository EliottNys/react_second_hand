import Item from "../components/Item";

export default function Page() {
  return (
    <div>
      <Item
        title="Houseplant assortment"
        sellerName="Paul S."
        publishedDate="12/03/2024"
        description="Beautiful assortment of houseplants, including Pachira aquatica Aubl., aloe vera, snake plant, and more. Perfect for indoor decoration."
        price="50€"
        imgSrc="/plant.jpg"
      />
    </div>
  );
}
