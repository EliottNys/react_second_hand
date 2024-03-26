import { NavbarContent } from "@nextui-org/react";
import ProfileAvatar from "./ProfileAvatar";
import ProfileName from "./ProfileName";
import { Session } from "next-auth";
import SignInButton from "./SignInButton";

interface ProfileButtonProps {
  session: Session | null;
}

export default function ProfileButton(props: ProfileButtonProps) {
  if (props.session) {
    return (
      <NavbarContent justify="end">
        <ProfileName />
        <ProfileAvatar />
      </NavbarContent>
    );
  } else {
    return <SignInButton />;
  }
}
