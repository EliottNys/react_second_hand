import { Pagination } from "@nextui-org/react";

export default function Pages() {
  return (
    <Pagination
      showControls
      size="lg"
      total={15}
      initialPage={1}
      className="p-5 display-flex justify-center"
    />
  );
}
