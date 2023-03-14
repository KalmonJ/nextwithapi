import { Button } from "./Button";
import { useForm } from "./../hooks/useForm";
import { InputLogin } from "__generated__/resolvers-types";
import { authService } from "services/authService";

export const LoginForm = () => {
  const { handleChange } = useForm<InputLogin>(
    {
      email: "",
      password: "",
    },
    async (data) => {
      await authService.login(data?.email as string, data?.password as string);
    }
  );

  return (
    <section className="flex py-6 flex-col justify-between">
      <form className="rounded-lg bg-white flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-6 w-full max-w-[500px]">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold mb-7 font-monrope text-2xl self-start">
              Login
            </h3>
            <label className="text-base font-medium font-monrope">Email:</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="email@email.com"
              className="outline-none border border-solid border-light-gray rounded-lg px-4 py-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium font-monrope">
              Password:
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="outline-none border border-solid border-light-gray rounded-lg px-4 py-2"
              placeholder="***********"
            />
          </div>
        </div>
        <Button
          variant="contained"
          type="submit"
          classnames="rounded max-w-[500px]"
        >
          Login
        </Button>
      </form>
    </section>
  );
};
