import Lottie from "lottie-react";
import notFound from "@/assets/lottieFiles/notFound.json";
// import empty from "@/assets/lottieFiles/empty.json";
import loading from "@/assets/lottieFiles/loading.json";
import error from "@/assets/lottieFiles/error.json";

const lottieFilesMap = {
  notFound,
//   empty,
  loading,
  error,
};

type LottieHandlerProps = {
  type: keyof typeof lottieFilesMap;
  message?: string;
  className?: string;
};

export const LottieHandler = ({ type, message, className }: LottieHandlerProps) => {
  const lottie = lottieFilesMap[type];
  const messageStyle =
    type === "error"
      ? { fontSize: "19px", color: "red" }
      : { fontSize: "19px", marginTop: "30px" };

  return (
    <div className={`w-full h-full flex flex-col justify-center items-center ${className}`}>
      <Lottie animationData={lottie} style={{ width: "8em" }} />
      {message && <h3 style={messageStyle}>{message}</h3>}
    </div>
  );
};

export default LottieHandler;