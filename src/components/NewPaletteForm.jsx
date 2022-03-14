import React from "react";
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
import { Menu, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Main, AppBar, DrawerHeader } from "../styles/NewPaletteFormStyles";

import seedColors from "../seedColors";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
function NewPaletteForm(props) {
  const drawerWidth = 240;
  const theme = useTheme();
  const { classes, maxColors, palettes } = props;
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
        <ColorPickerForm />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <PaletteFormNav />
      </Main>
    </Box>
  );
}

export default NewPaletteForm;
