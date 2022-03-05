import { Box } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
    const fetchChat=()=>{
      const data =await axios.get("api/chat")
    } 
    useEffect(()=>{
      fetchChat();
    })

  return (
    <div style={{ width: "100%" }}>
    
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
         <Typography>Chat</Typography>
      </Box>
    </div>
  );
};

export default Chatpage;
