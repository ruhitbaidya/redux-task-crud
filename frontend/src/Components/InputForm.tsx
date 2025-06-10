const InputForm = () => {
  return (
    <div>
      <div className="w-[60%] mx-auto px-[30px]">
        <div>
          <div>
            <h2 className="text-2xl text-center font-bold my-[20px]">
              Create Task
            </h2>
          </div>
          <form>
            <div className="flex justify-between items-center gap-[25px]">
              <div className="flex-1">
                <label htmlFor="fName">First Name</label>
                <input
                  type="text"
                  className="border outline-none p-[10px] block w-full rounded-lg"
                  placeholder="Enter Your First name"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="fName">Last Name</label>
                <input
                  type="text"
                  className="border outline-none p-[10px] block w-full rounded-lg"
                  placeholder="Enter Your Last name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="fName">Enter Email</label>
              <input
                type="text"
                className="border outline-none p-[10px] block w-full rounded-lg"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <label htmlFor="fName">Profession</label>
              <select className="w-full border p-[10px] rounded-lg">
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="driver">Driver</option>
                <option value="business">Business</option>
              </select>
            </div>
            <div className="mt-[20px]">
              <button className="bg-purple-700 text-white w-full rounded-lg py-[8px]">
                Add Tasks
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
