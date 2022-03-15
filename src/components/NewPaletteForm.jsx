import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer,
  Toolbar,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import { Menu, ChevronLeft, ChevronRight, Add } from "@mui/icons-material";
import { Main, AppBar, DrawerHeader } from "../styles/NewPaletteFormStyles";

import seedColors from "../seedColors";
import ColorPickerForm from "./ColorPickerForm";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
function NewPaletteForm(props) {
  const drawerWidth = 400;
  const theme = useTheme();
  const { classes, maxColors, palettes } = props;
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(["purple", "#e15764"]);
  const [currentColor, setCurrentColor] = useState("red");
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const AddColor = (value) => {
    setColors([...colors, value]);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <ColorPickerForm
          AddColor={AddColor}
          color={currentColor}
          setCurrentColor={setCurrentColor}
        />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {colors.map((color) => (
          <DraggableColorList key={color} color={color} />
        ))}
      </Main>
    </Box>
  );
}

export default NewPaletteForm;
