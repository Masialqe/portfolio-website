"use client";

import React from "react";
// import "../../../styles/components/admin/galleryForm.css";
// import "../../../globals.css";
import AddIcon from "@mui/icons-material/Add";

const GalerryForm = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <form
        name="galleryForm"
        autoComplete="on"
        acceptCharset="UTF-8"
        onSubmit={handleSubmit}
      >
        <label htmlFor="titleInput">Title</label>
        <input
          type="text"
          name="title"
          id="titleInput"
          className="input"
          required
          autoFocus
        />

        <label htmlFor="descriptionInput">Description</label>
        <input
          type="text"
          name="description"
          id="descriptionInput"
          className="input"
          required
        />

        <label htmlFor="imageInput">Image</label>
        <input
          type="file"
          name="thumbnail"
          id="imageInput"
          accept="image/png, image/jpeg, image/webp"
        />

        <button type="submit" className="button outlined">
          Add
        </button>
      </form>
    </>
  );
};

export default GalerryForm;
