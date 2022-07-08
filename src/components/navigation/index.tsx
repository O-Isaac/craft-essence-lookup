import { AppBar, Box, Container, Typography, IconButton, Menu, MenuItem, Toolbar, Button } from '@mui/material'
import {
    SxProps,
    Theme,
    PopoverOrigin,
    TypographyPropsVariantOverrides,
    IconButtonProps,
    MenuProps,
} from '@mui/material'

import { Link } from 'react-router-dom'

import { useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu'

const pages: string[] = ['Credits']

const Title = ({ str }: { str: string }) => {
    const titleStyles: SxProps<Theme> = {
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
        filter: 'none',
    }

    const titleProps: TypographyPropsVariantOverrides = {
        variant: 'h6',
        noWrap: true,
        component: 'a',
        href: '/',
        sx: { titleStyles },
    }

    return <Typography {...titleProps}>{str}</Typography>
}

interface AppBarItemsProps {
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void
    anchorElNav: HTMLElement | null
    handleCloseNavMenu: () => void
}

const AppBarItems = (props: AppBarItemsProps) => {
    const { anchorElNav, handleCloseNavMenu, handleOpenNavMenu } = props

    const IconButtonProp: IconButtonProps = {
        size: 'large',
        'aria-label': 'account of current user',
        'aria-controls': 'menu-appbar',
        'aria-haspopup': 'true',
        color: 'inherit',
        onClick: handleOpenNavMenu,
    }

    const anchorOriginProps: PopoverOrigin = {
        vertical: 'bottom',
        horizontal: 'left',
    }

    const transfromOriginProps: PopoverOrigin = {
        vertical: 'top',
        horizontal: 'left',
    }

    const stylesProps: SxProps<Theme> = {
        display: { xs: 'block', md: 'none' },
    }

    const MenuProps: MenuProps = {
        id: 'menu-appbar',
        anchorEl: anchorElNav,
        anchorOrigin: anchorOriginProps,
        keepMounted: true,
        transformOrigin: transfromOriginProps,
        open: Boolean(anchorElNav),
        onClose: handleCloseNavMenu,
        sx: { stylesProps },
    }

    return (
        <Box sx={{ flexGrow: 1, justifyContent: 'end', display: { xs: 'flex', md: 'none' } }}>
            <IconButton {...IconButtonProp}>
                <MenuIcon />
            </IconButton>
            <Menu {...MenuProps}>
                {pages.map((page) => (
                  <Link to={page.toLowerCase()}>
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </Link>
                ))}
            </Menu>
        </Box>
    )
}

const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const stylesProps: SxProps<Theme> = { my: 2, color: 'white', display: 'block' }

    return (
        <AppBar elevation={0} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to={"/"}>
                        <Title str="Craft Essence Lookup" />
                    </Link>
                    <AppBarItems
                        anchorElNav={anchorElNav}
                        handleCloseNavMenu={handleCloseNavMenu}
                        handleOpenNavMenu={handleOpenNavMenu}
                    />

                    <Box sx={{ flexGrow: 1, justifyContent: 'end', display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link to={page.toLowerCase()}>
                                <Button key={page} onClick={handleCloseNavMenu} sx={stylesProps}>
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navigation
