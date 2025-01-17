'use client'
import React from 'react';
import {  useSelector } from 'react-redux';
const MeetingLayout = ({ MeetingGrid, MeetingList }) => {
const isGridView = useSelector((state) => state.gridView.isGridView);
  return (
    <section>
      {/* Render the MeetingGrid or MeetingList based on isGridView */}
      {isGridView ? MeetingGrid  : MeetingList }
    </section>
  );
};

export default MeetingLayout;
