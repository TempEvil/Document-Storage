import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Box, Flex, Button, Heading, Drawer, Portal, CloseButton } from "@chakra-ui/react";
// Icons
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { PrimaryColor, PrimaryTextColor } from "@/constants/style";

const Navbar = () => {
  const { pathname } = useLocation();

  // Dialog / menus state
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  // Logic for navbar style
  const navbarBg = "rgba(255, 255, 255, 0.95)";
  const navbarColor = "black";

  const navLinkHover = (isActive: boolean) => ({
    position: "relative",
    display: "inline-block",
    fontWeight: "semibold",
    color: PrimaryTextColor,
    _after: {
      content: '""',
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      width: isActive ? "100%" : "0",
      height: "2px",
      bgColor: PrimaryColor,
      transition: "all 0.1s",
    },
    _hover: {
      _after: {
        width: "100%",
      },
    },
  });

  const navLinkMobileStyle = (isActive: boolean) => ({
    position: "relative",
    display: "inline-block",
    color: isActive ? "#fff" : "inherit",
    bg: isActive ? PrimaryColor : "grey.200",
    fontWeight: "semibold",
    _hover: {
      bgColor: "gray.200",
      color: PrimaryTextColor,
    },
    transition: "all 0.15s ease",
  });

  const navItemList = [
    { url: "/", name: "Home" },
    { url: "/document", name: "Document" },
    { url: "/about-us", name: "About Us" },
  ];

  return (
    <Flex
      position="sticky"
      top="0"
      left="0"
      width="100%"
      height={{ base: "70px", md: "80px" }}
      paddingInline={{ base: "1rem", md: "2rem", lg: "10rem" }}
      justifyContent="space-between"
      alignItems="center"
      zIndex="1000"
      bgColor={navbarBg}
      color={navbarColor}
      backdropBlur="2xl"
      transition="all 0.1s"
      boxShadow="0 0 5px 1px rgba(0, 0, 0, 0.2)"
    >
      <Flex alignItems="center" justifyContent="space-between" w="100%">
        <NavLink to="/" style={{ boxShadow: "none", outline: "none" }}>
          <Heading size="2xl" cursor="pointer" onClick={() => window.scroll(0, 0)}>
            RithEvil
          </Heading>
        </NavLink>
        <Box as="ul" display={{ base: "none", lg: "flex" }} alignItems="center" columnGap={{ lg: "2rem" }}>
          {navItemList.map((path, index) => (
            <Box as="li" key={index} {...navLinkHover(pathname === path.url)} cursor="pointer">
              <NavLink to={path.url}>{path.name}</NavLink>
            </Box>
          ))}
        </Box>
      </Flex>

      {/* Hamburger - [Mobile Only] */}
      <Box display={{ base: "flex", lg: "none" }} position="relative">
        <Button
          onClick={() => {
            setIsOpenMobileMenu((prev) => !prev);
          }}
          bgColor={PrimaryColor}
          color="#fff"
          transition="all 0.3s"
          _focus={{ outline: "none" }}
        >
          {isOpenMobileMenu ? <IoClose /> : <RxHamburgerMenu />}
        </Button>
      </Box>

      <Drawer.Root open={isOpenMobileMenu} onOpenChange={({ open }) => setIsOpenMobileMenu(open)} placement="start">
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title marginBlock="1.15rem" paddingLeft="1rem" fontSize="2xl">
                  RithEvil
                </Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Box as="ul">
                  {navItemList.map((path, index) => (
                    <Box
                      as="li"
                      key={index}
                      {...navLinkMobileStyle(pathname === path.url)}
                      w="100%"
                      cursor="pointer"
                      onClick={() => setIsOpenMobileMenu((prev) => !prev)}
                    >
                      <NavLink
                        to={path.url}
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          textDecoration: "none",
                          width: "100%",
                          padding: "0.75rem 1rem",
                        }}
                      >
                        {path.name}
                      </NavLink>
                    </Box>
                  ))}
                </Box>
              </Drawer.Body>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="md" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Flex>
  );
};

export default Navbar;
