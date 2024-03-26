import { Logo } from "./Logo";
import NavButton from "./NavButton";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import ProfileButton from "./ProfileButton";
import { auth } from "@/auth";

export default async function NavigationBar() {
  const session = await auth();
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
      <ProfileButton session={session} />
    </Navbar>
  );
}
