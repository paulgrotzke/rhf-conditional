import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Name } from "./components/Name";
import { Number } from "./components/Number";
import { RadioSelection } from "./components/RadioSelection";

const formSchema = z
  .object({
    name: z.string().min(5, { message: "String Error" }),
    showNumber: z.enum(["yes", "no"]),
    number: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.showNumber === "yes") {
        return data.number && data.number.length >= 5;
      }
      return true;
    },
    {
      message: "Number Error",
      path: ["number"],
    }
  );

export type FormData = z.infer<typeof formSchema>;

const App = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      showNumber: "no",
      number: "",
    },
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Name />
        <RadioSelection />
        {methods.watch("showNumber") === "yes" && <Number />}
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default App;
