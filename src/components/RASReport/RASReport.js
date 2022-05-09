import Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';
import TableData from "../TableData/TableData";

const options = {
    chart: {
      type: "pie"
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Earth\'s Atmospheric Composition',
      style: {
        fontSize: '10px',
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
            format: '{point.name}: {point.percentage:.1f} %'
        },
        innerSize: '70%'
      }
    },
    series: [
      {
        name: 'Gases',
        data: [
            {
              name: 'Argon',
              y: 0.9,
              color: '#3498db'
            },
            {
              name: 'Nitrogen',
              y: 78.1,
              color: '#9b59b6'
            },
            {
              name: 'Oxygen',
              y: 20.9,
              color: '#2ecc71'
            },
            {
              name: 'Trace Gases',
              y: 0.1,
              color: '#f1c40f'
            }
        ]
    }
    ]
  };

const RASReport = () => {
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

export default RASReport;