// // import React from 'react'
// // import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
// //     from 'recharts';
// // function Chart(){
// //     const data = [
// //         {
// //             name: 'Jan',
// //             uv: 4000,
// //             pv: 2400,
// //             amt: 2400,
// //         },
// //         {
// //             name: 'Feb',
// //             uv: 3000,
// //             pv: 1398,
// //             amt: 2210,
// //         },
// //         {
// //             name: 'Mar',
// //             uv: 2000,
// //             pv: 9800,
// //             amt: 2290,
// //         },
// //         {
// //             name: 'Apr',
// //             uv: 2780,
// //             pv: 3908,
// //             amt: 2000,
// //         },
// //         {
// //             name: 'May',
// //             uv: 1890,
// //             pv: 4800,
// //             amt: 2181,
// //         },
// //         {
// //             name: 'June',
// //             uv: 2390,
// //             pv: 3800,
// //             amt: 2500,
// //         },
// //         {
// //             name: 'Jul',
// //             uv: 3490,
// //             pv: 4300,
// //             amt: 2100,
// //         },
// //     ];
// //     return (
// //         <main className='main-container'>
// //              <div className='charts'>
// //                 <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: 'white', borderRadius: "10px" }}>
// //                 <BarChart
// //                         Overview
// //                         width={500}
// //                         height={400}
// //                         data={data}
// //                         margin={{
// //                             top: 35,
// //                             right: 30,
// //                             left: 20,
// //                             bottom: 35,
// //                         }}
// //                     >
// //                         <CartesianGrid strokeDasharray="3 3" />
// //                         <XAxis dataKey="name" />
// //                         <YAxis />
// //                         <Tooltip />
// //                         <Legend />
// //                         <Bar dataKey="pv" fill="#8884d8" />
// //                         <Bar dataKey="uv" fill="#82ca9d" />
// //                     </BarChart>
// //                 </ResponsiveContainer>
// //                 <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: 'white', borderRadius: "10px" }}>
// //                  <LineChart
// //                         width={500}
// //                         height={400}
// //                         data={data}
// //                         margin={{
// //                             top: 35,
// //                             right: 30,
// //                             left: 20,
// //                             bottom: 35,
// //                         }}
// //                     >
// //                         <CartesianGrid strokeDasharray="3 3" />
// //                         <XAxis dataKey="name" />
// //                         <YAxis />
// //                         <Tooltip />
// //                         <Legend />
// //                         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
// //                         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
// //                     </LineChart>
// //                 </ResponsiveContainer>
// //             </div>

// //         </main>
// //     )
// // }
// // export default Chart;



// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
//     from 'recharts';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Chart() {
//     const data = [
//         { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
//         { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
//         { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
//         { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
//         { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
//         { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
//         { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
//     ];

//     return (
//         <main className="container mt-4">
//             <div className="row">
//                 <div className="col-lg-6 mb-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <ResponsiveContainer width="100%" height={400}>
//                                 <BarChart
//                                     width={500}
//                                     height={400}
//                                     data={data}
//                                     margin={{
//                                         top: 35,
//                                         right: 30,
//                                         left: 20,
//                                         bottom: 35,
//                                     }}
//                                 >
//                                     <CartesianGrid strokeDasharray="3 3" />
//                                     <XAxis dataKey="name" />
//                                     <YAxis />
//                                     <Tooltip />
//                                     <Legend />
//                                     <Bar dataKey="pv" fill="#8884d8" />
//                                     <Bar dataKey="uv" fill="#82ca9d" />
//                                 </BarChart>
//                             </ResponsiveContainer>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-6 mb-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <ResponsiveContainer width="100%" height={400}>
//                                 <LineChart
//                                     width={500}
//                                     height={400}
//                                     data={data}
//                                     margin={{
//                                         top: 35,
//                                         right: 30,
//                                         left: 20,
//                                         bottom: 35,
//                                     }}
//                                 >
//                                     <CartesianGrid strokeDasharray="3 3" />
//                                     <XAxis dataKey="name" />
//                                     <YAxis />
//                                     <Tooltip />
//                                     <Legend />
//                                     <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//                                     <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//                                 </LineChart>
//                             </ResponsiveContainer>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }

// export default Chart;
