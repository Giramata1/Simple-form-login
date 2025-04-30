import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const formSchema = z.object({
  username: z.string().min(4, "Username should be at least 4 characters"),
  email: z.string().email("Email is not valid"),
  age: z.number().min(18, "You must be 18 or older"),
});

function SimpleForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values) {
    console.log(values);
    alert("Form submitted");
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="form-container">
      <h2 className="form-title">Register</h2>

      <div className="form-group">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          id="username"
          type="text"
          className="form-input"
          placeholder="Name"
          {...form.register("username")}
        />
        {form.formState.errors.username && (
          <p className="error-message">{form.formState.errors.username.message}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          id="email"
          type="text"
          className="form-input"
          placeholder="Email"
          {...form.register("email")}
        />
        {form.formState.errors.email && (
          <p className="error-message">{form.formState.errors.email.message}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="age" className="form-label">Age</label>
        <input
          id="age"
          type="number"
          className="form-input"
          placeholder="Age"
          {...form.register("age", { valueAsNumber: true })}
        />
        {form.formState.errors.age && (
          <p className="error-message">{form.formState.errors.age.message}</p>
        )}
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default SimpleForm;
