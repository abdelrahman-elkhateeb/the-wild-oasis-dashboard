import PropTypes from "prop-types"
import Select from "./Select"
import { useSearchParams } from "react-router-dom"

SortBy.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  )
}

function SortBy({ options }) {
  const [searchParams, setSearchParam] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParam(searchParams);
  }

  return (
    <Select options={options} value={sortBy} type="white" onChange={handleChange} />
  )
}

export default SortBy
