import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getCardioWarmups, getStretchingWarmups } from "../../utils/api";
import Spinner from "../../components/spinner";
import Error from "../../components/error";

export default function StretchingWarmups() {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const {
    data: stretching = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["stretching-warmups", search, limit, page],
    queryFn: () => getStretchingWarmups(search, limit, page),
  });

  if (isError) {
    return <Error />;
  }

  return (
    <div className="px-48 py-12 w-full">
      <p className="text-2xl text-green-800 font-bold">Stretching Warmups</p>
      <div className="flex lg:flex-row flex-col items-start lg:items-center lg:justify-between gap-4 py-8">
        <div className="flex items-center gap-2">
          <p>Search by Name/Body Part: </p>
          <input
            className="border rounded-lg bg-white p-1"
            name="search"
            value={search}
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <p>Per page: </p>
          <input
            className="border rounded-lg bg-white p-1 w-10"
            name="limit"
            type="number"
            min={1}
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
          />
        </div>
      </div>

      {isLoading ? (
        <Spinner />
      ) : stretching.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
          {stretching.map((s: any) => (
            <div className="bg-white rounded-lg p-6">
              <p
                className="text-green-800 font-semibold text-2xl py-1 whitespace-nowrap truncate"
                title={s.name}
              >
                {s.name}
              </p>
              <p className="text-slate-500 py-2">Body Part: {s.bodyPart}</p>
              <p className="text-slate-500 pb-2">Duration: {s.duration}</p>
              <p className="text-slate-500 pb-2">Calories: {s.calories}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-80 flex items-center justify-center">
          No stretching warmups found.
        </div>
      )}
      <div className="flex items-center py-8 gap-2 justify-center w-full">
        <button
          className="bg-slate-100 hover:bg-slate-500 transition w-30 text-green-800 border hover:text-slate-100 py-2 rounded-lg disabled:text-gray-200"
          onClick={() => (page === 1 ? page : setPage(page - 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="bg-slate-100 hover:bg-slate-500 transition w-30 text-green-800 border hover:text-slate-100 py-2 rounded-lg disabled:text-gray-200"
          onClick={() => (page >= 1 ? setPage(page + 1) : page)}
          disabled={stretching.length <= 0}
        >
          Next
        </button>
      </div>
    </div>
  );
}
