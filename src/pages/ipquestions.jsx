import React, { useState } from "react";

const questions = [
  {
    question: "What is an IP address? Give its definition and meaning.",
    options: [
      "A numerical label assigned to devices to identify and locate them on a network",
      "A method of encryption used in networking",
      "A type of browser setting",
    ],
    correctIndex: 0,
  },
  {
    question: "What are the conditions for a valid IP address?",
    options: [
      "Four octets, each between 0 and 255, separated by dots",
      "Three numbers separated by dashes",
      "Any string up to 15 characters",
    ],
    correctIndex: 0,
  },
  {
    question: "Choose the valid IP address:",
    options: ["256.100.50.0", "192.168.0.1", "192.168.1.256"],
    correctIndex: 1,
  },
  {
    question: "Which of these are types of IP addresses?",
    options: ["IPv4 and IPv6", "HTTP and HTTPS", "TCP and UDP"],
    correctIndex: 0,
  },
  {
    question: "How can you secure your IP address?",
    options: [
      "Use a VPN or firewall",
      "Share it publicly on forums",
      "Disable your router’s DHCP",
    ],
    correctIndex: 0,
  },
  {
    question: "On which OSI networking layer does IP operate?",
    options: ["Network layer", "Data Link layer", "Transport layer"],
    correctIndex: 0,
  },
  {
    question: "What is 127.0.0.1?",
    options: [
      "The loopback (localhost) IP address",
      "A common DNS server address",
      "The default gateway address",
    ],
    correctIndex: 0,
  },
  {
    question:
      "How many classes are IPv4 addresses divided into, and what are their names?",
    options: [
      "Five classes: A, B, C, D, and E",
      "Three classes: A, B, and C",
      "Two categories: Public and Private",
    ],
    correctIndex: 0,
  },
  {
    question: "What is subnetting?",
    options: [
      "Dividing a larger network into smaller subnetworks",
      "Encrypting IP packets for secure transmission",
      "Mapping domain names to IP addresses",
    ],
    correctIndex: 0,
  },
  {
    question: "Which protocol works alongside IP to ensure reliable delivery?",
    options: ["TCP", "UDP", "ICMP"],
    correctIndex: 0,
  },
];

const IPQuestions = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleOptionClick = (qIndex, optionIndex) => {
    if (selectedAnswers[qIndex] !== undefined) return; 
    setSelectedAnswers((prev) => ({ ...prev, [qIndex]: optionIndex }));
  };

  const getOptionStyle = (qIndex, oIndex) => {
    const selected = selectedAnswers[qIndex];
    const correct = questions[qIndex].correctIndex;
    if (selected === undefined) return "hover:bg-gray-100";
    if (oIndex === correct)
      return "bg-green-100 border-green-500 text-green-800";
    if (oIndex === selected) return "bg-red-100 border-red-500 text-red-800";
    return "opacity-50";
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 bg-white shadow-md rounded-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        IP Fundamentals Quiz
      </h2>
      {questions.map((q, qIndex) => (
        <div key={qIndex} className="space-y-3">
          <h3 className="font-semibold text-lg text-gray-700">
            {qIndex + 1}. {q.question}
          </h3>
          <div className="space-y-2">
            {q.options.map((option, oIndex) => (
              <button
                key={oIndex}
                onClick={() => {
                  if (
                    selectedAnswers[qIndex] === undefined &&
                    q.correctIndex === oIndex
                  ) {
                    setScore((prev) => prev + 1);
                  }
                  handleOptionClick(qIndex, oIndex);
                }}
                className={`w-full text-left px-4 py-2 border rounded transition-all duration-200 ${getOptionStyle(
                  qIndex,
                  oIndex
                )}`}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedAnswers[qIndex] !== undefined && (
            <p
              className={`mt-2 text-sm ${
                selectedAnswers[qIndex] === q.correctIndex
                  ? "text-green-600"
                  : "text-red-600"
              } `}
            >
              {selectedAnswers[qIndex] === q.correctIndex
                ? `Correct! Your Score is ${score}`
                : `Incorrect. Correct answer: ${q.options[q.correctIndex]} Your Score is ${score}`}
            </p>
          )}
          <hr className="mt-4" />
        </div>
      ))}
    </div>
  );
};

export default IPQuestions;
