import { Input } from "@nextui-org/react";

export default function page() {
  return (
    <div>
      <h1 className="p-3">Login:</h1>
      <div className="p-3 grid grid-cols-1 gap-3">
        <Input type="username" label="Username" />
        <Input type="password" label="Password" />
      </div>
    </div>
  );
}
