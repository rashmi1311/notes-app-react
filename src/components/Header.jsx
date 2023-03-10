import React from "react";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

function Header() {
  return (
    <header>
      <h1>
        <NoteAddIcon style={{ marginRight: "7px" }} />
        Sticky Notes
      </h1>
    </header>
  );
}

export default Header;
