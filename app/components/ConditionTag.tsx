import { Chip, SlotsToClasses } from "@nextui-org/react";

interface ConditionTagProps {
  condition: string;
  alt_design?: boolean;
}

export default function ConditionTag(props: ConditionTagProps) {
  if (props.alt_design) {
    return (
      <Chip
        classNames={{
          base: "bg-gradient-to-br from-indigo-500 to-blue-400 border-small border-white/50 shadow-blue-500/30 h-6 mt-2",
          content: "drop-shadow shadow-black text-white",
        }}
        className="ml-2"
      >
        {props.condition}
      </Chip>
    );
  }
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
