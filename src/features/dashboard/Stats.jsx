import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers"
import PropTypes from "prop-types";

function Stats({ bookings = [], confirmedStays = [], numDays, cabinCount }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkins = confirmedStays.length;

  const occupation = confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) / (numDays * cabinCount);

  return (
    <>
      <Stat
        title="bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />

      <Stat
        title="sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />

      <Stat
        title="check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />

      <Stat
        title="Occupancy"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  )
}

Stats.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      created_at: PropTypes.string,
      totalPrice: PropTypes.number,
      extrasPrice: PropTypes.number,
      status: PropTypes.string,
    })
  ),

  confirmedStays: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      startDate: PropTypes.string,
      status: PropTypes.string,
      guests: PropTypes.shape({
        fullName: PropTypes.string,
      }),
    })
  ),

  numDays: PropTypes.number,
  cabinCount: PropTypes.number
};

export default Stats
