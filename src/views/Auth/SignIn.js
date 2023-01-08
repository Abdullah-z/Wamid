import React from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
  background,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.png";
import BgSignUp from "assets/img/BgSignUp.png";
import { useTranslation } from "hooks";
import Card from "components/Card/Card";
import Footer from "components/Footer/Footer";

function SignIn() {
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  const { t } = useTranslation();
  const imageurl = require("../../assets/img/Background.jpg");
  const logo = require("../../assets/img/Wamid-Logo-Black.png");
  const { locale, setLocale } = useTranslation();
  return (
    <Box backgroundImage={imageurl} backgroundSize={"cover"} h="calc(100vh)">
      <Image src={logo} height={100} padding={3} />
      <Flex position="relative">
        <Flex
          h={{ sm: "initial", md: "86vh", lg: "86vh" }}
          w="100%"
          maxW="1044px"
          mx="auto"
          justifyContent="center"
          pt={{ sm: "100px", md: "0px" }}
        >
          <Flex
            alignItems="center"
            justifyContent="start"
            style={{ userSelect: "none" }}
            w={{ base: "100%", md: "50%", lg: "42%" }}
          >
            <Flex direction="column" w="100%" background="transparent">
              <Card background={"rgba(92, 179, 209, .7)"}>
                <Heading textAlign={"center"} color={"white"} fontSize="32px">
                  {t("Sign_In")}
                </Heading>

                <FormControl>
                  <FormLabel
                    ms="4px"
                    fontSize="sm"
                    color={"white"}
                    fontWeight="normal"
                  >
                    {t("Email")}
                  </FormLabel>
                  <Input
                    borderRadius="15px"
                    mb="24px"
                    fontSize="sm"
                    type="text"
                    placeholder="Your email adress"
                    size="lg"
                    backgroundColor={"white"}
                  />
                  <FormLabel
                    color={"white"}
                    ms="4px"
                    fontSize="sm"
                    fontWeight="normal"
                  >
                    {t("Password")}
                  </FormLabel>
                  <Input
                    backgroundColor={"white"}
                    borderRadius="15px"
                    mb="36px"
                    fontSize="sm"
                    type="password"
                    placeholder="Your password"
                    size="lg"
                  />
                  <FormControl display="flex" alignItems="center">
                    <Switch id="remember-login" colorScheme="teal" me="10px" />
                    <FormLabel
                      htmlFor="remember-login"
                      mb="0"
                      ms="1"
                      fontWeight="normal"
                      color={"white"}
                    >
                      {t("RememberMe")}
                    </FormLabel>
                  </FormControl>
                  <Button
                    fontSize="15px"
                    type="submit"
                    bg="teal.300"
                    w="100%"
                    h="45"
                    mb="20px"
                    color="white"
                    mt="20px"
                    _hover={{
                      bg: "teal.200",
                    }}
                    _active={{
                      bg: "teal.400",
                    }}
                  >
                    {t("Sign_In")}
                  </Button>
                </FormControl>
                <Text color={textColor} fontWeight="medium" color={"white"}>
                  {t("Dont_Have_Account")}
                  <Link color={titleColor} as="span" ms="5px" fontWeight="bold">
                    {" "}
                    {t("Sign_Up_Here")}
                  </Link>
                </Text>
              </Card>
              <Box alignContent={"center"} alignItems={"center"}>
                <Text
                  mt={1}
                  align={"center"}
                  onClick={() => {
                    locale === "ar" ? setLocale("en") : setLocale("ar");
                  }}
                  color="gray.400"
                >
                  {locale === "ar" ? "English" : "العربية"}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}

export default SignIn;
