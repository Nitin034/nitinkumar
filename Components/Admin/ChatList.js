import React from "react";

const ChatList = [
  {
    id: 0,
    img: '/Images/IMG_8246.JPG',
    name: "Nitin yadav",
    msg: "This is the my first chat app",
    time: "5:46",
    unread: 3,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: '/Images/IMG_8246.JPG',
    name: "Nitin yadav",
    msg: "This is the my first chat app",
    time: "5:46",
    unread: 1,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: '/Images/Image.jpg',
    name: "Nitin yadav",
    msg: "This is the my first chat app",
    time: "5:46",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 3,
    img: '/Images/IMG_8246.JPG',
    name: "Nitin yadav",
    msg: "This is the my first chat app",
    time: "5:46",
    unread: 3,
    pinned: true,
    online: false,
  }
];

const Chat_History = [
  {
    type: "msg",
    message: "Hi 👋🏻Nitin! How are you ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋Sir, not bad, you ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you send me an abstract image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you an abstract image",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: '/Images/IMG_8246.JPG',
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you Send me Your resume?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: '/Images/Me.png',
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
  {
    type: "divider",
    text: "Now",
  },
  {
    type: "msg",
    message: "Hye User, We are sorry for your inconvenience. You cannot send live messages here right now. We are still working on the backend of this. We hope that we do not give you any chance to complain again.",
    incoming: true,
    outgoing: false,
  },
];

// Assign the object to a variable and then export it
const chatData = { ChatList, Chat_History };

export default chatData;
