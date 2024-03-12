import { Image } from "@nextui-org/react";

interface ItemProps {
  title: string;
  price: string;
  description: string;
  imgSrc: string;
}

export default function Item(props: ItemProps) {
  return (
    <div>
      <Image isZoomed src={props.imgSrc} alt="Item Picture" width={800} />
      <h1>{props.title}</h1>
      <p>{props.price}</p>
      <p>{props.description}</p>
    </div>
  );
}
