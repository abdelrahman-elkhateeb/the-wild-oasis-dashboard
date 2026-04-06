import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { Textarea } from "../../ui/Textarea";
import { useCreateCabin } from "./useCreateCabin";
import { useUpdateCabin } from "./useUpdateCabin";

CreateCabinForm.propTypes = {
  cabinToEdit: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    maxCapacity: PropTypes.number,
    regularPrice: PropTypes.number,
    discount: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
  onCloseModal: PropTypes.func
};

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit;
  //create cabin
  const { isCreating, createCabin } = useCreateCabin();
  //edit cabin
  const { isEditing, editCabin } = useUpdateCabin();

  const isEditSession = Boolean(editId);

  const { register, handleSubmit, getValues, formState, reset } = useForm(
    {
      defaultValues: isEditSession ? editValues : {}
    }
  );

  const { errors } = formState;

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditSession) editCabin({ newCabinData: { ...data, image }, id: editId }, { onSuccess: () => { reset(); onCloseModal?.() } });
    else createCabin({ ...data, image: image }, { onSuccess: () => { reset(); onCloseModal?.() } });
  }

  function onError(errors) {
    console.error(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)} type={onCloseModal ? "modal" : "regular"}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "this field is required"
          })} />
      </FormRow>

      <FormRow label="maximum Capacity" error={errors?.maxCapacity?.message}>
        <Input type="number"
          id="maxCapacity"
          disabled={isWorking}
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
          disabled={isWorking}
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
            required: isEditSession ? false : "this field is required"
          })} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? "Edit Cabin" : "Create New Cabin"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
