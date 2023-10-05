import React from "react";
import AutoScroll from '../scroll/AutoScroll';
import './content.css';

const Content = ({ data, loading }) => {

  return (
    <main className="content">
      <AutoScroll data={data} loading={loading} />
    </main>
  );
};

export default Content;
