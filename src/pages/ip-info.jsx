import React from 'react';

export default function IpInfo() {
  return (
    <div className=" p-6 bg-white shadow-lg rounded-lg text-gray-800 leading-relaxed">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">What is an IP Address?</h2>
      <p className="mb-4">
        An <strong>IP address</strong> is like a home address, but for your device on the internet.
        It helps computers and phones know where to send information, like websites or messages.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-purple-700">Why is it Important?</h3>
      <p className="mb-4">
        Just like the post office needs your address to deliver letters, the internet needs your IP address 
        to send you websites, emails, videos, and more.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-purple-700">Different Kinds of IP Addresses</h3>

      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>IPv4:</strong> The most common kind, looks like numbers separated by dots (example: <code>192.168.0.1</code>).</li>
        <li><strong>IPv6:</strong> A newer version with longer addresses, made because we're running out of the old kind.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-purple-700">Public vs Private</h3>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Public IP:</strong> This is what the outside world (like websites) sees. It’s like your house address.</li>
        <li><strong>Private IP:</strong> Used only inside your home or office. Like room numbers inside your house.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-purple-700">Does My IP Stay the Same?</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Static IP:</strong> Stays the same all the time.</li>
        <li><strong>Dynamic IP:</strong> Changes from time to time, usually automatically.</li>
      </ul>

      <p className="mt-6 text-sm text-gray-600 italic">
        In short: your IP address tells the internet where to send things — just like your address tells the delivery guy where to bring your food.
      </p>
    </div>
  );
}
