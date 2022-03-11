import React, { useState } from "react";
import { Divider, Drawer, IconButton, Typography, Button } from "@mui/material";
import { Icon } from "@iconify/react";
import { withStyles } from "@mui/styles";
import styles from "../styles/NewPaletteFormStyles";
import seedColors from "../seedColors";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
function NewPaletteForm(props) {
  const { classes, maxColors, palettes } = props;
  const [open, setOpen] = useState(false);
  const [toogle, setToogle] = useState(false);
  const [colors, setColors] = useState(seedColors[0].colors);

  const paletteIsFull = colors.length >= maxColors;

  const handleDrawer = () => {
    setOpen(!open);
  };
  const addNewColor = (newColor) => {
    setColors({
      colors: [...colors, newColor],
      newColorName: "",
    });
  };
  const handleChange = (evt) => {
    setToogle({
      [evt.target.name]: evt.target.value,
    });
  };
  const clearColors = () => {
    setColors({ colors: [] });
  };

  const addRandomColor = () => {
    const allColors = props.palettes.map((p) => p.colors).flat();
    let rand;
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      isDuplicateColor = colors.some(
        (color) => color.name === randomColor.name
      );
    }
    setColors({ colors: [...colors, randomColor] });
  };
  const handleSubmit = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    newPalette.colors = colors;
    props.savePalette(newPalette);
    props.history.push("/");
  };
  const removeColor = (colorName) => {
    setColors({
      colors: colors.filter((color) => color.name !== colorName),
    });
  };
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  return (
    <div /*className={classes.root}*/>
      <PaletteFormNav
        open={open}
        palettes={palettes}
        handleSubmit={handleSubmit}
        handleDrawerOpen={handleDrawer}
      />
      <Drawer
        /*className={classes.drawer}*/
        variant="persistent"
        anchor="left"
        open={open}
        /*classes={{
          paper: classes.drawerPaper,
        }}*/
      >
        <div /*className={classes.drawerHeader}*/>
          <IconButton onClick={handleDrawer}>
            <Icon icon="akar-icons:chevron-left" />
          </IconButton>
        </div>
        <Divider />
        <div /*className={classes.container}*/>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div /*className={classes.buttons}*/>
            <Button
              variant="contained"
              color="secondary"
              onClick={clearColors}
              /*className={classes.button}*/
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              /*className={classes.button}*/
              color="primary"
              onClick={addRandomColor}
              disabled={paletteIsFull}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            paletteIsFull={paletteIsFull}
            addNewColor={addNewColor}
            colors={colors}
          />
        </div>
      </Drawer>
      <main
      /*className={classNames(classes.content, {
          [classes.contentShift]: open,
        })}*/
      >
        <div /*className={classes.drawerHeader} */></div>
        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
          distance={20}
        />
      </main>
    </div>
  );
}
export default NewPaletteForm;
