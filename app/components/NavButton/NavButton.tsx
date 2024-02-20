import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";

interface NavButtonProps {
  title: string;
  link: string;
}

export default function NavButton(props: NavButtonProps) {
  return (
    <NavbarItem>
      <Link href={props.link}>{props.title}</Link>
    </NavbarItem>
  );
}
