import supabase from "./supabase";

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

export async function createCabin(newCabin) {
  const { data, error } = await supabase
    .from('cabins')
    .insert([newCabin])
    .select()

  if (error) {
    console.error(error)
    throw new Error("couldn't add a cabin")
  }

  return data;
}
