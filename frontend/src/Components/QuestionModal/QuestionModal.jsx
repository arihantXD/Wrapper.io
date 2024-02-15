const QuestionModal = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }
  return (
    <>
      <div
        className="fixed inset-0 bg-opacity-25 bg-primary filter backdrop-blur-sm flex justify-center items-center"
        style={{ fontFamily: "Inter" }}
      >
        <div className="w-[600px]">
          <div className="p-2 rounded bg-white px-4">
            <div className="mt-2 mb-2 text-xl font-semibold">
              Help us serve you better.
            </div>
            <form className="flex flex-col items-end">
              <textarea
                name="questions"
                id="questionTextarea"
                className="w-[100%] border-2 p-2 border-primary outline-0 outline-primary rounded-md focus:outline focus:outline-primary focus:outline-1 mb-3"
                cols="30"
                rows="10"
                placeholder="Tell us about your interests"
              ></textarea>
              <div className="w-[100%] flex justify-end gap-3 ">
                <button className="bg-primary px-2 py-1 rounded transition-all ease-in-out duration-400 hover:transition-all hover:ease-in-out hover:duration-400 hover:shadow-md hover:text-slate">
                  Submit
                </button>
                <button
                  onClick={onClose}
                  className="bg-danger px-2 py-1 rounded transition-all ease-in-out duration-400 hover:transition-all hover:ease-in-out hover:duration-400 hover:shadow-md hover:text-slate"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionModal;
