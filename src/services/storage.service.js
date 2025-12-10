import { storage } from "./firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadFile = async (folder, file) => {
  const fileRef =
    ref(storage, `${folder}/${Date.now()}-${file.name}`);

  const snapshot = await uploadBytes(fileRef, file);
  return await getDownloadURL(snapshot.ref);
};
