import { Oval } from "react-loader-spinner";

export default function Spiner({ width, height, color = "#d84343" }) {
  return (
    <div>
      <Oval
        visible={true}
        height={width}
        width={height}
        color={color}
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
