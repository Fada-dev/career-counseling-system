import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = {
  daily: [
    { name: 'Mon', bookings: 120 }, { name: 'Tue', bookings: 150 }, { name: 'Wed', bookings: 90 }, { name: 'Thu', bookings: 200 }, { name: 'Fri', bookings: 180 }, { name: 'Sat', bookings: 130 }, { name: 'Sun', bookings: 160 }
  ],
  weekly: [
    { name: 'Week 1', bookings: 900 }, { name: 'Week 2', bookings: 1100 }, { name: 'Week 3', bookings: 950 }, { name: 'Week 4', bookings: 1200 }
  ],
  annually: [
    { name: 'Jan', bookings: 3200 }, { name: 'Feb', bookings: 4000 }, { name: 'Mar', bookings: 2800 }, { name: 'Apr', bookings: 3500 }, { name: 'May', bookings: 4200 }, { name: 'Jun', bookings: 3900 }, { name: 'Jul', bookings: 4500 }, { name: 'Aug', bookings: 3249 }, { name: 'Sep', bookings: 3100 }, { name: 'Oct', bookings: 3000 }, { name: 'Nov', bookings: 3300 }, { name: 'Dec', bookings: 4800 }
  ]
};

const DashboardPage = () => {
  const [view, setView] = useState('annually');

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Bookings 2024</h2>
      <p className="text-sm text-green-500">1.3% ↑ vs Last Year</p>

      <div className="flex flex-end space-x-2 my-4">
        {['daily', 'weekly', 'annually'].map(type => (
          <button
            key={type}
            onClick={() => setView(type)}
            className={`px-4 py-2 rounded ${view === type ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data[view]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => [`${value} bookings`, '']} />
          <Line type="monotone" dataKey="bookings" stroke="#4F46E5" strokeWidth={2} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardPage;