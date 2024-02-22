import { Logo } from "../Logo/Logo";
import NavButton from "../NavButton/NavButton";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";

export default function NavigationBar() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">Second Life</p>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavButton title="Home" link="home" />
        <NavButton title="Categories" link="catgories" />
        <NavButton title="Saved" link="saved" />
      </NavbarContent>
    </Navbar>
  );
}
