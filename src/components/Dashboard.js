// import React from 'react';

// const Dashboard = () => {
//   return (
//     <div className="container-fluid">
//       <div className="d-sm-flex align-items-center justify-content-between mb-4">
//         <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
//         <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
//           <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
//         </a>
//       </div>

//       <div className="row">
//         <div className="col-xl-3 col-md-6 mb-4">
//           <div className="card border-left-primary shadow h-100 py-2">
//             <div className="card-body">
//               <div className="row no-gutters align-items-center">
//                 <div className="col mr-2">
//                   <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
//                     Earnings (Monthly)
//                   </div>
//                   <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
//                 </div>
//                 <div className="col-auto">
//                   <i className="fas fa-calendar fa-2x text-gray-300"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-xl-3 col-md-6 mb-4">
//           <div className="card border-left-success shadow h-100 py-2">
//             <div className="card-body">
//               <div className="row no-gutters align-items-center">
//                 <div className="col mr-2">
//                   <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
//                     Earnings (Annual)
//                   </div>
//                   <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
//                 </div>
//                 <div className="col-auto">
//                   <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-xl-3 col-md-6 mb-4">
//           <div className="card border-left-info shadow h-100 py-2">
//             <div className="card-body">
//               <div className="row no-gutters align-items-center">
//                 <div className="col mr-2">
//                   <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
//                   <div className="row no-gutters align-items-center">
//                     <div className="col-auto">
//                       <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
//                     </div>
//                     <div className="col">
//                       <div className="progress progress-sm mr-2">
//                         <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-auto">
//                   <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-xl-3 col-md-6 mb-4">
//           <div className="card border-left-warning shadow h-100 py-2">
//             <div className="card-body">
//               <div className="row no-gutters align-items-center">
//                 <div className="col mr-2">
//                   <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending Requests</div>
//                   <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
//                 </div>
//                 <div className="col-auto">
//                   <i className="fas fa-comments fa-2x text-gray-300"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col-lg-6 mb-4">
//           <div className="card shadow mb-4">
//             <div className="card-header py-3">
//               <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
//             </div>
//             <div className="card-body">
//               <h4 className="small font-weight-bold">Server Migration <span className="float-right">20%</span></h4>
//               <div className="progress mb-4">
//                 <div className="progress-bar bg-danger" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
//               </div>
//               <h4 className="small font-weight-bold">Sales Tracking <span className="float-right">40%</span></h4>
//               <div className="progress mb-4">
//                 <div className="progress-bar bg-warning" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
//               </div>
//               <h4 className="small font-weight-bold">Customer Database <span className="float-right">60%</span></h4>
//               <div className="progress mb-4">
//                 <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
//               </div>
//               <h4 className="small font-weight-bold">Payout Details <span className="float-right">80%</span></h4>
//               <div className="progress mb-4">
//                 <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
//               </div>
//               <h4 className="small font-weight-bold">Account Setup <span className="float-right">Complete!</span></h4>
//               <div className="progress">
//                 <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
    const data = [
        { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
    ];

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
                </a>
            </div>

            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Earnings (Monthly)
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Earnings (Annual)
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                        </div>
                                        <div className="col">
                                            <div className="progress progress-sm mr-2">
                                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending Requests</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                        </div>
                        <div className="card-body">
                            <h4 className="small font-weight-bold">Server Migration <span className="float-right">20%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h4 className="small font-weight-bold">Sales Tracking <span className="float-right">40%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h4 className="small font-weight-bold">Customer Database <span className="float-right">60%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h4 className="small font-weight-bold">Payout Details <span className="float-right">80%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h4 className="small font-weight-bold">Account Setup <span className="float-right">Complete!</span></h4>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Charts</h6>
                        </div>
                        <div className="card-body">
                            {/* <div className="mb-4"> */}
                                {/* <ResponsiveContainer width="100%" height={400}>
                                    <BarChart
                                        width={500}
                                        height={400}
                                        data={data}
                                        margin={{
                                            top: 35,
                                            right: 30,
                                            left: 20,
                                            bottom: 35,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="pv" fill="#8884d8" />
                                        <Bar dataKey="uv" fill="#82ca9d" />
                                    </BarChart>
                                </ResponsiveContainer> */}
                            {/* </div> */}
                            <div>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart
                                        width={500}
                                        height={500}
                                        data={data}
                                        margin={{
                                            top: 35,
                                            right: 30,
                                            left: 20,
                                            bottom: 35,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
