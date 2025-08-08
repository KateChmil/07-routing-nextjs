import NotesClient from "./Notes.client";
import { fetchNotes } from "../../lib/api";

export default async function Notes() {
 ;

  const firstData = await fetchNotes({search: "", page:1, perPage: 12});

  return (
    <NotesClient
      firstData={firstData}
      
    />
  );
}