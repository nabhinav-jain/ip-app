import React from 'react';
import Map from './map';
import UserLocationDetails from './user-list';
import IpInfo from './ip-info';


const LocationInfoSection = ({ data }) => {
   
  const { latitude, longitude } = data;

  return (
    <section>
      <p className="text-center font-bold text-2xl">
        We do not store or share any of the info
      </p>

      <div className="two-body-container flex items-stretch justify-center w-full flex-col md:flex-row">
        <div className="p-2">
          <Map latitude={latitude} longitude={longitude} />
          <UserLocationDetails {...data} />
        </div>

        <IpInfo />
      </div>
    </section>
  );
};



export default LocationInfoSection;
