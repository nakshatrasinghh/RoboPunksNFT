import React , {useState} from 'react'
import { ethers, BigNumber} from 'ethers';
import { Box, Button, Input, Flex, Text } from '@chakra-ui/react';
import RoboPunksNFT from '../RoboPunksNFT.json';

const roboPunkAddress = '0x8efF798105831AeeAd8dB02Eb24E174C7F92aEEC'

const MainMint = ({accounts, }) => {
    const [mintAmmount, setmintAmmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    const handleMint = () => {
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(roboPunkAddress, RoboPunksNFT.abi, signer);
            try {
            const response = contract.mint(BigNumber.from(mintAmmount), {
                value: ethers.utils.parseEther((0.02 * mintAmmount).toString())
            });
            console.log(response);
            } catch (error) {
            console.log(error);
            }
        }
    }

    const handledecrement = ()=>{
            if(mintAmmount <=1) return;
            setmintAmmount(mintAmmount-1);
    }

    const handledIncrement = ()=>{
            if(mintAmmount >=3) return;
            setmintAmmount(mintAmmount+1);
    }
    
    return (
        <Flex justify="center" align="center" height="100vh" paddingBottom="150px"> 
            <Box width="520px">
                <div>
                    <Text fontSize="48px" textShadow="0 5px #000000">Robopunks</Text>
                    <Text 
                        fontSize="30px" 
                        letterSpacing="-5.5%" 
                        fontFamily="VT323" 
                        textShadow="0px 2px 2px #000000"
                    >
                        It's 2078. Can the RoboPunks NFt save humans from destructive 
                        rampant NFT speculation? Mint robopunks to find out.
                    </Text>
                </div>
                {isConnected ? (
                    <div>
                        <Flex align="center" justify="center">
                            <Button 
                                backgroundColor="#D6517D"
                                borderRadius="5px" 
                                boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                fontSize="28px"
                                padding="15px"
                                margin="10px"
                                onClick={handledecrement}
                            >
                                -
                            </Button>
                            <Input 
                                readOnly
                                fontFamily="inherit"
                                fontSize="26px"
                                width="100px"
                                height="40px"
                                textAlign="center"
                                paddingLeft="19px"
                                marginTop="10px"
                                type="number"
                                value={mintAmmount}
                            />
                            <Button 
                                backgroundColor="#D6517D"
                                borderRadius="5px" 
                                boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                fontSize="28px"
                                padding="15px"
                                margin="10px"
                                onClick={handledIncrement}
                            >
                                +
                            </Button>
                        </Flex>
                        <Button 
                                backgroundColor="#D6517D"
                                borderRadius="5px" 
                                boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                fontSize="26px"
                                padding="15px"
                                margin="10px"
                                onClick={handleMint}
                            >
                                MINT NOW
                            </Button>
                    </div>
                ): (
                    <Text 
                        marginTop="70px"
                        fontSize="30px" 
                        letterSpacing="-5.5%" 
                        fontFamily="VT323" 
                        textShadow="0px 3px #000000"
                    >You must connect to Mint.</Text>
                )}
            </Box>
        </Flex>
    )
}

export default MainMint

