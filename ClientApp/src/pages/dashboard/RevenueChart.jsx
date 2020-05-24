import React from "react";
import ReactApexChart from "react-apexcharts";

export default class RevenueChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "High - 2019",
          data: [5, 15, 14, 36, 32, 32],
        },
        {
          name: "Low - 2019",
          data: [7, 11, 30, 18, 25, 13],
        },
      ],
      options: {
        chart: {
          height: 230,
          type: "line",
          shadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 1,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#786BED", "#999b9c"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },

        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.0,
          },
        },
        markers: {
          size: 6,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

          labels: {
            style: {
              colors: "#9aa0ac",
            },
          },
        },
        yaxis: {
          title: {
            text: "Income",
          },
          labels: {
            style: {
              color: "#9aa0ac",
            },
          },
          min: 5,
          max: 40,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-12">
          <div className="card ">
            <div className="card-header">
              <h4>Revenue chart</h4>
              <div className="card-header-action">
                <div className="dropdown">
                  <a
                    href="#"
                    data-toggle="dropdown"
                    className="btn btn-warning dropdown-toggle"
                  >
                    Options
                  </a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item has-icon">
                      <i className="fas fa-eye" /> View
                    </a>
                    <a href="#" className="dropdown-item has-icon">
                      <i className="far fa-edit" /> Edit
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item has-icon text-danger">
                      <i className="far fa-trash-alt" />
                      Delete
                    </a>
                  </div>
                </div>
                <a href="#" className="btn btn-primary">
                  View All
                </a>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-9">
                  <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="area"
                    height={350}
                  />
                  <div className="row mb-0">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <div className="list-inline text-center">
                        <div className="list-inline-item p-r-30">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-arrow-up-circle col-green"
                          >
                            <circle cx={12} cy={12} r={10} />
                            <polyline points="16 12 12 8 8 12" />
                            <line x1={12} y1={16} x2={12} y2={8} />
                          </svg>
                          <h5 className="m-b-0">$675</h5>
                          <p className="text-muted font-14 m-b-0">
                            Weekly Earnings
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <div className="list-inline text-center">
                        <div className="list-inline-item p-r-30">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-arrow-down-circle col-orange"
                          >
                            <circle cx={12} cy={12} r={10} />
                            <polyline points="8 12 12 16 16 12" />
                            <line x1={12} y1={8} x2={12} y2={16} />
                          </svg>
                          <h5 className="m-b-0">$1,587</h5>
                          <p className="text-muted font-14 m-b-0">
                            Monthly Earnings
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <div className="list-inline text-center">
                        <div className="list-inline-item p-r-30">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-arrow-up-circle col-green"
                          >
                            <circle cx={12} cy={12} r={10} />
                            <polyline points="16 12 12 8 8 12" />
                            <line x1={12} y1={16} x2={12} y2={8} />
                          </svg>
                          <h5 className="mb-0 m-b-0">$45,965</h5>
                          <p className="text-muted font-14 m-b-0">
                            Yearly Earnings
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="resize-triggers">
                    <div className="expand-trigger">
                      <div style={{ width: "769px", height: "321px" }} />
                    </div>
                    <div className="contract-trigger" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="row mt-5">
                    <div className="col-7 col-xl-7 mb-3">Total customers</div>
                    <div className="col-5 col-xl-5 mb-3">
                      <span className="text-big">8,257</span>
                      <sup className="col-green">+09%</sup>
                    </div>
                    <div className="col-7 col-xl-7 mb-3">Total Income</div>
                    <div className="col-5 col-xl-5 mb-3">
                      <span className="text-big">$9,857</span>
                      <sup className="text-danger">-18%</sup>
                    </div>
                    <div className="col-7 col-xl-7 mb-3">Project completed</div>
                    <div className="col-5 col-xl-5 mb-3">
                      <span className="text-big">28</span>
                      <sup className="col-green">+16%</sup>
                    </div>
                    <div className="col-7 col-xl-7 mb-3">Total expense</div>
                    <div className="col-5 col-xl-5 mb-3">
                      <span className="text-big">$6,287</span>
                      <sup className="col-green">+09%</sup>
                    </div>
                    <div className="col-7 col-xl-7 mb-3">New Customers</div>
                    <div className="col-5 col-xl-5 mb-3">
                      <span className="text-big">684</span>
                      <sup className="col-green">+22%</sup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
