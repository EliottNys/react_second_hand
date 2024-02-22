import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";

interface NavButtonProps {
  title: string;
  link: string;
  current?: boolean;
}

export default function NavButton(props: NavButtonProps) {
  return (
    <NavbarItem>
      <Link
        href={props.link}
        color="foreground"
        aria-current={props.current ? "page" : "false"}
      >
        {props.title}
      </Link>
    </NavbarItem>
  );
}
