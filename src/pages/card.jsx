import React, { useEffect, useState } from "react";
import Map from "./map";
import IpInfo from "./ip-info";

const GeoLocationInfo = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
      <p className="text-center font-bold text-2xl">
        We do not store or share any of the info
      </p>
      <div class="two-body-container flex items-stretch justify-center w-full flex-col md:flex-row">
        <div className="p-2">
          <div className="w-full max-w-3xl mb-6">
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-300">
              <Map latitude={data.latitude} longitude={data.longitude} />
            </div>
          </div>

          <div className="bg-gray-800 shadow-lg rounded-xl p-2 md:p-6 w-full  ">
            <h2 className="text-2xl font-bold text-center text-white mb-4">
              User Location Details
            </h2>
            <ul className="space-y-2 text-white">
              <li>
                <strong>IP:</strong> {data.ip}
              </li>
              <li>
                <strong>City:</strong> {data.city}
              </li>
              <li>
                <strong>Region:</strong> {data.region}
              </li>
              <li>
                <strong>Country:</strong> {data.country}
              </li>
              <li>
                <strong>Latitude:</strong> {data.latitude}
              </li>
              <li>
                <strong>Longitude:</strong> {data.longitude}
              </li>
              <li>
                <strong>Timezone:</strong> {data.timezone}
              </li>
              <li>
                <strong>Organization:</strong> {data.organization}
              </li>
            </ul>
          </div>
        </div>
        <div className="ip-info-container w-full py-2 md:w-1/3 ">
          <IpInfo />
        </div>
      </div>
    </div>
  );
};

export default GeoLocationInfo;
