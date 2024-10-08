import React, { useState } from "react";
import { deleteAccount } from "../../hooks/api";
import { Box, Button, Input, useToast, Heading } from "@chakra-ui/react";
import BeigeBox from "../BeigeBox";

const DeleteUser: React.FC = () => {
  const [accountId, setAccountId] = useState<string>("");
  const toast = useToast();

  const handleDelete = async () => {
    try {
      await deleteAccount(accountId);
      toast({
        title: `User with ID ${accountId} has been deleted`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setAccountId("");
    } catch (error) {
      toast({
        title: "Error deleting account",
        description: `Unable to delete user with ID ${accountId}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4} display="flex" flexDirection="column" alignItems="center">
      <Heading textAlign="center" as="h1" fontSize="35px" mb={4}>
        Delete a user
      </Heading>
      <BeigeBox
        width="300px"
        padding="6"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        mt={8}

      >
        <Input
          placeholder="Enter Account ID"
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
          marginBottom="4"
        />
        <Button width="100%" colorScheme="red" onClick={handleDelete}>
          Delete Account
        </Button>
      </BeigeBox>
    </Box>
  );
};

export default DeleteUser;
