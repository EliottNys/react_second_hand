import { Image } from "@nextui-org/react";
import ConditionTag from "./ConditionTag";

interface ItemProps {
  title: string;
  sellerName: string;
  publishedDate: string;
  price: string;
  description: string;
  imgSrc: string;
  condition: string;
  category: string;
}

export default function Item(props: ItemProps) {
  return (
    <div className="grid grid-cols-2">
      <Image isZoomed src={props.imgSrc} alt="Item Picture" width={800} />
      <div className="p-3">
        <div className="flex">
          <h1 className="text-3xl pb-1 text-primary-400 font-bold">
            {props.title}
          </h1>
          <ConditionTag alt_design={true} condition={props.condition} />
        </div>
        <p>
          <span className="mx-2 font-semibold">{props.sellerName}</span>
          <span className="mx-2 italic text-sm">{props.publishedDate}</span>
        </p>
        <p className="mx-2 italic">category: {props.category}</p>
        <p className="text-2xl text-red-500 py-3 font-bold">{props.price}</p>
        <p className="pr-10">{props.description}</p>
      </div>
    </div>
  );
}
