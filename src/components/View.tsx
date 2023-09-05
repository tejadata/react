import Button from "./Button";

function View() {
  const user_info = [
    {
      personal: { name: "Viswa", age: 2, Gender: "Male" },
      address: { building_name: "emo", doorNo: 1, floor: 1 },
    },
    {
      personal: { name: "Teja", age: 2, Gender: "Male" },
      address: { building_name: "emo", doorNo: 1, floor: 1 },
    },
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {user_info.map((user, index) => (
          <tr>
            <th scope="row">{index}</th>
            <td>{user.personal.name}</td>
            <td>
              <Button children="Add Info"></Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default View;
