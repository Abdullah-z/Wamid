import React, { useState } from "react";
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
  Checkbox,
  Wrap,
  WrapItem,
  Avatar,
  Select,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.png";
import BgSignUp from "assets/img/BgSignUp.png";
import { useTranslation } from "hooks";
import Card from "components/Card/Card";
import { CheckIcon } from "@chakra-ui/icons";

function SignUp() {
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  const { t } = useTranslation();
  const imageurl = require("../../assets/img/Background.jpg");
  const logo = require("../../assets/img/Wamid-Logo-Black.png");
  const [step, setStep] = useState(1);
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
            <Flex direction="column" w="100%" background="transparent">
              <Wrap display={"flex"} justifyContent={"center"} marginBottom={2}>
                <WrapItem>
                  <Avatar
                    name={step <= 1 ? "1" : ""}
                    backgroundColor={"rgba(92, 179, 209, .7)"}
                    borderWidth={step === 1 ? 5 : 0}
                    icon={
                      step > 1 ? (
                        <CheckIcon fontSize="1.5rem" color={"white"} />
                      ) : (
                        <></>
                      )
                    }
                  />
                </WrapItem>
                <WrapItem>
                  <Avatar
                    name={step <= 2 ? "2" : ""}
                    backgroundColor={"rgba(92, 179, 209, .7)"}
                    borderWidth={step === 2 ? 5 : 0}
                    icon={
                      step > 2 ? (
                        <CheckIcon fontSize="1.5rem" color={"white"} />
                      ) : (
                        <></>
                      )
                    }
                  />
                </WrapItem>

                <WrapItem>
                  <Avatar
                    name={step <= 3 ? "3" : ""}
                    backgroundColor={"rgba(92, 179, 209, .7)"}
                    borderWidth={step === 3 ? 5 : 0}
                    icon={
                      step > 3 ? (
                        <CheckIcon fontSize="1.5rem" color={"white"} />
                      ) : (
                        <></>
                      )
                    }
                  />
                </WrapItem>
                <WrapItem>
                  <Avatar
                    name={step <= 4 ? "4" : ""}
                    backgroundColor={"rgba(92, 179, 209, .7)"}
                    borderWidth={step === 4 ? 5 : 0}
                    icon={
                      step > 4 ? (
                        <CheckIcon fontSize="1.5rem" color={"white"} />
                      ) : (
                        <></>
                      )
                    }
                  />
                </WrapItem>
              </Wrap>
              <Card background={"rgba(92, 179, 209, .7)"}>
                {step === 1 ? (
                  <>
                    <Heading
                      textAlign={"center"}
                      color={"white"}
                      fontSize="32px"
                    >
                      {t("SignUp")}
                    </Heading>
                    <Text
                      mb="36px"
                      ms="4px"
                      color={"white"}
                      fontWeight="bold"
                      fontSize="14px"
                    >
                      {/* {t("Sign_Description")} */}
                    </Text>
                    <FormControl>
                      <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                        {t("Email")}
                      </FormLabel>
                      <Input
                        backgroundColor={"white"}
                        borderRadius="15px"
                        mb="24px"
                        fontSize="sm"
                        type="text"
                        placeholder="Your email adress"
                        size="lg"
                      />
                      <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                        {t("Phone_Number")}
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
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent="center"
                      >
                        <Box>
                          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                            {t("Password")}
                          </FormLabel>
                          <Input
                            backgroundColor={"white"}
                            htmlSize={20}
                            width="auto"
                            borderRadius="15px"
                            mb="36px"
                            fontSize="sm"
                            type="password"
                            size="lg"
                            mx={1}
                          />
                        </Box>

                        <Box>
                          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                            {t("Confirm_Password")}
                          </FormLabel>
                          <Input
                            backgroundColor={"white"}
                            htmlSize={20}
                            width="auto"
                            borderRadius="15px"
                            mb="36px"
                            fontSize="sm"
                            type="password"
                            size="lg"
                            mx={1}
                          />
                        </Box>
                      </Box>

                      <Checkbox defaultChecked>
                        I agree to all terms & conditions
                      </Checkbox>
                      <Button
                        onClick={() => setStep(step + 1)}
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
                        {t("Next")}
                      </Button>
                    </FormControl>
                    <Text color={textColor} fontWeight="medium">
                      {t("Dont_Have_Account")}
                      <Link
                        color={titleColor}
                        as="span"
                        ms="5px"
                        fontWeight="bold"
                      >
                        {t("Sign_Up_Here")}
                      </Link>
                    </Text>
                  </>
                ) : step === 2 ? (
                  <>
                    <Heading
                      textAlign={"center"}
                      color={"white"}
                      fontSize="32px"
                    >
                      {t("SMS_OTP_Verification")}
                    </Heading>
                    <Text
                      align={"center"}
                      mt={4}
                      mb="36px"
                      ms="4px"
                      color={"white"}
                      fontWeight="bold"
                      fontSize="14px"
                    >
                      {t("SMS_OTP_DETAIL")}
                    </Text>
                    <FormControl>
                      <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                        OTP
                      </FormLabel>
                      <Input
                        backgroundColor={"white"}
                        borderRadius="15px"
                        mb="24px"
                        fontSize="sm"
                        type="text"
                        size="lg"
                      />

                      <Box display={"flex"} flexDirection={"row"}>
                        <Button
                          mx={2}
                          onClick={() => setStep(step - 1)}
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
                          {t("Back")}
                        </Button>
                        <Button
                          mx={2}
                          onClick={() => setStep(step + 1)}
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
                          {t("Next")}
                        </Button>
                      </Box>
                    </FormControl>
                    <Text color={textColor} fontWeight="medium">
                      {t("Dont_Have_Account")}
                      <Link
                        color={titleColor}
                        as="span"
                        ms="5px"
                        fontWeight="bold"
                      >
                        {t("Sign_Up_Here")}
                      </Link>
                    </Text>
                  </>
                ) : step === 3 ? (
                  <>
                    <Heading
                      textAlign={"center"}
                      color={"white"}
                      fontSize="32px"
                    >
                      Confirm Registration
                    </Heading>

                    <FormControl>
                      <FormLabel
                        ms="4px"
                        fontSize="sm"
                        fontWeight="normal"
                        mt={5}
                      >
                        {t("IdentityNumber")}
                      </FormLabel>
                      <Input
                        backgroundColor={"white"}
                        borderRadius="15px"
                        mb="24px"
                        fontSize="sm"
                        type="text"
                        size="lg"
                      />
                      <Select
                        placeholder="Select Company"
                        backgroundColor={"white"}
                      >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </Select>

                      <Text
                        align={"center"}
                        mt={4}
                        mb="36px"
                        ms="4px"
                        color={"white"}
                        fontWeight="bold"
                        fontSize="14px"
                      >
                        An OTP will be sent to your registered company phone
                        number for KYC verification.
                      </Text>

                      <Box display={"flex"} flexDirection={"row"}>
                        <Button
                          mx={2}
                          onClick={() => setStep(step - 1)}
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
                          {t("Back")}
                        </Button>
                        <Button
                          mx={2}
                          onClick={() => setStep(step + 1)}
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
                          {t("Next")}
                        </Button>
                      </Box>
                    </FormControl>
                    <Text color={textColor} fontWeight="medium">
                      {t("Dont_Have_Account")}
                      <Link
                        color={titleColor}
                        as="span"
                        ms="5px"
                        fontWeight="bold"
                      >
                        {t("Sign_Up_Here")}
                      </Link>
                    </Text>
                  </>
                ) : step === 4 ? (
                  <>
                    <Heading
                      textAlign={"center"}
                      color={"white"}
                      fontSize="32px"
                    >
                      {t("SMS_OTP_Verification")}
                    </Heading>
                    <Text
                      align={"center"}
                      mt={4}
                      mb="36px"
                      ms="4px"
                      color={"white"}
                      fontWeight="bold"
                      fontSize="14px"
                    >
                      A message with a verification code has been sent to your
                      registered company phone number. Enter the code to review
                      your KYC and get registerd.
                    </Text>
                    <FormControl>
                      <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                        OTP
                      </FormLabel>
                      <Input
                        backgroundColor={"white"}
                        borderRadius="15px"
                        mb="24px"
                        fontSize="sm"
                        type="text"
                        size="lg"
                      />

                      <Box display={"flex"} flexDirection={"row"}>
                        <Button
                          mx={2}
                          onClick={() => setStep(step - 1)}
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
                          {t("Back")}
                        </Button>
                        <Button
                          mx={2}
                          onClick={() => setStep(step + 1)}
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
                          {t("Next")}
                        </Button>
                      </Box>
                    </FormControl>
                    <Text color={textColor} fontWeight="medium">
                      {t("Dont_Have_Account")}
                      <Link
                        color={titleColor}
                        as="span"
                        ms="5px"
                        fontWeight="bold"
                      >
                        {t("Sign_Up_Here")}
                      </Link>
                    </Text>
                  </>
                ) : (
                  <></>
                )}
              </Card>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default SignUp;
