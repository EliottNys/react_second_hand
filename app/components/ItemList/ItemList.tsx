import ItemCard from "../ItemCard/ItemCard";

export default function ItemList() {
  return (
    <div className="w-1/3">
      <ItemCard
        title="Fridge"
        price="100€"
        description="White fridge, good state but noisy"
        imgSrc="/vercel.svg"
      />
      <ItemCard
        title="Microwave"
        price="45€"
        description="700W Microwave, almost new."
        imgSrc="/vercel.svg"
      />
      <ItemCard
        title="Firewood"
        price="Best offer"
        description="Oak wood, 1m long, 30cm diameter, price negotiable. Cut in 2020."
        imgSrc="/vercel.svg"
      />
    </div>
  );
}
