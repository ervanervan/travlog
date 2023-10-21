import React from "react";

export default function Button(props) {
  return (
    <button
      type={props.type}
      className={`py-4 px-8 
  ${props.className && props.className} 
  ${props.isWhite && "bg-bgWhite text-textGray"} 
  ${
    props.isPrimary && "bg-bgPrimary text-textWhite"
  } text-sm font-bold rounded-full`}
    >
      {props.children}
    </button>
  );
}
