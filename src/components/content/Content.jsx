import React from "react";
import AutoScroll from '../scroll/AutoScroll';

const Content = ({ data, loading }) => {

  return (
    <main className="content">
      <AutoScroll data={data} loading={loading} />
    </main>
  );
};

export default Content;
