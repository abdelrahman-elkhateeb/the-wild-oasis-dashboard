import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../../services/apiBookings"
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  //filter
  const filterValue = searchParams.get("status");
  const filter = !filterValue || filterValue === "all" ? null : { field: "status", value: filterValue };

  // sort 
  const sortByValue = searchParams.get("sortBy");
  const sortBy = !sortByValue ? null : {
    field: sortByValue.split("-")[0],
    direction: sortByValue.split("-")[1]
  };

  const { isPending, data: bookings = [], error } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),

  })
  return { isPending, error, bookings }
}