import { Box, Circle, Heart, Hexagon, Square, Triangle } from "react-feather";

const ShapeDemo = () => {
   return (
      <div  className="flex justify-center ">
         <h2  className="text-2xl font-semibold">Shape Demo</h2>
         <div className="flex">
            <Square color="green" size={128}/>
            <Triangle color="green" size={128}/>
            <Box color="green" size={128}/>
            <Circle color="green" size={128}/>
            <Heart color="green" size={128}/>
            <Hexagon color="green" size={128}/>
         </div>
      </div>
   );
};

export default ShapeDemo;