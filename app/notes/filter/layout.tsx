// app/notes/filter/layout.tsx
import css from "./LayoutNotes.module.css";
type Props = {
  children: React.ReactNode;
};

const NotesLayout = ({ children }: Props) => {
  return (
        <div className={css.container}>
      
      <div className={css.notesWrapper}>{children}</div>
    </div>
  );
};

export default NotesLayout;
