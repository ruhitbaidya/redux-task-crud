import { useForm } from "react-hook-form";
import { usePostTaskDataMutation } from "../redux/authApi/authApiInject";
import { toast } from "sonner";
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  profession: "student" | "teacher" | "driver" | "business";
};

const InputForm = () => {
  const [createTask, { data, isLoading, isSuccess }] =
    usePostTaskDataMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = async (data: Inputs) => {
    await createTask(data);
    reset();
  };
  if (isSuccess) {
    toast(data?.message);
  }
  console.log(data, isLoading, isSuccess);
  return (
    <div>
      <div className="w-[60%] mx-auto px-[30px]">
        <div>
          <div>
            <h2 className="text-2xl text-center font-bold my-[20px]">
              Create Task
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between items-center gap-[25px]">
              <div className="flex-1">
                <label htmlFor="fName">First Name</label>
                <input
                  {...register("firstName", { required: true })}
                  type="text"
                  className="border outline-none p-[10px] block w-full rounded-lg"
                  placeholder="Enter Your First name"
                />
                {errors.firstName && <span>This field is required</span>}
              </div>
              <div className="flex-1">
                <label htmlFor="fName">Last Name</label>
                <input
                  {...register("lastName", { required: true })}
                  type="text"
                  className="border outline-none p-[10px] block w-full rounded-lg"
                  placeholder="Enter Your Last name"
                />
                {errors.lastName && <span>This field is required</span>}
              </div>
            </div>
            <div>
              <label htmlFor="fName">Enter Email</label>
              <input
                {...register("email", { required: true })}
                type="text"
                className="border outline-none p-[10px] block w-full rounded-lg"
                placeholder="Enter Your Email"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div>
              <label htmlFor="fName">Profession</label>
              <select
                {...register("profession", { required: true })}
                className="w-full border p-[10px] rounded-lg"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="driver">Driver</option>
                <option value="business">Business</option>
              </select>
              {errors.profession && <span>This field is required</span>}
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
