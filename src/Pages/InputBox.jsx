import React, { useState } from "react";

function InputBox() {
  const [text, setText] = useState([])

  const handleChange = (event)=>{
    const str = event.target.value
    const arr = str.split('\n')
    setText(arr)
  }

const handleSearch = () => {
  text.forEach((query) => {
    
    const encodedQuery = encodeURIComponent(query);
    console.log(encodedQuery);
    
    // Create the Google search URL
    const url = `https://www.google.com/search?q=${encodedQuery}`;
    // Open the URL in a new tab
    window.open(url, '_blank');
  });
};

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium"
        >
          Enter Text to Search:
        </label>
        <textarea
          id="message"
          rows="6"
          className="block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter new text from new Line"
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 mt-4" onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default InputBox;
