import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";
import ConditionTag from "./ConditionTag";

interface ItemCardProps {
  id: number;
  imgSrc: string;
  title: string;
  price: string;
  description: string;
  condition: string;
  user: string;
}

export default function ItemCard(props: ItemCardProps) {
  return (
    <Link href={`/item/${props.id}`} passHref>
      <Card isPressable className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <div className="flex">
            <h1 className="font-bold text-large">{props.title}</h1>
            <ConditionTag condition={props.condition} />
          </div>
          <h2 className="text-tiny uppercase font-bold">{props.price}</h2>
          <p className="text-default-500">{props.user}</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            isZoomed
            alt="Item Picture"
            src={props.imgSrc}
            height={500}
            width={500}
            className="object-cover rounded-xl"
          />
        </CardBody>
      </Card>
    </Link>
  );
}
