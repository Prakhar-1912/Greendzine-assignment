import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";

const data = [
  {
    EMPID: "1",
    Name: "Arjun",
    DOB: "16-11-2022",
    Role: "Software Engineer",
  },
  {
    EMPID: "2",
    Name: "Mahesh",
    DOB: "16-11-2022",
    Role: "Web Developer",
  },
  {
    EMPID: "3",
    Name: "Arjun",
    DOB: "16-11-2022",
    Role: "Software Engineer",
  },
  {
    EMPID: "4",
    Name: "Mahesh",
    DOB: "16-11-2022",
    Role: "Web Developer",
  },
];

const Employees = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [shouldSearch, setShouldSearch] = useState(false);
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = () => {
    const filtered = data.filter((item) =>
      item.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
    setShouldSearch(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setShouldSearch(true);
    }
  };

  useEffect(() => {
    if (shouldSearch) {
      handleSearch();
    }
  }, [shouldSearch]);

  return (
    <div className="Employee-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search with name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <IoIosSearch className="search-icon" onClick={() => setShouldSearch(true)} />
      </div>
      <div className="employee-list">
        {filteredData.map((item) => (
          <div className="employee-card" key={item.EMPID}>
            <h2>EMP ID : {item.EMPID}</h2>
            <h2>Name : {item.Name}</h2>
            <h2>DOB : {item.DOB}</h2>
            <h2>Role : {item.Role}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
