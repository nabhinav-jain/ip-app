import React, { useEffect, useState } from "react";
import LocationInfoSection from "./frontcomp-container";
import IPQuestions from "./ipquestions";

const GeoLocationInfo = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showipQue,setShowipQue] = useState(false);


  function handleIPClick(){
    setShowipQue(curr=>!curr);
  }

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const geoData = await response.json();
        setData(geoData);
      } catch (err) {
        setError("Failed to fetch user details.");
      } finally {
        setLoading(false);
      }
    };

    fetchGeoData();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-blue-600 text-lg font-medium animate-pulse">
          Loading user info...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-red-500 bg-red-100 border border-red-300 px-4 py-2 rounded-lg shadow-sm text-center max-w-md">
          {error}
        </p>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-800 via-purple-800 to-violet-900 p-4">
    {!showipQue && <LocationInfoSection data={data} />}
    {showipQue && <IPQuestions />}
    <button
      className="bg-white text-black border border-black px-4 py-2 rounded hover:bg-gray-100"
      style={{ cursor: "pointer" }}
      onClick={handleIPClick}
    >
      {showipQue ? "Go Back" : "Practice IP Questions"}
    </button>
  </div>
  
  );
};

export default GeoLocationInfo;
