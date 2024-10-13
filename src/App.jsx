import { Box, Button, TextField, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SavedSearchOutlinedIcon from "@mui/icons-material/SavedSearchOutlined";
import "./App.css";
import ResponsiveAppBar from "./components/header";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <div className="container mx-auto">
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          padding={2}
          bgcolor={"green"}
          color={"#fff"}
          marginBottom={3}
        >
          <Typography
            variant="h2"
            fontSize={"1.4rem"}
            fontFamily={"poppins"}
            sx={{
              cursor: "pointer",
            }}
          >
            Image Gallery
          </Typography>
          <Button
            variant="outlined"
            color="white"
            endIcon={<PersonOutlineIcon />}
          >
            Login
          </Button>
        </Box>

        <Box display={"flex"} gap={2}>
          <TextField
            id="outlined-basic"
            label="Search your Images"
            variant="outlined"
            fullWidth
          />
          <Button
            variant="contained"
            color={"success"}
            endIcon={<SavedSearchOutlinedIcon />}
          >
            Search
          </Button>
        </Box>
      </div>
    </>
  );
}

export default App;
