import React, { useEffect, useState } from 'react';
import Map from './map'


const GeoLocationInfo = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const geoData = await response.json();
        setData(geoData);
      } catch (err) {
        setError('Failed to fetch user details.');
      } finally {
        setLoading(false);
      }
    };

    fetchGeoData();
  }, []);

  if (loading) return <p>Loading user info...</p>;
  if (error) return <p>{error}</p>;

  


 return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-4">
      <div className="w-full max-w-3xl mb-6">
        <div className="rounded-lg overflow-hidden shadow-lg border border-gray-300">
         <Map latitude={data.latitude} longitude={data.longitude} />
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">User Location Details</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>IP:</strong> {data.ip}</li>
          <li><strong>City:</strong> {data.city}</li>
          <li><strong>Region:</strong> {data.region}</li>
          <li><strong>Country:</strong> {data.country}</li>
          <li><strong>Latitude:</strong> {data.latitude}</li>
          <li><strong>Longitude:</strong> {data.longitude}</li>
          <li><strong>Timezone:</strong> {data.timezone}</li>
          <li><strong>Organization:</strong> {data.organization}</li>
        </ul>
      </div>
    </div>
  );
};

export default GeoLocationInfo;
