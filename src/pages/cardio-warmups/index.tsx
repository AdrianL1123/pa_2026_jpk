import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getCardioWarmups } from "../../utils/api";
import { Loader2Icon } from "lucide-react";
import Spinner from "../../components/spinner";
import Error from "../../components/error";

export default function CardioWarmups() {
  const [intensity, setIntensity] = useState("all");
  const [sort, setSort] = useState("none");

  const {
    data: cardio = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["cardio-warmups", intensity, sort],
    queryFn: () => getCardioWarmups(intensity, sort),
  });

  if (isError) {
    return <Error />;
  }

  return (
    <div className="px-48 py-12">
      <p className="text-2xl text-green-800 font-bold">Cardio Warmups</p>
      <div className="flex items-start lg:items-center gap-4 py-8 flex-col lg:flex-row">
        <div className="flex items-center gap-2">
          <p>Filter by intensity: </p>
          <select
            className="border rounded-lg bg-white p-1"
            value={intensity}
            onChange={(e) => setIntensity(e.target.value)}
          >
            <option value={"all"}>All</option>
            <option value={"low"}>Low</option>
            <option value={"medium"}>Medium</option>
            <option value={"high"}>High</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <p>Sort by: </p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-lg bg-white p-1"
          >
            <option value={"none"}>None</option>
            <option value={"name"}>Name</option>
            <option value={"duration"}>Duration</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <Spinner />
      ) : cardio.length > 0 ? (
        <div className="border border-green-200 rounded-lg overflow-x-auto">
          <table className="border-collapse border-spacing-0 w-full">
            <thead className="bg-green-800">
              <tr>
                <th className="w-100 text-white p-2 text-start">Name</th>
                <th className="w-20 text-white p-2 text-start">Intensity</th>
                <th className="w-20 text-white p-2 text-start">Body Part</th>
                <th className="w-20 text-white p-2 text-start">Duration</th>
                <th className="w-20 text-white p-2 text-start">Calories</th>
              </tr>
            </thead>
            {cardio.map((c: any) => (
              <tbody>
                <tr>
                  <td className="p-2  whitespace-nowrap">{c.name}</td>
                  <td className="p-2  whitespace-nowrap">{c.intensity}</td>
                  <td className="p-2  whitespace-nowrap">{c.bodyPart}</td>
                  <td className="p-2  whitespace-nowrap">{c.duration}</td>
                  <td className="p-2  whitespace-nowrap">{c.calories}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      ) : (
        <div className="h-80 flex items-center justify-center">
          No cardio warmups found.
        </div>
      )}
    </div>
  );
}
