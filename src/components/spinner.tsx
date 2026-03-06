import { Loader2Icon } from "lucide-react";

export default function Spinner() {
  return (
    <div className="h-80 flex items-center justify-center">
      <Loader2Icon className="animate-spin size-8" />
    </div>
  );
}
