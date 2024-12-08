import { useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { DetailContext } from "./DetailProvider";

function ToDoListChart() {
  const { data } = useContext(DetailContext);

  const toDoListResolved = data?.itemList.filter((item) => item.resolved) || [];
  const toDoListNotResolved =
    data?.itemList.filter((item) => !item.resolved) || [];

  const chartData = [
    { name: "Solved", value: toDoListResolved.length },
    { name: "Unsolved", value: toDoListNotResolved.length },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div style={{ height: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ToDoListChart;
