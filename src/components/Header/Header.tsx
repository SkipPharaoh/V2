import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Logo from "../../assets/logo.png";

const pages: string[] = ["about", "experience", "projects", "contact"];

export const Header = (): JSX.Element => {
  const [anchorNav, setAnchorNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button href="/">
            <Avatar
              sx={{
                display: { xs: "flex" },
                mr: 1,
                outline: "solid",
                color: "white",
              }}
              src={Logo}
            />
          </Button>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page: string) => (
              <Button
                key={page}
                href={`#${page}`}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Button
              href={require("../../assets/docs/Resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ my: 2, color: "white", display: "block", outline: "solid" }}
            >
              Resume
            </Button>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", lg: "none", sm: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuOutlinedIcon fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page: string) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button href={`#${page}`}>{page}</Button>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                <Button
                  href={require("../../assets/docs/Resume.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
