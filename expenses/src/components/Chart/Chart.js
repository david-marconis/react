import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = props => {
  const max = props.dataPoints.map(d => d.value).reduce((a, b) => Math.max(a, b));
  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          value={dataPoint.value}
          max={max}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
