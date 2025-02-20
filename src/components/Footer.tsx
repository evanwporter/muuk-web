import { Typography, Link, Box } from "@mui/material";

export function Footer() {
    return (
        <Box component="footer" py={3} textAlign="center">
            <Typography variant="body2" color="textSecondary">
                © {new Date().getFullYear()}{" "}
                <Link
                    href="https://github.com/ken-matsui"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                >
                    Ken Matsui
                </Link>
            </Typography>
        </Box>
    );
}
