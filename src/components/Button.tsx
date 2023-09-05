import axios from "axiox";

interface ButtonName {
  children: string;
}
import UserForm from "./UserForm";
import { useState } from "react";

function App({ children }: ButtonName) {
  const [seen, setSeen] = useState(false);

  function togglePop() {
    setSeen(!seen);
  }

  return (
    <div>
      <button onClick={togglePop}>{children}</button>
      {seen ? <UserForm toggle={togglePop} /> : null}
    </div>
  );
}

export default App;
