import { ChangeEvent, FormEvent, useState } from "react";

export const useForm = <TData extends unknown>(
  initialState: TData,
  service?: (data?: TData) => Promise<void>
) => {
  const [data, setData] = useState<TData>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData({ ...(data as object), [name]: value } as TData);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await service?.();
  };

  return {
    handleChange,
    handleSubmit,
    data,
  };
};
