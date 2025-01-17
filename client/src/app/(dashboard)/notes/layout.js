'use client'
import React from 'react';
import {  useSelector } from 'react-redux';
const NoteLayout = ({ NoteGrid, NoteList }) => {
const isGridView = useSelector((state) => state.gridView.isGridView);
  return (
    <section>
      {/* Render the MeetingGrid or MeetingList based on isGridView */}
      {isGridView ? NoteGrid  : NoteList }
    </section>
  );
};

export default NoteLayout;
