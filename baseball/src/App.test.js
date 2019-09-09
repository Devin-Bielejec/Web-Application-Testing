import React from 'react';
import App from './App';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const simulatedDOM = rtl.render(<App />);
})

it("All Buttons exists", () => {
  const simulatedDOM = rtl.render(<App />);

  const strikeButton = document.querySelector("div.buttons button.strike");
  expect(strikeButton).toBeInTheDocument();

  const foulButton = document.querySelector("div.buttons button.foul");
  expect(foulButton).toBeInTheDocument();

  const ballButton = document.querySelector("div.buttons button.ball");
  expect(ballButton).toBeInTheDocument();

  const hitButton = document.querySelector("div.buttons button.hit");
  expect(hitButton).toBeInTheDocument();
})

it("Count is being displayed on all buttons", () => {
  const simulatedDOM = rtl.render(<App />);

  const strikeCount = document.querySelector("div.counts p.strike");
  expect(strikeCount).toBeInTheDocument();

  const foulCount = document.querySelector("div.counts p.foul");
  expect(foulCount).toBeInTheDocument();

  const ballCount = document.querySelector("div.counts p.ball");
  expect(ballCount).toBeInTheDocument();

  const hitCount = document.querySelector("div.counts p.hit");
  expect(hitCount).toBeInTheDocument();
})

const isReset = () => {
    const hitCount = document.querySelector("div.counts p.hit");
    const ballCount = document.querySelector("div.counts p.ball");
    const foulCount = document.querySelector("div.counts p.foul");
    const strikeCount = document.querySelector("div.counts p.strike");

    expect(strikeCount).toHaveTextContent(0);
    expect(ballCount).toHaveTextContent(0);
    expect(hitCount).toHaveTextContent(0);
    expect(foulCount).toHaveTextContent(0);
  }


it("Strike increases count by 1 until 3 then resets everything to 0", () => {
  const simulatedDOM = rtl.render(<App />);

  const strikeButton = document.querySelector("div.buttons button.strike");
  const strikeCount = document.querySelector("div.counts p.strike");
  rtl.fireEvent.click(strikeButton, {button: 0});
  expect(strikeCount).toHaveTextContent(1);
  rtl.fireEvent.click(strikeButton, {button: 0});
  expect(strikeCount).toHaveTextContent(2);
  rtl.fireEvent.click(strikeButton, {button: 0});
  
  isReset();
})
  
it("Clicking Ball Button increase count by 1 until 4", () => {
  const simulatedDOM = rtl.render(<App />);

  const ballButton = document.querySelector("div.buttons button.ball");
  const ballCount = document.querySelector("div.counts p.ball");
  rtl.fireEvent.click(ballButton, {button: 0});
  expect(ballCount).toHaveTextContent(1);
  rtl.fireEvent.click(ballButton, {button: 0});
  expect(ballCount).toHaveTextContent(2);
  rtl.fireEvent.click(ballButton, {button: 0});
  expect(ballCount).toHaveTextContent(3);
  rtl.fireEvent.click(ballButton, {button: 0});
  expect(ballCount).toHaveTextContent(0);

  isReset();
})
  
it("Clicking hit button resets everything to 0", () => {
  const simulatedDOM = rtl.render(<App />);
  const hitButton = document.querySelector("div.buttons button.hit");
  rtl.fireEvent.click(hitButton);
  isReset();
})

it("Clicking Foul Button increases by 1 everytime until at least 100", () => {
  const simulatedDOM = rtl.render(<App />);

  const foulButton = document.querySelector("div.buttons button.foul");
  const foulCount = document.querySelector("div.counts p.foul");
  for (let i = 1; i < 100; i++){
    rtl.fireEvent.click(foulButton);
    expect(foulCount).toHaveTextContent(i);
  }
})

it("When Strike Count is 0 or 1, foul button increases strike by 1", () => {
  const simulatedDOM = rtl.render(<App />);

  let strikeCount = document.querySelector("div.counts p.strike");
  const foulButton = document.querySelector("div.buttons button.foul");
  
  rtl.fireEvent.click(foulButton);
  expect(strikeCount).toHaveTextContent(1);
  rtl.fireEvent.click(foulButton);
  expect(strikeCount).toHaveTextContent(2);
  rtl.fireEvent.click(foulButton);
  expect(strikeCount).toHaveTextContent(2);

})


