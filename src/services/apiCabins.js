import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {

  let { data, error } = await supabase
    .from('cabins')
    .select('*')

  if (error) {
    console.error(error)
    throw new Error("cabins couldn't be loaded")
  }

  return data;
}

export async function deleteCabin(cabinId) {

  const { error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', cabinId)

  if (error) {
    console.error(error)
    throw new Error("cabins couldn't be deleted")
  }
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")

  const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  //1.create the cabin
  let query = supabase.from("cabins")

  // A)CREATE
  if (!id)
    query = query
      .insert([{ ...newCabin, image: imagePath }])

  // B)EDIT
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq('id', id)

  const { data, error } = await query
    .select()
    .single();

  if (error) {
    console.log(error)
    throw new Error("couldn't add a cabin")
  }

  //2.Upload image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image)

  //3. Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase
      .from('cabins')
      .delete()
      .eq('id', data.id)

    console.error(storageError)
    throw new Error("cabin image couldn't be uploaded and the cabin won't be created")
  }

  return data;
}
