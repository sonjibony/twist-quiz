import React from 'react';
import './Statistics.css';
import { LineChart, Line, XAxis, YAxis,Tooltip, ResponsiveContainer } from 'recharts';

import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const stats = useLoaderData();
console.log(stats.data)
    return (
        <div className='graph'>

      <ResponsiveContainer width="100%" height={400}>

<LineChart width={500} height={400} data={stats.data}  >
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