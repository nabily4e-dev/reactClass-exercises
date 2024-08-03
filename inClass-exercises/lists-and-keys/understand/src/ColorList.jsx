// ColorItem component
function ColorItem(props) {
  console.log(props);
  return <li style={{ color: props.color }}>{props.color}</li>;
}

function ColorList() {
  let counter = 0;

  function generateID(prefix) {
    counter++;
    return prefix + counter.toString().padStart(3, '0');
  }

  const colors = [
    { id: generateID('ID-'), color: 'firebrick' },
    { id: generateID('ID-'), color: 'rebeccapurple' },
    { id: generateID('ID-'), color: 'salmon' },
    { id: generateID('ID-'), color: 'darkslategray' },
    { id: generateID('ID-'), color: 'hotpink' },
  ];

  console.log(colors);

  const colorElements = colors.map((color) => {
    return <ColorItem key={color.color} color={color.color} />;
  });

  const colorList = colors.map((color) => {
    return (
      <li key={color.id} style={{ color: color.color }}>
        {color.color}
      </li>
    );
  });

  const users = [
    { id: 1, firstName: 'Duane', lastName: 'Watson' },
    { id: 2, firstName: 'Duane', lastName: 'Johnson' },
  ];

  // const userHeadings = users.map((user) => {
  //   return (
  //     <h1 key={user.id}>
  //       {user.firstName} {user.lastName}
  //     </h1>
  //   );
  // });

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {/* <li style={{ color: colors[0] }}>{colors[0]}</li>
        <li style={{ color: colors[1] }}>{colors[1]}</li>
        <li style={{ color: colors[2] }}>{colors[2]}</li>
        <li style={{ color: colors[3] }}>{colors[3]}</li>
        <li style={{ color: colors[4] }}>{colors[4]}</li> */}
        {colorElements}

        <br />

        {/* {userHeadings} */}
      </ol>
    </div>
  );
}

export default ColorList;
