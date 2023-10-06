import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import useLoginHook from "../../../hooks/useLoginHook";
import "../../pages/Books/Books.scss";

const SignUpForm = () => {
  const { loginPost } = useLoginHook();

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handlerOnSubmit = () => {
    console.log("Form is submitted ");

  };

  useEffect(() => {
    console.log("Errors: ", errors);
  }, [errors]);

  return (
    <div>
      <form onSubmit={handleSubmit(handlerOnSubmit)}>
        <div>
          <h3>Name</h3>
          <Controller
            name="name"
            control={control}
            rules={{
              required: "name is required",
            }}
            render={({ field }) => (
              <input
                placeholder="Enter name"
                {...field}
                style={{ border: errors.name ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <h3>Email</h3>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",

              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter email"
                {...field}
                style={{ border: errors.email ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <h3>Password</h3>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at lease 8 charachters",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])/,
                message:
                  "Password must include uppercase, lowercase, numbers, and special characters",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter Password"
                type="password"
                {...field}
                style={{ border: errors.password ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div>
          <h3>Confirm Password</h3>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: "Confirm Password is required",
              minLength: {
                value: 6,
                message: "Minimum length must be 6",
              },
              maxLength: {
                value: 20,
                message: "Max length must be 20",
              },
              validate: (value) =>
                value === watch("password") ||
                "Confirm password should match given password",
            }}
            render={({ field }) => (
              <input
                placeholder="Enter Confirm Password"
                type="password"
                {...field}
                style={{
                  border: errors.confirmPassword ? "1px solid red" : "",
                }}
              />
            )}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>
        <div>
          <h3>Phone</h3>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Phone is required",
            }}
            render={({ field }) => (
              <input
                placeholder="Enter Phone"
                {...field}
                style={{ border: errors.phone ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
