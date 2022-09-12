import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useDocuments = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  // realtime data for document
  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id);

    const unsub = ref.onSnapshot(
      (snapshot) => {
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          setError(null);
        } else {
          setError("no such document exists");
        }
      },
      (error) => {
        console.log(error.message);
        setError("Failed to get documents");
      }
    );
    return () => unsub();
  }, [collection, id]);
  return { document, error };
};
