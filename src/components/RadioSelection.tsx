import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../App";

export const RadioSelection: React.FC = () => {
  const { control } = useFormContext<FormData>();

  return (
    <Controller
      name="showNumber"
      control={control}
      render={({ field }) => (
        <div>
          <label>Nummer anzeigen?</label>
          <div>
            <label>
              <input
                type="radio"
                {...field}
                value="yes"
                checked={field.value === "yes"}
              />
              Ja
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                {...field}
                value="no"
                checked={field.value === "no"}
              />
              Nein
            </label>
          </div>
        </div>
      )}
    />
  );
};
