import { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const IncomeChart = ({
  data,
}: {
  data: {
    amount: number;
    date: string;
    id: string;
  }[];
}) => {
  const [focusBar, setFocusBar] = useState<null | number | undefined>(null);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={150}
        height={40}
        data={data}
        margin={{ top: 0, bottom: 0, left: -24, right: 0 }}
        onMouseMove={(state) => {
          if (state.isTooltipActive) {
            setFocusBar(state.activeTooltipIndex);
          } else {
            setFocusBar(null);
          }
        }}
      >
        <CartesianGrid strokeDasharray="5" vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          fontSize="0.8rem"
          padding={{ left: 8 }}
        />
        <YAxis
          dataKey="amount"
          axisLine={false}
          tickLine={false}
          fontSize="0.8rem"
        />
        <Tooltip cursor={{ fill: "transparent" }} />
        <Bar dataKey="amount">
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={focusBar === index ? "#FF8C38" : "#FFCC8D"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
export default IncomeChart;
