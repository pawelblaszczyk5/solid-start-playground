import { HttpHeader, StatusCode } from "solid-start/server";
import "./test.css";

const Screen = () => {
  return (
    <>
      <h1>Hello world {Math.random()}</h1>
      <a href="/">Test</a>
      <HttpHeader
        headers={{ "Cache-Control": "public, max-age=31536000" }}
      ></HttpHeader>
      <StatusCode code={200}></StatusCode>
    </>
  );
};

export default Screen;
