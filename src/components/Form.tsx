import { useForm } from "../hooks/useForm";

export const Form = () => {
  const { handleForm, submitForm } = useForm({
    email: "",
    password: "",
  });

  return (
    <>
      <h3>Form</h3>
      <form onSubmit={submitForm}>
        <input
          onChange={({ target }) => handleForm(target.value, "email")}
          type="text"
          className="form-control"
          placeholder="Email..."
        />
        <input
          onChange={({ target }) => handleForm(target.value, "password")}
          type="text"
          className="form-control mt-2 mb-2"
          placeholder="Password..."
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
