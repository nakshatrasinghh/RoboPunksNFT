import React from 'react'
import { Box, Button, Image, Flex, Spacer, Link } from '@chakra-ui/react';
import Facebook from "../assets/social-media-icons/facebook_32x32.png";
import Twitter from "../assets/social-media-icons/twitter_32x32.png";
import Email from "../assets/social-media-icons/email_32x32.png";
// destructing props/arguments
const NavBar = ({accounts, setAccounts}) => {
    // const {accounts, setAccounts} = props; // pass prop in as argument
    const isConnected = Boolean(accounts[0]);

    // const connectAccount = async () => {
    //     if(window.ethereum) {
    //         const accounts = await window.ethereum.request({
    //                 method: 'eth_requestAccounts',
    //             }
    //         );
    //         setAccounts(accounts);
    //     }
    // }

    async function connectAccount () {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                }
            );
            setAccounts(accounts);
        }
    }

    return (
        <Flex justify="space-between" align="center" padding="30px">
            <Flex justify="space-around" width="40%" padding="0 75px">
                <Link href=''>
                    <Image src={Facebook} boxSize="42" margin="0 15px"/>
                </Link>
                <Link href=''>
                    <Image src={Twitter} boxSize="42" margin="0 15px"/>
                </Link>
                <Link href=''>
                    <Image src={Email} boxSize="42" margin="0 15px"/>
                </Link>
            </Flex>

            <Flex justify="space-around" align="center" width="40%" padding="30px">
                <Box margin="0 15px">About</Box>
                <Spacer/>
                <Box margin="0 15px">Mint</Box>
                <Spacer/>
                <Box margin="0 15px">Team</Box>
                <Spacer/>
                {isConnected ? (<Box margin="0 15px">Connected</Box>) : (
                <Button 
                    backgroundColor="#D6517D"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color="white"
                    cursor="pointer"
                    fontFamily="inherit"
                    fontSize="18px"
                    padding="15px"
                    margin="0px 15px"
                    onClick={connectAccount}>Connect
                </Button>
                )}
            </Flex>
        </Flex>

    );
};

export default NavBar;