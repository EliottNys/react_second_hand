import Link from "next/link";
import { Button, NavbarContent, NavbarItem } from "@nextui-org/react";

export default function SignInButtons() {
  return (
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link href="/api/auth/signin">Sign in with Google</Link>
      </NavbarItem>
      <NavbarItem className="hidden lg:flex">
        <Link href="login">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="signup" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  );
}
