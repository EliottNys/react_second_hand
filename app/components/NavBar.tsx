import Link from "next/link";
import { Logo } from "./Logo";
import NavButton from "./NavButton";
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
        <NavButton title="Home" link="." current={true} />
        <NavButton title="Categories" link="categories" />
        <NavButton title="Saved" link="saved" />
        <NavButton title="Place an Ad" link="place-ad" />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
