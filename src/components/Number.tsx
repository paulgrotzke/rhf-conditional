import React, { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../App";

export const Number: React.FC = () => {
  const { control, watch, setValue } = useFormContext<FormData>();

  const showNumber = watch("showNumber");

  useEffect(() => {
    if (showNumber === "no") {
      setValue("number", "", { shouldValidate: true });
    }
  }, [showNumber, setValue]);

  if (showNumber !== "yes") return null;

  return (
    <Controller
      name="number"
      control={control}
      render={({ field, fieldState: { error } }) => {
        console.log("inside number");
        return (
          <div>
            <input type="text" id="number" aria-label="Number" {...field} />
            {error && <span>{error.message}</span>}
          </div>
        );
      }}
    />
  );
};
