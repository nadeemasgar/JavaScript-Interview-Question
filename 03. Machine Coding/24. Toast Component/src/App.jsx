import { useState } from "react";
import Button from "./components/button/Button";
import Toast from "./components/toast/Toast";
import styles from "./App.module.css";

function App() {
  const [list, setList] = useState([]);
  console.log(list);
  let toastProperties = null;

  const showToast = (type) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: list.length + 1,
          title: "Success",
          description: "This is a success toast component",
          backgroundColor: "#5cb85c",
        };
        break;
      case "danger":
        toastProperties = {
          id: list.length + 1,
          title: "Danger",
          description: "This is a danger toast component",
          backgroundColor: "#d9534f",
        };
        break;
      case "info":
        toastProperties = {
          id: list.length + 1,
          title: "Info",
          description: "This is a info toast component",
          backgroundColor: "#5bc0de",
        };
        break;
      case "warning":
        toastProperties = {
          id: list.length + 1,
          title: "Warning",
          description: "This is a warning toast component",
          backgroundColor: "#f0ad4e",
        };
        break;
      default:
        toastProperties = [];
    }

    setList([...list, toastProperties]);
  };

  return (
    <div className={styles.root}>
      <h1>React Toast Component</h1>
      <div className={styles.buttons}>
        <Button handleClick={() => showToast("success")}>Success</Button>
        <Button handleClick={() => showToast("danger")}>Danger</Button>
        <Button handleClick={() => showToast("info")}>Info</Button>
        <Button handleClick={() => showToast("warning")}>Warning</Button>
      </div>
      <Toast toastlist={list} position="buttom-right" setList={setList} />
    </div>
  );
}

export default App;

/*
1. Create Button Component to create 4 buttons - Success, Danger, Info, Warning
2. Add click handler showToast on Button
3. Create Toast component
4. In showToast handler, set list State with new Toast properties objects
5. Using list, render all the toast using map
6. Apply styling to the toast
*/
