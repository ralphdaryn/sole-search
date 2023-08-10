import { useState } from "react";
import Header from "../../components/Header/Header";
import SneakerList from "../../components/SneakerList/SneakerList";
import { FetchSneakersByQuery } from "../../utils/api-utils";

function SneakerResults() {
  const [sneakerData, setSneakerData] = useState(null);

  const handleSearchSubmit = async (query) => {
    console.log(query)
    const fetchedData = await FetchSneakersByQuery(query);
    setSneakerData(fetchedData);
  };

  return (
    <div>
      <Header onSearchSubmit={handleSearchSubmit} />
      {sneakerData && <SneakerList sneakerData={sneakerData} />}
    </div>
  );
}

export default SneakerResults;