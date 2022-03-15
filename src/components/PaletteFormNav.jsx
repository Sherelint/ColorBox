import React, { useState } from "react";
import { Button } from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
export default function PaletteFormNav(props) {
  const [newName, setNewName] = useState("");
  const { addColor, color } = props;

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = () => {
    addColor(color);
  };
  return (
    <div className="flex w-full flex-col  items-center">
      <ValidatorForm
        onSubmit={handleSubmit}
        onError={(errors) => console.log(errors)}
        className="grow"
      >
        <TextValidator
          value={newName}
          label="Palette Name"
          onChange={handleChange}
          name="name"
          validators={["required"]}
          errorMessages={["this field is required", "name is not valid"]}
        ></TextValidator>
        <Button
          className="grow"
          type="submit"
          variant="contained"
          color="primary"
          style={{ backgroundColor: color }}
        >
          Add Color
        </Button>
      </ValidatorForm>
    </div>
  );
}
