import {
  ReactNode,
  Children,
  cloneElement,
  isValidElement,
  Dispatch,
  SetStateAction,
} from "react";

interface ModalProps {
  children?: ReactNode;
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = (props: ModalProps) => {
  return (
    <div className="fixed w-full h-full z-50">
      <div
        onClick={() => props.setIsOpen(!props.open)}
        className="z-[9999px] bg-[rgba(0,0,0,0.4)] backdrop-blur w-full h-full"
      />
      {Children.map(props.children, (child) => {
        if (!isValidElement(child)) {
          return;
        }

        return cloneElement(child as any, { ...props });
      })}
    </div>
  );
};

interface ModalContent extends Partial<ModalProps> {
  classNames?: string;
}

export const ModalContent = (props: ModalContent) => {
  const classes =
    props.classNames ||
    "absolute z-[999999px] left-1/2 right-1/2 rounded-lg translate-x-[-50%] top-1/2 bottom-1/2 translate-y-[-50%] max-w-[600px] w-full h-[500px] bg-white";

  return <div className={classes}>{props.children}</div>;
};
