import Header from "./Header";
import Content from "./Content";
import React from "react";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name}></Header>
      <Content classes={course.parts}></Content>
      <Total classes={course.parts}></Total>
    </>
  );
};

export default Course;
