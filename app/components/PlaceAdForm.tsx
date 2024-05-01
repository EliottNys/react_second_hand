"use client"; //necessary for Select component apparently ¯\_(ツ)_/¯

import {
  Button,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PlaceAdFormProps {
  categoryList: Array<any>;
}

export default function PlaceAdForm(props: PlaceAdFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);
  const [category, setCategory] = useState(0);

  const router = useRouter();
  const createAd = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await fetch("/api/item", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        categoryId: category,
      }),
    });
    router.refresh();
  };
  return (
    <div>
      <h1 className="p-3 m-auto w-44 text-2xl">Place an Ad:</h1>
      <div className="p-3 grid grid-cols-4 gap-3">
        <Input
          type="title"
          label="Title"
          isRequired
          className="col-span-4"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          type="description"
          label="Description"
          className="col-span-4"
          minRows={5}
          maxRows={15}
          onChange={(e) => setDescription(e.target.value)}
        />
        <RadioGroup
          className="col-span-4 bg-white rounded-lg p-3"
          label="Condition"
          orientation="horizontal"
        >
          <Radio value={"New"}>New</Radio>
          <Radio value={"Like New"}>Like New</Radio>
          <Radio value={"Very Good"}>Very Good</Radio>
          <Radio value={"Good"}>Good</Radio>
          <Radio value={"Acceptable"}>Acceptable</Radio>
        </RadioGroup>
        <Input
          type="number"
          label="Price"
          isRequired
          endContent={
            <div className="flex items-center">
              <label className="sr-only" htmlFor="currency">
                Currency
              </label>
              <select
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                <option>EUR</option>
                <option>USD</option>
              </select>
            </div>
          }
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <Select
          label="Select a Category"
          onChange={(e) => setCategory(parseInt(e.target.value))}
          isRequired
        >
          {props.categoryList.map((category) => (
            <SelectItem
              className="text-black"
              key={category[1]}
              value={category[1]}
            >
              {category[0]}
            </SelectItem>
          ))}
        </Select>
        {/* Image */}
      </div>
      <Button className="m-3" color="primary" onClick={createAd}>
        Place the ad
      </Button>
    </div>
  );
}
