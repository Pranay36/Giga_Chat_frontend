import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import Header from "../customHeader/index";
import StandardMessageForm from "../customMessageForms/StandardMessageForm";
import Ai from "../customMessageForms/Ai";
// import AiCode from "@/components/customMessageForms/AiCode";


const Chat = ({ user, secret }) => {
  const chatProps = useMultiChatLogic(
    process.env.REACT_APP_PROJECT_ID,
    user,
    secret
  );

  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          if (chatProps.chat?.title.startsWith("bot")) {
            return <Ai props={props} activeChat={chatProps.chat} />;
          }
          // if (chatProps.chat?.title.startsWith("AiCode_")) {
          //   return <AiCode props={props} activeChat={chatProps.chat} />;
          // }
          

          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          );
        }} 
       />
      
    </div>
  );
};

export default Chat;
