import React, { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState();

  useEffect(() => {
    const api = () =>
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`
      )
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));

    api();
  }, []);

  return (
    <div className="min-h-screen min-w-screen">
      <h2 className="font-bold text-3xl m-8">Overview</h2>
      <div>
        <div className="flex justify-evenly mr-90">
          <h3 className="font-bold text-xl">Portfolio</h3>
          <h3 className="font-bold text-xl">Your Assets</h3>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div className="bg-sky-200 w-[550px] h-[300px] flex justify-center items-center mt-10 rounded-xl">
            $17,000
          </div>
          <div className="bg-purple-200 w-[250px] h-[300px] mt-10 rounded-xl flex justify-center items-center">
            125 BTC
          </div>
          <div className="bg-green-200 w-[250px] h-[300px] mt-10 rounded-xl flex justify-center items-center">
            155 ETH
          </div>
          <div className="bg-yellow-200 w-[250px] h-[300px] mt-10 rounded-xl flex justify-center items-center">
           {data?.map(d => <li key={d.id}>{d.name}</li>)}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="bg-black w-[450px] h-[400px] rounded-xl mt-10 mr-11"></div>
      </div>
    </div>
  );
}

export default Dashboard;
