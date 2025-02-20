import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as RouterLink } from "react-router-dom";
// import { Logo } from "./Logo";

export function Header() {
    return (
        <AppBar position="static" color="default" elevation={0}>
            <Toolbar className="container mx-auto max-w-7xl">
                <RouterLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    {/* <Logo /> */}
                </RouterLink>

                <div style={{ flexGrow: 1 }}></div>

                <Button
                    color="inherit"
                    href="https://docs.cabinpkg.com"
                    startIcon={<FontAwesomeIcon icon={faBookOpen} />}
                >
                    Docs
                </Button>
                <IconButton
                    color="inherit"
                    href="https://github.com/cabinpkg"
                    aria-label="Github"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </IconButton>
                <Button
                    variant="contained"
                    color="secondary"
                    href="https://github.com/sponsors/ken-matsui"
                    startIcon={<FontAwesomeIcon icon={faHeart} />}
                >
                    Sponsor
                </Button>
            </Toolbar>
        </AppBar>
    );
}
