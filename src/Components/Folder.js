import React, { useState } from "react";

const Folder = ({ data }) => {
  const [expand, setExpand] = useState(false);
  if (data.isFolder) {
    return (
      <div className="folder" onClick={() => setExpand(!expand)}>
        📁{data.name}
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {data.items.map((da) => {
            return <Folder data={da} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span>📃{data.name}</span>;
  }
};

export default Folder;
