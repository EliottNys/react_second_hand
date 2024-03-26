import Link from "next/link";
import { Button, NavbarContent, NavbarItem } from "@nextui-org/react";

export default function SignInButton() {
  return (
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Button
          as={Link}
          color="primary"
          href="/api/auth/signin"
          variant="flat"
        >
          Sign In
        </Button>
      </NavbarItem>
    </NavbarContent>
  );
}
