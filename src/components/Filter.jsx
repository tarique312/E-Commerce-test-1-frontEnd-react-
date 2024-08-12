import { useState } from "react";
import "./Filter.css";

const Filter = ({ onApplyFilter }) => {
  const priceRanges = [
    { label: "no filter", min: 0, max: Infinity },
    { label: "0-5k", min: 0, max: 5000 },
    { label: "0-10k", min: 5000, max: 10000 },
    { label: "10k-20k", min: 10000, max: 20000 },
    { label: "20k-40k", min: 20000, max: 40000 },
    { label: "40k-80k", min: 40000, max: 80000 },
    { label: "Above 100k", min: 100000, max: Infinity },
  ];

  const [selectedRangeIndex, setSelectedRangeIndex] = useState(null);

  const handleSelectChange = (e) => {
    setSelectedRangeIndex(e.target.value);
  };

  const handleApplyFilter = () => {
    if (selectedRangeIndex === null) return;

    const selectedRange = priceRanges[selectedRangeIndex];
    onApplyFilter({ min: selectedRange.min, max: selectedRange.max });
  };

  return (
    <div className="filter">
      <label htmlFor="priceRangeSelect" className="form-label">
        Select Price Range:
      </label>
      <select
        id="priceRangeSelect"
        className="form-select"
        onChange={handleSelectChange}
        defaultValue=""
      >
        <option value="" disabled>
          Select a range
        </option>
        {priceRanges.map((range, index) => (
          <option key={range.label} value={index}>
            {range.label}
          </option>
        ))}
      </select>
      <button
        onClick={handleApplyFilter}
        className="btn btn-primary mt-3"
        disabled={selectedRangeIndex === null}
      >
        Apply Filter
      </button>
    </div>
  );
};

export default Filter;
