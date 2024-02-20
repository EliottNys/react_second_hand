import NavButton from "../NavButton/NavButton";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";

export default function NavigationBar() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p>INSERT LOGO HERE</p>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavButton title="Home" link="home" />
        <NavButton title="Categories" link="catgories" />
        <NavButton title="Saved" link="saved" />
      </NavbarContent>
    </Navbar>
  );
}
