import Part from "./part";

const Content = ({ classes }) => {
  return (
    <>
      {classes.map((part) => (
        <Part key={part.id} part={part}></Part>
      ))}
    </>
  );
};

export default Content;
