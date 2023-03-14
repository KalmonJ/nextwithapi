import { ButtonHTMLAttributes } from "react";
import { FaChevronRight } from "react-icons/fa";
import clsx from "clsx";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  variant: "contained" | "outline" | "link";
  classnames?: string;
}

export const Button = ({ variant, ...props }: ButtonProps) => {
  const buttonVarints = {
    contained:
      "bg-orange hover:bg-light-orange uppercase subtitle text-white h-[48px] w-full max-w-[160px]",
    outline:
      "border hover:bg-black hover:text-white max-w-[160px] border-black w-full h-[48px] border-solid subtitle text-black uppercase bg-white",
    link: "uppercase subtitle flex items-center gap-[12px] mix-blend-normal opacity-50 hover:text-orange hover:opacity-100",
  };

  return (
    <button
      className={clsx(buttonVarints[variant], props.classnames)}
      {...props}
    >
      {props.children} {variant === "link" && <FaChevronRight />}
    </button>
  );
};
