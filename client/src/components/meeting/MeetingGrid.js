// import React from 'react';
// import { FiTrash2 } from 'react-icons/fi';  // Only import the Trash icon
// import { RiCalendarScheduleFill } from 'react-icons/ri';  // Only import the Schedule icon

// const MeetingGrid = ({ meetings, onEdit, onDelete }) => {
//   // Sort meetings by datetime in descending order (latest first)
//   const sortedMeetings = [...meetings].sort((a, b) => new Date(b.meetingdatetime) - new Date(a.meetingdatetime));

//   return (
//     <div className="meeting-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//       {sortedMeetings.map((meeting, index) => {
//         const date = meeting.meetingdatetime.split('T')[0];  // Extract date part
//         const time = meeting.meetingdatetime.split('T')[1];  // Extract time part

//         return (
//           <div
//             key={index}
//             className="meeting-item p-4 border rounded shadow mb-4 relative group"
//           >
//             <h2 className="font-semibold">{meeting.title}</h2>
//             <p className="text-sm">Agenda: {meeting.agenda}</p>
//             <p className="text-sm">Date: {date}</p>
//             <p className="text-sm">Time: {time}</p>
//             <p className="text-sm">Participants: {meeting.persons.join(', ')}</p>

//             <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
//               {/* Schedule Button */}
//               <button
//                 onClick={() => onEdit(meeting)}  // Edit button onClick handler
//                 className="p-2 bg-green-500 text-white rounded-full mr-2"
//                 aria-label={`Edit meeting ${meeting.title}`}
//               >
//                 <RiCalendarScheduleFill className="w-6 h-6" />
//               </button>

//               {/* Delete Button */}
//               <button
//                 onClick={() => onDelete(meeting.id)}  // Delete button onClick handler
//                 className="p-2 bg-red-500 text-white rounded-full"
//                 aria-label={`Delete meeting ${meeting.title}`}
//               >
//                 <FiTrash2 className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default MeetingGrid;


import React from 'react'

const MeetingGrid = () => {
  return (
    <div>hii</div>
  )
}

export default MeetingGrid