import Link from "next/link";
import { Logo } from "./Logo";
import NavButton from "./NavButton";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import SignInButtons from "./SignInButtons";

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
      <SignInButtons />
    </Navbar>
  );
}
