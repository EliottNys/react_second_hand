import ItemCard from "./ItemCard";

export default function ItemList() {
  return (
    <div className="grid grid-cols-4 gap-3">
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
      <ItemCard
        title="Washing Machine"
        price="80€"
        description="Front-loading washing machine, energy-efficient, gently used."
        imgSrc="/plant.jpg"
      />
      <ItemCard
        title="Sofa Set"
        price="150€"
        description="Three-piece sofa set, comfortable, with washable covers."
        imgSrc="/plant.jpg"
      />
      <ItemCard
        title="Bicycle"
        price="60€"
        description="Mountain bike, 21 gears, suitable for off-road and city cycling."
        imgSrc="/plant.jpg"
      />
      <ItemCard
        title="Television"
        price="120€"
        description="42-inch LED TV, full HD, excellent picture quality."
        imgSrc="/plant.jpg"
      />
      <ItemCard
        title="Coffee Table"
        price="25€"
        description="Wooden coffee table, vintage design, in good condition."
        imgSrc="/plant.jpg"
      />
      <ItemCard
        title="Desk Chair"
        price="30€"
        description="Ergonomic office chair, adjustable height, black leather."
        imgSrc="/plant.jpg"
      />
      <ItemCard
        title="Bookshelf"
        price="40€"
        description="Tall wooden bookshelf, spacious, suitable for books and decor."
        imgSrc="/plant.jpg"
      />
      <ItemCard
        title="Laptop"
        price="300€"
        description="15-inch laptop, Intel i5 processor, 8GB RAM, 256GB SSD."
        imgSrc="/plant.jpg"
      />
      <ItemCard
        title="Guitar"
        price="75€"
        description="Acoustic guitar, well-maintained, perfect for beginners."
        imgSrc="/plant.jpg"
      />
    </div>
  );
}
