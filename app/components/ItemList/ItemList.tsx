import ListItem from "../ListItem/ListItem";

export default function ItemList() {
  return (
    <div>
      <ListItem
        title="Fridge"
        imgSrc="/vercel.svg"
        price="100€"
        description="White fridge, good state but noisy"
      />
      <ListItem
        title="Microwave"
        imgSrc="/vercel.svg"
        price="45€"
        description="700W Microwave, almost new."
      />
    </div>
  );
}
