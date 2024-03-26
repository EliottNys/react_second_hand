import { auth } from "@/auth";

export default async function ProfileName() {
  const session = await auth();
  return <p>{session?.user?.name}</p>;
}
