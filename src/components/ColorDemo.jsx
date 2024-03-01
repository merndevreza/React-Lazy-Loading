import { Circle } from "react-feather";

const ColorDemo = () => {
  return (
    <div  className="flex justify-center ">
      <h2 className="text-2xl font-semibold">Color Demo</h2>
      <div className="flex">
        <Circle color="green" size={128} />
        <Circle color="red" size={128} />
        <Circle color="blue" size={128} />
        <Circle color="purple" size={128} />
      </div>
    </div>
  );
};

export default ColorDemo;
