import { FormEvent, useState } from "react";

export const useForm = <T extends Object>(form: T) => {
  const [state, setState] = useState(form);

  const handleForm = (value: string, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log(state);
  };

  return {
    state,
    handleForm,
    submitForm,
  };
};
