import React from 'react';

const UserLocationDetails = ({
  ip,
  city,
  region,
  country,
  latitude,
  longitude,
  timezone,
  organization,
}) => {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-white mb-4">
        User Location Details
      </h2>
      <ul className="space-y-2 text-white">
        <li>
          <strong>IP:</strong> {ip}
        </li>
        <li>
          <strong>City:</strong> {city}
        </li>
        <li>
          <strong>Region:</strong> {region}
        </li>
        <li>
          <strong>Country:</strong> {country}
        </li>
        <li>
          <strong>Latitude:</strong> {latitude}
        </li>
        <li>
          <strong>Longitude:</strong> {longitude}
        </li>
        <li>
          <strong>Timezone:</strong> {timezone}
        </li>
        <li>
          <strong>Organization:</strong> {organization}
        </li>
      </ul>
    </div>
  );
};

export default UserLocationDetails;
