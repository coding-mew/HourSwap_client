import React, { useState } from "react";
import axios from "axios";
import {useStore} from '../context/store'

const SendToken = () => {
  const [recipientId, setRecipientId] = useState("");
  const [amount, setAmount] = useState("");
  const {user} = useStore();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const senderId = user._id
    console.log(senderId,recipientId,amount);
    try {
      const BE_URL = import.meta.env.VITE_BE_PORT;
        const token = document.cookie.replace(
          /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
          '$1'
        );
        const response = await axios.post(
          `${BE_URL}/transactions/createtransaction`,
          { recipientId, amount, hourTokens: user.hourTokens }, 
          { headers: { Authorization: `Bearer ${token}` },
          withCredentials: true, }
        );
      console.log(response.data.msg)
      setSuccess(response.data.msg);
    } catch (error) {
      console.log(error.response.data.msg)
      setError(error.response.data.msg);
    }
  };

  const handleRecipientIdChange = (e) => {
    setRecipientId(e.target.value);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0) {
      setAmount(value);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Send Token</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="recipientId">
              Recipient ID
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="recipientId"
              type="text"
              placeholder="Enter the recipient's user ID"
              value={recipientId}
              onChange={handleRecipientIdChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="amount">
              Amount
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="amount"
              type="number"
              placeholder="Enter the amount of tokens you want to send"
              value={amount}
              onChange={handleAmountChange}
              required
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendToken;
