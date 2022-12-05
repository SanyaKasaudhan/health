import React, { useState } from "react";
import './Folder.css'
const Folder = ({ data }) => {
  const [expand, setExpand] = useState(false);
  const[showInput, setShowInput]=useState({
    visible:false,
    isFolder:null 
  });

  const handleNewFolder = (e) =>{
    e.stopPropagation();
  }
  if (data.isFolder) {
    return (
    <div>
      <div className="folder" onClick={() => setExpand(!expand)}>
       <span>📁{data.name}</span> 
       <div>
        <button onClick={(e)=> handleNewFolder(e)}>Folder +</button>
        <button onClick={(e)=> handleNewFolder(e)}>File +</button>
       </div>
       </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {data.items.map((da) => {
            return <Folder data={da} key={da.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span>📃{data.name}</span>;
  }
};

export default Folder;
