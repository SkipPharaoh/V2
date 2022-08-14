import * as React from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, MenuItem } from "@mui/material";
import Logo from '../../assets/logo.png';

const pages: string[] = ['about', 'experience', 'projects', 'contact', 'resume'];

const Header: React.FC<{}> = () => {

  const [anchorNav, setAnchorNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} src={Logo}/>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page: string) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                href={`#${page}`}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <Avatar src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
      // <div>
      //   <a href="/">
      //     <img
      //       src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"
      //       alt="Keep"
      //     />
      //   </a>
      // </div>
      // <div>
      //   <a href="#about">About</a>
      //   <a href="#experience">Experience</a>
      //   <a href="#projects">Projects</a>
      //   <a href="#contact">Contact</a>
      // </div>
      // <div>
      //   <a
      //     href={require("../../assets/docs/Resume.pdf")}
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Resume
      //   </a>
      // </div>
  );
};

export default Header;