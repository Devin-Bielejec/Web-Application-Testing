import React from 'react';
import App from './App';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const simulatedDOM = rtl.render(<App />);

  //Check if buttons exist
  const divButtons = document.querySelector("div.buttons");
  const strikeButton = document.querySelector("div.buttons button.strike");
  expect(strikeButton).toBeInTheDocument();

  const foulButton = document.querySelector("div.buttons button.foul");
  expect(foulButton).toBeInTheDocument();

  const ballButton = document.querySelector("div.buttons button.ball");
  expect(ballButton).toBeInTheDocument();

  const hitButton = document.querySelector("div.buttons button.hit");
  expect(hitButton).toBeInTheDocument();

  //Check if count is being displayed, 
  const divCounts = document.querySelector("div.counts");
  const strikeCount = document.querySelector("div.counts p.strike");
  expect(strikeCount).toBeInTheDocument();

  const foulCount = document.querySelector("div.counts p.foul");
  expect(foulCount).toBeInTheDocument();

  const ballCount = document.querySelector("div.counts p.ball");
  expect(ballCount).toBeInTheDocument();

  const hitCount = document.querySelector("div.counts p.hit");
  expect(hitCount).toBeInTheDocument();

  //Ensure that clicking strike, increases stike count by 1 until 3 then reset to 0
  rtl.fireEvent.click(strikeButton, {button: 0});
  expect(strikeCount).toHaveTextContent(1);
  rtl.fireEvent.click(strikeButton, {button: 0});
  expect(strikeCount).toHaveTextContent(2);
  rtl.fireEvent.click(strikeButton, {button: 0});
  expect(strikeCount).toHaveTextContent(0);


  console.log(simulatedDOM.debug());

});

