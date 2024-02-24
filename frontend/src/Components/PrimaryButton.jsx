import { useNavigation } from "react-router-dom";

const Button = ({ text, onClick, width, activateAnimation }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`${
          activateAnimation && "animateButton"
        } flex justify-center items-center bg-primary text-[white] font-medium py-[7px] rounded-3xl w-[150px] w-${width}`}
        onClick={onClick}
      >
        {activateAnimation && <div className="liquid"></div>}
        <span>{isSubmitting ? "Submitting" : text}</span>
      </button>
    </>
  );
};

Button.defaultProps = {
  animateButton: false,
};

export default Button;
