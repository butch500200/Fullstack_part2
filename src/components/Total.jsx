const Total = ({ classes }) => {
  function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue.exercises;
    console.log(accumulator, currentValue.exercises);
    return returns;
  }

  const total = classes.reduce(reducer, 0);
  return (
    <>
      <h3>Total credits:{total}</h3>
    </>
  );
};

export default Total;
