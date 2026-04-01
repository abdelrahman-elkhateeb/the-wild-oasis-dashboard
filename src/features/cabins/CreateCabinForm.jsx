
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createCabin } from "../../services/apiCabins";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { Textarea } from "../../ui/Textarea";


function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("new cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] }),
        reset()
    },
    onError: (error) => toast.error(error.message),
  })

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }

  function onError(errors) {
    console.error(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name", {
            required: "this field is required"
          })} />
      </FormRow>

      <FormRow label="maximum Capacity" error={errors?.maxCapacity?.message}>
        <Input type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register("maxCapacity", {
            required: "this field is required",
            min: {
              value: 1,
              message: "Capacity should be at least one"
            }
          })} />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register("regularPrice", {
            required: "this field is required",
            min: {
              value: 1,
              message: "Capacity should be at least one"
            }
          })} />
      </FormRow>

      <FormRow label="discount"
        error={errors?.discount?.message}
      >
        <Input type="number" id="discount" defaultValue={0} {...register("discount", {
          required: "this field is required",
          validate: (value) => value <= getValues().regularPrice || "Discount should be less than regular price",
        })} />
      </FormRow>

      <FormRow label="description" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          defaultValue="" {...register("description", {
            required: "this field is required"
          })} />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          defaultValue=""
          {...register("image", {
            required: "this field is required"
          })} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
