import { Hourglass } from "react-loader-spinner";

export default function Spiner({ width, height }) {
  return (
    <div>
      <Hourglass
        visible={true}
        height={width}
        width={height}
        colors={["#e44848", "#ffc531"]}
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
