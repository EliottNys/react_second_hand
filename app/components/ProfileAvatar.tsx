import { auth } from "@/auth";
import { Avatar } from "@nextui-org/react";

export default async function ProfileAvatar() {
  const session = await auth();
  return (
    <Avatar
      isBordered
      as="button"
      className="transition-transform"
      color="primary"
      size="sm"
      src={session?.user?.image || ""}
    ></Avatar>
  );
}
