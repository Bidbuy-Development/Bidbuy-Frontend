import React from "react";


const DownloadLink=({info})=>{
    return (
    <>
    
            
            <a className=" leading-3 py-2 px-1 rounded-[5px] gap-[3px] text-white border-1 bprder-white flex font-bold text-[12px] w-[116px]  " target="_blank" rel="noopener noreferrer" href={info.link}>
              <span>{info.icon}</span>
              <div className=" text-[12px] hover:underline">{info.content}</div>
                </a>
     
          
    </>
    

)}


export default DownloadLink