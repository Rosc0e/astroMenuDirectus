import { Undo2 } from "lucide-react";

const BackButton = () => {
  return (
    <button
      className="text-5xl flex m-5 active:scale-90 transition-all duration-75 "
      onClick={() => window.history.back()}
    >
      <Undo2 size={45} /> Back
    </button>
  );
};

export default BackButton;
