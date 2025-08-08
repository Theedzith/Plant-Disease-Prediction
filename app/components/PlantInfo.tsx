// export default function PlantInfo({ plantInfo }: { plantInfo: any }) {
//   if (plantInfo.error) {
//     return (
//       <p className="text-red-500 bg-white p-4 rounded-lg mt-4">
//         {plantInfo.error}
//       </p>
//     );
//   }

//   return (
//     <div className="bg-white rounded-lg p-6 max-w-2xl w-full mt-8 shadow-lg">
//       {/* <h2 className="text-3xl font-semibold text-green-600 mb-4">{plantInfo.name}</h2> */}
//       {/* <p className="text-xl text-gray-600 italic mb-4">{plantInfo.scientificName}</p> */}
//       {/* <p className="text-gray-800 mb-6">{plantInfo.description}</p> */}

//       <h3 className="text-2xl font-semibold text-green-600 mb-4">
//         Plant Details
//       </h3>
//       <table className="w-full border-collapse">
//         <tbody>
//           {Object.entries(plantInfo).map(([key, value]) => {
//             if (
//               key !== "name" &&
//               key !== "scientificName" &&
//               key !== "description"
//             ) {
//               return (
//                 <tr key={key} className="border-b border-gray-200">
//                   <td className="py-2 px-4 font-semibold text-gray-700 capitalize">
//                     {key}
//                   </td>
//                   <td className="py-2 px-4 text-gray-800">{value as string}</td>
//                 </tr>
//               );
//             }
//             return null;
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }


export default function PlantInfo({ plantInfo }: { plantInfo: any }) {
  if (plantInfo.error) {
    return (
      <p className="text-red-500 bg-white p-4 rounded-lg mt-4">
        {plantInfo.error}
      </p>
    );
  }

  // Get the first plant object from plant_data
  console.log("---------------------------------------------------------------------------------------------");
  console.log(plantInfo);
  const plant = plantInfo?.plant_data?.[0];

  if (!plant) {
    return (
      <p className="text-yellow-600 bg-white p-4 rounded-lg mt-4">
        No plant data available.
      </p>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 max-w-2xl w-full mt-8 shadow-lg">
      <h2 className="text-3xl font-semibold text-green-600 mb-4">
        {plant.name}
      </h2>
      <p className="text-xl text-gray-600 italic mb-4">
        {plant.scientific_name}
      </p>

      <h3 className="text-2xl font-semibold text-green-600 mb-4">
        Plant Disease Information
      </h3>

      <table className="w-full border-collapse">
        <tbody>
          {Object.entries(plant).map(([key, value]) => {
            if (
              key !== "name" &&
              key !== "scientific_name"
            ) {
              return (
                <tr key={key} className="border-b border-gray-200">
                  <td className="py-2 px-4 font-semibold text-gray-700 capitalize">
                    {key.replace(/_/g, " ")}
                  </td>
                  <td className="py-2 px-4 text-gray-800">
                    {value as string}
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
}
