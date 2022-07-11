import React from "react";
import { Helmet } from "react-helmet";

const Head = () => {
  const title = "לומדת עזר ללימוד נהיגה";
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </div>
  );
};

export default Head;
