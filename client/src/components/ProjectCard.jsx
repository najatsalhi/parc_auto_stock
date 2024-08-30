import React from "react";
import { TiAttachment } from "react-icons/ti";
const ProjectCard = ({ project }) => {
  return (
    <div className="p-6 bg-white rounded-xl space-y-5">
      <div>
        <h1 className="text-xl font-semibold text-gray-700">{project.name}</h1>
        <p className="text-sm text-gray-500">{project.type}</p>
      </div>
      <p>
        <span className="text-xs p-2 rounded bg-gray-100">{project.date}</span>
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="w-[40%] bg-indigo-500 rounded-full h-2"></div>
      </div>

      <div className="flex justify-between items-center">
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/women/15.jpg"
            alt=""
            className="w-8 h-8 rounded-full border-4 border-white"
          />
          <img
            src="https://randomuser.me/api/portraits/men/23.jpg"
            alt=""
            className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-4"
          />
          <img
            src="https://randomuser.me/api/portraits/women/40.jpg"
            alt=""
            className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-8"
          />
        </div>
        <p className="flex space-x-1 items-center text-gray-400">
          <TiAttachment /> <span>{project.files} files</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;

// import { Bar } from 'react-chartjs-2';

// const FuelChart = () => {
//   const data = {
//     labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
//     datasets: [
//       {
//         label: 'Gazole',
//         backgroundColor: '#50C6F1',
//         data: [12, 19, 3, 5, 2, 3, 6, 7, 8, 9, 10, 12]
//       },
//       {
//         label: 'Essence',
//         backgroundColor: '#A5DEE5',
//         data: [2, 3, 20, 5, 1, 4, 7, 8, 5, 9, 11, 13]
//       }
//     ]
//   };

//   return (
//     <div className="chart-container">
//       <h3>Quantité de carburant par mois</h3>
//       <Bar data={data} />
//     </div>
//   );
// }

// export default FuelChart;
