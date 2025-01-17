// import React from 'react';
// import { FiEdit, FiTrash2 } from 'react-icons/fi';

// const NoteList = ({ notes, onEdit, onDelete, truncateContent }) => {
//   return (
//     <div className="note-list">
//       {notes.length > 0 ? (
//         notes.map((note) => (
//           <div key={note.id} className="note-item p-4 border rounded shadow mb-4 relative group">
//             <h2 className="font-semibold">{note.title}</h2>
//             <p className="text-sm">{truncateContent(note.content)}</p> {/* Truncated content */}
//             <div className="text-xs text-gray-500">
//               <p>Date: {note.date}</p>
//               <p>By: {note.person}</p>
//             </div>
//             <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
//               <button
//                 onClick={() => onEdit(note)}
//                 className="p-2 bg-yellow-500 text-white rounded-full mr-2 hover:bg-yellow-600"
//               >
//                 <FiEdit className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => onDelete(note.id)}
//                 className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
//               >
//                 <FiTrash2 className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p className="text-gray-500">No notes available. Add a new note to get started!</p>
//       )}
//     </div>
//   );
// };

// export default NoteList;


import React from 'react'

const NoteList = () => {
  return (
    <div>NoteList</div>
  )
}

export default NoteList