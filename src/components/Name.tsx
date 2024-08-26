import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../App";

export const Name = () => {
  const { control } = useFormContext<FormData>();

  return (
    <Controller
      name="name"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <input type="text" id="name" aria-label="Vorname" {...field} />
          {error && <span>{error.message}</span>}
        </div>
      )}
    />
  );
};
