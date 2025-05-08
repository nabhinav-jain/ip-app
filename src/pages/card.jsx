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

  useEffect(() => {
    const updateLayout = () => {
      const container = document.querySelector('.two-body-container');
      const ipInfo = document.querySelector('.ip-info-container');
  
      if (window.innerWidth < 768) {
        container?.classList.add('flex-col');
        ipInfo?.classList.add('w-full');
      } else {
        container?.classList.remove('flex-col');
        ipInfo?.classList.remove('w-full');
      }
    };
  
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-4">
      <div class="two-body-container flex items-stretch justify-center w-full ">
    
        <div clas="p-4 ">
          <p className="text-center font-bold text-2xl">
            We do not store or share any of the info
          </p>
          <div className="w-full max-w-3xl mb-6">
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-300">
              <Map latitude={data.latitude} longitude={data.longitude} />
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              User Location Details
            </h2>
            <ul className="space-y-2 text-gray-700">
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
        <div className="ip-info-container w-1/3 p-4 ">
          <IpInfo />
        </div>
      </div>
    </div>
  );
};

export default GeoLocationInfo;
