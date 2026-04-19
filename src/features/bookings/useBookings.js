import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../../services/apiBookings"
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  //filter
  const filterValue = searchParams.get("status");
  const filter = !filterValue || filterValue === "all" ? null : { field: "status", value: filterValue };

  // sort
  const sortByValue = searchParams.get("sortBy") || "startDate-desc";
  const sortBy = !sortByValue ? null : {
    field: sortByValue.split("-")[0],
    direction: sortByValue.split("-")[1]
  };

  // pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isPending,
    data: {
      data: bookings = [],
      count
    } = {},
    error
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),

  })
  return { isPending, error, bookings, count }
}