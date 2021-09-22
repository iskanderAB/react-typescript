import React, { Fragment } from "react";

interface parentProps {
  color: string;
}
export const Child = ({ color }: parentProps) => {
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    const onDrag = (e :React.DragEvent<HTMLDivElement>) => {
        console.log(e.clientX , e.clientY);
        console.log(e) ;
    } 

  return (
    <Fragment>
      <div style={{ color: color }}>hello</div>
      <input onChange={onChange} />
      <div 
        style={{width:'50vmin',height:'50vmin',background : '#f00'}}
        draggable 
        onDrag={onDrag}
        > </div>
    </Fragment>
  );
};