import Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';
import TableData from "../TableData/TableData";

const options = {
  chart: {
    type: "column"
  },
  tooltip: {
    outside: true,
    useHTML: true,
    formatter: function () {
      return `<div class="tooltip">The value for <b>${this.x}</b> is <b>${this.y}</b></div>`;
    }
  },
  title: {
    text: 'Flights Information',
  },
  xAxis: {
    labels: {
      enabled: false
    },
    tickLength: 1
  },
  yAxis: [
    { max: 100 }
  ],
  plotOptions: {
    series: {
      borderRadius: 3,
      pointPadding: 0,
      groupPadding: 0.05,
    }
  },
  series: [
    {
      pointWidth: 25,
      color: "lightgrey",
      data: [71.5, 
        {
          color: "red",
          y: 89.9,
        },
        16.4, 29.2, 44.0, 76.0, 35.6, 48.5
      ]
    }, 
    {
      color: "#407bfb",
      data: [0, 94.1]
    },
    {
      color: "#407bfb",
      data: [0, 70.1]
    },
    {
      color: "#407bfb",
      data: [0, 70.1]
    },
  ]
};

const Overview = () => {
  return (
    <div className='container'>
      <div className="container row d-flex align-items-center">
        <div className="col-md-6">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <div className="col-md-6">
          <TableData />
        </div>
      </div>
    </div>
  );
};

export default Overview;