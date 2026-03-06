import { Notebook } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center py-24 gap-3 flex-col">
      <p className="text-3xl font-bold text-green-800 flex items-center gap-2">
        Welcome to the Warm-up Exercise Planner <Notebook className="size-8" />
      </p>
      <p className="text-slate-500">
        This is the homepage. Use the navigation links to explore!
      </p>
    </div>
  );
}
