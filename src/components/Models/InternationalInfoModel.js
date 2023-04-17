// import React, { useState } from "react";
// import { Modal } from "antd";
// import { sizaMass } from "../../constants/internationSpaceStations";

// const InternationalInfoModel = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   return (
//     <>
//       <Modal
//         title="International Space Station"
//         visible={isModalOpen}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         {sizaMass.map((sizemass) => {
//           return (
//             <ul key={sizemass.id}>
//               <li>{sizemass.statement}</li>
//             </ul>
//           );
//         })}
//       </Modal>
//     </>
//   );
// };

// export default InternationalInfoModel;
