import React from "react";
import "./Statistics.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const stats = useLoaderData();
  
  return (
    <div className="graph">
      <h1>Available Quiz Quantity</h1>
      <p> The graph shown below shows which topic has the most quizzes.</p>

      {/* LINE CHART AND RESPONSIVE CONTAINER PART */}

      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={500} height={400} data={stats.data}>
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
