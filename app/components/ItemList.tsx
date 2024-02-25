import ItemCard from "./ItemCard";

export default function ItemList() {
  return (
    <div className="grid grid-cols-4">
      <ItemCard
        title="Fridge"
        price="100€"
        description="White fridge, good state but noisy"
        imgSrc="/plant.jpg"
      />
      <ItemCard
        title="Microwave"
        price="45€"
        description="700W Microwave, almost new."
        imgSrc="/plant.jpg"
      />
      <ItemCard
        title="Firewood"
        price="Best offer"
        description="Oak wood, 1m long, 30cm diameter, price negotiable. Cut in 2020."
        imgSrc="/plant.jpg"
      />
    </div>
  );
}
