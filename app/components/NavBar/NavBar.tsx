import Link from "next/link";
import { Logo } from "../Logo/Logo";
import NavButton from "../NavButton/NavButton";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export default function NavigationBar() {
  return (
    <Navbar shouldHideOnScroll isBordered className="rounded-lg bg-blue">
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">Second Life</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavButton title="Home" link="home" current={true} />
        <NavButton title="Categories" link="catgories" />
        <NavButton title="Saved" link="saved" />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
