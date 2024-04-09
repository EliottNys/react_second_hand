"use client";
import { Pagination } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Pages() {
  const router = useRouter();

  function changePage(page: number) {
    router.push(`?page=${page}`);
  }
  return (
    <Pagination
      showControls
      size="lg"
      total={15}
      initialPage={1}
      className="p-5 display-flex justify-center"
      onChange={(page) => changePage(page)}
    />
  );
}
