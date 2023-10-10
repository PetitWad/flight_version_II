import React from "react";
import AutoScroll from '../scroll/AutoScroll';
import './content.css';

const Content = ({ data, loading, typeVol }) => {

  return (
    <main className="content">
      <AutoScroll data={data} loading={loading} typeVol={typeVol} />
    </main>
  );
};

export default Content;
