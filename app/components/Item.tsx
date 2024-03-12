import { Image } from "@nextui-org/react";

interface ItemProps {
  title: string;
  sellerName: string;
  publishedDate: string;
  price: string;
  description: string;
  imgSrc: string;
}

export default function Item(props: ItemProps) {
  return (
    <div className="grid grid-cols-2">
      <Image isZoomed src={props.imgSrc} alt="Item Picture" width={800} />
      <div>
        <h1 className="text-3xl pb-1">{props.title}</h1>
        <p>
          <span className="mx-2 font-semibold">{props.sellerName}</span>
          <span className="mx-2 italic text-sm">{props.publishedDate}</span>
        </p>
        <p className="text-2xl text-red-500 py-3 font-bold">{props.price}</p>
        <p className="pr-10">{props.description}</p>
      </div>
    </div>
  );
}
