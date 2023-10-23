import { useForm, useFieldArray, FieldErrors } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

let renderCount = 0;

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  addr1: string;
  addr2: string;
  state: string;
  zip: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  phNumbers: {
    number: string;
  }[];
};

export const UserForm = () => {
  const form = useForm<FormValues>({
    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      return {
        firstName: data.name,
        lastName: data.name,
        email: data.email,
        addr1: data.address.street,
        addr2: data.address.suite,
        state: data.address.state,
        zip: data.address.zip,
        social: {
          twitter: "",
          facebook: "",
        },
        phoneNumbers: ["", ""],
        phNumbers: [{ number: "" }],
      };
    },
  });

  //Controls for the form
  const { register, control, handleSubmit, formState, reset } = form;
  //States of the form
  const {
    errors,
    isDirty,
    isValid,
    isSubmitting,
    isSubmitted,
    isSubmitSuccessful,
    submitCount,
  } = formState;

  console.log({ isSubmitting, isSubmitted, isSubmitSuccessful, submitCount });

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted: ", data);
  };

  //Submit errors
  const onError = (errors: FieldErrors<FormValues>) => {
    console.log("Form Submitted:errors: ", errors);
  };

  //After a successful submit, Reset the values.
  //Need to useEffect instead of calling from onSubmit
  // - Not sure why we would want to do this. seems like if it submitted, we wouldn't want to
  // - reset the form, but show a new page.
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  //Testing reload
  renderCount++;

  return (
    <div>
      <h1>User Form: ({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: "First Name is required" })}
          />
          <p className="error">{errors.firstName?.message}</p>
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: "Last Name is required" })}
          />
          <p>{errors.lastName?.message}</p>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              pattern: {
                value:
                  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                message: "Invalid email format",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@example.com" ||
                    "Enter a different email addrress"
                  );
                },
                notBLackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("baddomain") ||
                    "This domain is not supported"
                  );
                },
              },
            })}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="addr1">Address Line 1:</label>
          <input
            type="text"
            id="addr1"
            {...register("addr1", { required: "Address is required" })}
          />
          <p>{errors.addr1?.message}</p>
        </div>

        <div>
          <label htmlFor="addr2">Address Line 2:</label>
          <input type="text" id="addr2" {...register("addr2")} />
          <p></p>
        </div>

        <div>
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            {...register("state", { required: "State is required" })}
          />
          <p>{errors.state?.message}</p>
        </div>

        <div>
          <label htmlFor="zip">Zip Code:</label>
          <input
            type="text"
            id="zip"
            {...register("zip", { required: "Zip is required" })}
          />
          <p>{errors.zip?.message}</p>
        </div>

        <div>
          <label htmlFor="twitter">Twitter:</label>
          <input type="text" id="twitter" {...register("social.twitter")} />
        </div>

        <div>
          <label htmlFor="facebook">Twitter:</label>
          <input type="text" id="facebook" {...register("social.facebook")} />
        </div>

        <div>
          <label htmlFor="primary-phone">Primary Phone:</label>
          <input
            type="text"
            id="primary-phone"
            {...register("phoneNumbers.0")}
          />
        </div>
        <div>
          <label htmlFor="secondary-phone">Secondary Phone:</label>
          <input
            type="text"
            id="secondary-phone"
            {...register("phoneNumbers.1")}
          />
        </div>

        <div>
          <label htmlFor="">List of Phone numbers:</label>
        </div>
        <div>
          {fields.map((field, index) => {
            return (
              <div className="form-control" key={field.id}>
                <input
                  type="text"
                  {...register(`phNumbers.${index}.number` as const)}
                />
                {index > 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    Remove
                  </button>
                )}
              </div>
            );
          })}
          <button type="button" onClick={() => append({ number: "" })}>
            Add Phone Number
          </button>
        </div>
        {/* Disable the submit button if nothing has changed from initial vlaues 
        or if an fields are in an invalidated form. */}
        <button type="submit" disabled={!isDirty || !isValid || isSubmitting}>
          Submit
        </button>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
