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

function SignIn() {
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  const { t } = useTranslation();
  const imageurl = require("../../assets/img/Background.jpg");
  const logo = require("../../assets/img/Wamid-Logo-Black.png");
  return (
    <Box backgroundImage={imageurl}>
      <Image src={logo} height={100} padding={3} />
      <Flex position="relative" paddingBottom="15px">
        <Flex
          h={{ sm: "initial", md: "75vh", lg: "85vh" }}
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
            <Flex direction="column" w="100%" background="transparent" p="48px">
              <Card background={"rgba(92, 179, 209, .7)"}>
                <Heading textAlign={"center"} color={"white"} fontSize="32px">
                  {t("Sign_In")}
                </Heading>
                {/* <Text
                  mb="36px"
                  ms="4px"
                  color={"white"}
                  fontWeight="bold"
                  fontSize="14px"
                >
                  {t("Sign_Description")}
                </Text> */}
                <FormControl>
                  <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                    {t("Email")}
                  </FormLabel>
                  <Input
                    borderRadius="15px"
                    mb="24px"
                    fontSize="sm"
                    type="text"
                    placeholder="Your email adress"
                    size="lg"
                  />
                  <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                    {t("Password")}
                  </FormLabel>
                  <Input
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
                <Text color={textColor} fontWeight="medium">
                  {t("Dont_Have_Account")}
                  <Link color={titleColor} as="span" ms="5px" fontWeight="bold">
                    {" "}
                    {t("Sign_Up_Here")}
                  </Link>
                </Text>
              </Card>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default SignIn;
