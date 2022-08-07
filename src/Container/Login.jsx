import { Button, Flex, HStack, Image , Input } from "@chakra-ui/react";
import React from "react";

import { FcGoogle } from "react-icons/fc";

import { getAuth, signInWithPopup, GoogleAuthProvider,  } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { firebaseApp } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Login = () => {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const firebaseDb = getFirestore(firebaseApp);
  const emailRef = useRef()
  const passwordRef = useRef()


  const navigate = useNavigate();

  const login = async () => {
    const { user } = await signInWithPopup(firebaseAuth, provider);
    const { refreshToken, providerData } = user;
    

    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));

    await setDoc(
      doc(firebaseDb, "users", providerData[0].uid),
      providerData[0],
      emailRef.current.value,
      passwordRef.current.value
    );
    
    

    navigate("/", { replace: true });
  }
  


  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      position={"relative"}
    >
      <Image
        src="https://images.hdqwalls.com/download/red-mountain-range-highlands-8k-9n-7680x4320.jpg"
        objectFit="cover"
        width={"full"}
        height={"full"}
      />
      <Flex
        position={"absolute"}
        height={"100vh"}
        top={0}
        left={0}
        justifyContent="center"
        alignItems={"center"}
        display={"inline-block"}
        width={"100vw"}
        marginLeft={"45%"}
        marginTop={"20%"}
        color={"white"}
      >
        <HStack>
          <Input
            width={"13%"}
            type={"text"}
            ref={emailRef}
            placeholder="Email"
          ></Input>
        </HStack>
        <HStack>
          <Input
            width={"13%"}
            type={"password"}
            color={"white"}
            placeholder="Password"
            ref={passwordRef}
          ></Input>
        </HStack>
        <HStack>
          <Button
            colorScheme="red"
            shadow={"lg"}
            color="white"
            marginTop={"20px"}
            width={"200px"}
            onClick={login()}
          >
            Sign in
          </Button>
        </HStack>
        <HStack>
          <Button
            leftIcon={<FcGoogle fontSize={25} />}
            colorScheme="whiteAlpha"
            shadow={"lg"}
            onClick={() => login()}
            color="#f1f1f1"
            marginTop={"20px"}
          >
            Signin with Google
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Login;
