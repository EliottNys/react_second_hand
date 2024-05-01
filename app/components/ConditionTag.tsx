import { Chip } from "@nextui-org/react";

interface ConditionTagProps {
  condition: string;
  margin?: boolean;
}

export default function ConditionTag(props: ConditionTagProps) {
  return (
    <Chip
      classNames={{
        base: "bg-gradient-to-br from-indigo-500 to-blue-400 border-small border-white/50 shadow-blue-500/30",
        content: "drop-shadow shadow-black text-white",
      }}
      className="ml-2"
    >
      {props.condition}
    </Chip>
  );
}
