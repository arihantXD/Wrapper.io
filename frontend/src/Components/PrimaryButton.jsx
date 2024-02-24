import { useNavigation } from "react-router-dom";

const Button = ({ text, onClick, width }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-pink text-[white] font-medium px-[15px] py-[7px] rounded-3xl w-[150px] w-${width}`}
        onClick={onClick}
      >
        {isSubmitting ? "Submitting" : text}
      </button>
    </>
  );
};
export default Button;
