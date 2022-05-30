import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import { useState } from "react";
import Eye from "../src/Components/eye.svg";

function App() {
  const [type, setType] = useState("password");
  const [value, setValue] = useState();
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const rightLogoOnClick = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  return (
    <div className="container">
      <Input
        onChange={onChange}
        type={type}
        size="xl"
        variant="filled"
        rightLogoOnClick={rightLogoOnClick}
        rightLogo={Eye}
      />

      <Image
        src="https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
        alt=""
        borderRadius={100}
        width={100}
        height={100}
        fit="cover"
      />

      <Pagination total={15} selected={0} />
    </div>
  );
}

export default App;
