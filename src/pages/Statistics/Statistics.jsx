import React from "react";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      subject: "Assignment-1",
      A: 58,

      fullMark: 60,
    },
    {
      subject: "Assignment-2",
      A: 60,

      fullMark: 60,
    },
    {
      subject: "Assignment-3",
      A: 57,

      fullMark: 60,
    },
    {
      subject: "Assignment-4",
      A: 60,

      fullMark: 60,
    },
    {
      subject: "Assignment-5",
      A: 60,

      fullMark: 60,
    },
    {
      subject: "Assignment-6",
      A: 60,

      fullMark: 60,
    },
    {
      subject: "Assignment-7",
      A: 60,

      fullMark: 60,
    },
    {
      subject: "Assignment-8",
      A: 60,

      fullMark: 60,
    },
  ];

  return (
    <div>
      statistics
      {/*<RadarChart outerRadius={200} width={1200} height={530} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 60]} />
        <Radar
          name="Pujon's Assignment mark"
          dataKey="A"
          stroke="#9478ff"
          fill="#8b81fe93 "
          fillOpacity={0.6}
        />

        <Legend />
        <Tooltip />
      </RadarChart>*/}
    </div>
  );
};

export default Statistics;
