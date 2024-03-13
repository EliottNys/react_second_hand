import { Input } from "@nextui-org/react";

export default function Page() {
  return (
    <div className="m-auto">
      <h1 className="p-3 m-auto w-24">Sign Up:</h1>
      <div className="p-3 grid grid-cols-2 gap-3">
        <Input isRequired type="username" label="username">
          username
        </Input>
        <Input isRequired type="email" label="email">
          email
        </Input>
        <Input isRequired type="password" label="password">
          password
        </Input>
        <Input isRequired type="password" label="repeat password">
          repeat password
        </Input>
      </div>
    </div>
  );
}
