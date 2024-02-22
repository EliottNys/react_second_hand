import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

interface ItemCardProps {
  imgSrc: string;
  title: string;
  price: string;
  description: string;
}

export default function ItemCard(props: ItemCardProps) {
  return (
    <Card isPressable className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h1 className="font-bold text-large">{props.title}</h1>
        <h2 className="text-tiny uppercase font-bold">{props.price}</h2>
        <p className="text-default-500">{props.description}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Item Picture"
          src={props.imgSrc}
          width={270}
          height={270}
          className="object-cover rounded-xl"
        />
      </CardBody>
    </Card>
  );
}
