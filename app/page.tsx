import Image from "next/image";
import React from "react";

const Year = (numYears: number) => {
  return (
    <div>
      {numYears} year{numYears > 1 ? "s" : ""}
    </div>
  );
};

export function Home1() {
  let a = "token";
  let b = 1212;
  const URL = "https://yahoo.com";

  return (
    <div>
      <h1>hola {a}</h1>
      <p>para que quieres saber eso, jajaja saludos {b}</p>
      <a className="link" href={URL} target="_blank">
        YahOooooo!!!!7
      </a>
      <br />
      <div>
        {Year(1)}
        {Year(5)}
        {"-".repeat(3) + ">"}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <div>
        <p>True: {true}</p>
        <p>False: {false}</p>
        <p>Null: {null}</p>
        <p>Undefined: {undefined}</p>
        <p>Empty string: {""}</p>
      </div>
      <div>
        <h2>Array</h2>
        <div>{[1, 2, null, 3, 4, <span>Span</span>, 5, true, 6, 7]}</div>
        <div>{[1, 2, null, 3, 4, 5, <span>Span</span>, 6, 7]}</div>
        <div>
          {[1, 2, 6, 7].map((x, index) => (
            <div id={String(index)} className="hey" key={index}>
              {x}
            </div>
          ))}
        </div>
        <div>
          {[
            [1, 2],
            [2, 3],
            [3, 44],
            [5, 6],
            [6, 7],
            [8, null],
          ].map((pair, index) => (
            <React.Fragment key={index}>
              <span>{pair[0]}</span>
              <span>{pair[1]}</span>
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
