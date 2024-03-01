import { Circle } from "react-feather";

const SizeDemo = () => {
  return (
    <div className="flex justify-center ">
      <h2 className="text-2xl font-semibold">Size Demo</h2>
      <div className="flex">
        <Circle color="black" size={60} />
        <Circle color="orange" size={90} />
        <Circle color="seagreen" size={120} />
        <Circle color="purple" size={150} />
        <Circle color="goldenrod" size={180} />
      </div>
    </div>
  );
};

export default SizeDemo;
