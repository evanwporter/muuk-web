import { AppBar, Toolbar, Button, Typography, IconButton, TextField, InputAdornment, Box } from "@mui/material";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBookOpen, faHeart, faSearch, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#000", px: 3 }}>
      <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center", color: "#A0A0A0" }}>
          <FontAwesomeIcon icon={faHome} size="lg" />
          <Typography variant="h6" sx={{ ml: 1, fontWeight: "bold" }}>
            Cabin
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box sx={{ flexGrow: 1, mx: 3, maxWidth: 400 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search packages"
            fullWidth
            sx={{
              backgroundColor: "#222",
              borderRadius: 3,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" },
                "&:hover fieldset": { border: "none" },
                "&.Mui-focused fieldset": { border: "none" },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faSearch} color="#A0A0A0" />
                </InputAdornment>
              ),
              sx: { color: "#A0A0A0" },
            }}
          />
        </Box>

        {/* Navigation Links */}
        <Button color="inherit" href="https://docs.cabinpkg.com" sx={{ color: "#A0A0A0", textTransform: "none", mx: 1 }}>
          <FontAwesomeIcon icon={faBookOpen} style={{ marginRight: 5 }} /> Docs
        </Button>

        <IconButton color="inherit" href="https://github.com/cabinpkg" sx={{ color: "#A0A0A0", mx: 1 }}>
          <FontAwesomeIcon icon={faGithub} />
        </IconButton>

        {/* Sponsor Button */}
        <Button
          variant="contained"
          href="https://github.com/sponsors/cabinpkg"
          sx={{
            backgroundColor: "#ff2d55",
            color: "white",
            borderRadius: 5,
            textTransform: "none",
            fontWeight: "bold",
            px: 2,
            "&:hover": { backgroundColor: "#e0254e" },
          }}
        >
          <FontAwesomeIcon icon={faHeart} style={{ marginRight: 5 }} /> Sponsor
        </Button>

      </Toolbar>
    </AppBar>
  );
}
