import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// import "./Camps.css";
import './Dashstyles/Dashhome.css'
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiMessageAdd } from "react-icons/bi";
import { PiAirplaneBold } from "react-icons/pi";
import { FaCampground } from "react-icons/fa";
// import { mycontext } from "../../contexts/ContextProvider";

function Home(users) {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  // const { users, tour, contact, booking } = mycontext();

  // const userCount = users.length;
  // const tourCount = tour.length;
  // const contactcount = contact.length;
  // const bookingcounnt = booking.length;

  return (
    <div className="camps">
      <div className="campscard">
        <div className="usercard">
          <p>
            <AiOutlineUserAdd className="icon" />
          </p>
          <p>Users</p>
          <p>40 Users</p>
        </div>

        <div className="usercardd">
          <p>
            <PiAirplaneBold className="iconns" />
          </p>
          <p> Tours</p>
          <p> 100 Tours</p>
        </div>

        <div className="usercards">
          <p>
            <BiMessageAdd className="icons" />
          </p>
          <p>Messages</p>

          <p>30 Messages</p>
        </div>
        <div className="usercardds">
          <p>
            <FaCampground className="iconn" />
          </p>
          <p>Booking</p>
          <p>2 Booking</p>
        </div>
      </div>

      <div className="chartsdash">
        <div className="areacharts">
          <AreaChart
            className="chart1"
            width={500}
            height={220}
            data={data}
            margin={{
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>

        <div className="areachart">
          <AreaChart
            width={490}
            height={220}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
}
export default Home;
