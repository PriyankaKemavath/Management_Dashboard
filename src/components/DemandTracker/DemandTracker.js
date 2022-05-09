import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";
import TableData from "../TableData/TableData";

const options = {
  chart: {
    type: "pie"
  },
  title: {
    text: 'Pie Chart',
  },
  series: [
    {
      data: [
        { y: 100 },
        { y: 50 }
      ]
    }
  ]
};

const DemandTracker = () => {
  return (
    <div className='container'>
      <div className="container row d-flex align-items-center">
        <div className="col-md-6">
          <PieChart highcharts={Highcharts} options={options} />     
        </div>
        <div className="col-md-6">
          <TableData />
        </div>
      </div>
    </div>
  );
};

export default DemandTracker;