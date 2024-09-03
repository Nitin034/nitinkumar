import React, { useState } from "react";
import { Fragment } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import { Chat_History } from "./Admin/ChatList";
import {
  Timeline,
  TextMsg,
  MediaMsg,
  ReplyMsg,
  LinkMsg,
  DocMsg,
} from "./Admin/MsgTypes";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Image from "next/image";
import Link from "next/link";

const ChatInput = () => {
  const [openPicker, setOpenPicker] = useState(false);
  return (
    <div className="flex">
      <a className="flex items-center h-10 w-full rounded  text-sm bg-light/70">
        <button className="flex items-center mx-2 justify-center text-dark hover:text-primaryback">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            ></path>
          </svg>
        </button>
        <input
          className="h-10 w-full  px-3"
          type="text"
          placeholder="Type your message…"
        />

        <Menu as="div" className="relative inline-block ">
          <div>
            <Menu.Button
              onClick={() => setOpenPicker((prev) => !prev)}
              className="flex items-center h-10 w-full rounded  text-sm bg-light/70  "
            >
              {!openPicker ? (
                <BsEmojiSmile
                  className="hover:text-primaryback text-dark mx-2  text-2xl"
                  aria-hidden="true"
                />
              ) : (
                <BsEmojiSmile
                  className="hover:text-primaryback text-dark mx-2  text-2xl"
                  aria-hidden="true"
                />
              )}
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="right-1 bottom-12 absolute xl:right-32 xl:w-32">
              <Picker data={data} onEmojiSelect={console.log} />
            </Menu.Items>
          </Transition>
        </Menu>

        {/* <BsEmojiSmile className='hover:text-primaryback text-dark mx-2  text-2xl' /> */}
      </a>

      <button className="flex items-center justify-center bg-dark hover:bg-primaryback rounded-xl text-light px-4 py-1 mx-2 flex-shrink-0">
        <span className="xs:hidden">Send</span>
        <span className="ml-2">
          <svg
            className="w-4 h-4 transform rotate-45 -mt-px"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

const TextMe = () => {
  return (
    <div>
      <div className=" ">
        <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
          <div className="flex items-center justify-between w-full lg:w-full lg:flex-col">
            <div className="w-1/2 lg:w-full lg:flex lg:items-center lg:justify-center">
              <div className="w-3/4 md:mx-0 mx-10 -mt-28 lg:mx-2 xl:mt-5 border rounded-xl bg-light shadow-lg dark:shadow-light shadow-dark dark:bg-dark dark:text-light bg-blend-saturation md:w-full ">
                <div className="bg-primary/40 py-2 rounded-xl ">
                  <div className="flex justify-between">
                    <div className="flex  justify-start items-center  gap-x-1.5 rounded-md dark:text-light px-5 py-2 text-sm font-semibold text-dark">
                      <Image
                        className="rounded-full w-10"
                        src="/Images/IMG_8246.JPG"
                        width={100}
                        height={100}
                        alt="login img"
                      />
                      <div className=" text-dark py-3 rounded-r-lg rounded-bl-lg ">
                        <Link
                          href="/"
                          className="text-base  dark:text-light text-dark"
                        >
                          Nitin yadav
                        </Link>
                      </div>
                      {/* <p className="text-xs   text-dark/60 dark:text-light/60 ">2 min ago</p> */}
                    </div>
                    <div className=" flex  justify-end items-center  gap-x-1.5 rounded-md dark:text-light px-5 py-2 text-sm font-semibold text-dark">
                      <div className=" text-dark py-3 rounded-r-lg rounded-bl-lg ">
                        <Link
                          href="/EditProfile"
                          className="text-base dark:text-light text-dark"
                        >
                          You
                        </Link>
                      </div>
                      <Image
                        className="rounded-full w-10"
                        src="/Images/images.jpg"
                        width={100}
                        height={100}
                        alt="login img"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-3/2 h-[35rem] text-primary p-5">
                  <div className="flex flex-col flex-grow w-full max-w-xl dark:bg-dark bg-light shadow-xl rounded-lg overflow-hidden">
                    <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
                      <div className="flex w-full mt-2 space-x-3 max-w-xs">
                        <div>
                          {Chat_History.map((el) => {
                            switch (el.type) {
                              case "divider":
                                return <Timeline el={el} />;

                              case "msg":
                                switch (el.subtype) {
                                  case "img":
                                    return <MediaMsg el={el} />;
                                  case "doc":
                                    return <DocMsg el={el} />;
                                  case "link":
                                    return <LinkMsg el={el} />;
                                  case "reply":
                                    return <ReplyMsg el={el} />;

                                  default:
                                    return <TextMsg el={el} />;
                                }

                                break;
                              default:
                                return <></>;
                            }
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="dark:bg-light/50  bg-dark/40 p-4">
                      <ChatInput />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="images lg:hidden md:hidden sm:hidden w-1/2 h-[80%] absolute bottom-0 right-[100px]">
              <Image
                src="/Images/shape2.png"
                alt="Nsw"
                className="shape "
                priority="true"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                width={800}
                height={800}
              />
              <Image
                src="/Images/Me2.png"
                alt="Nsw"
                className="girl"
                priority="true"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                width={600}
                height={600}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TextMe;
