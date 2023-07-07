import { useEffect, useState, Fragment } from 'react'
import {BsChatSquareDotsFill} from '@react-icons/all-files/bs/BsChatSquareDotsFill';
import {BiUser} from '@react-icons/all-files/bi/BiUser';
import {IoMdSettings} from '@react-icons/all-files/io/IoMdSettings'

export default function ChatRoom({ socket, userName, roomId, userId }) {

    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: roomId,
                author: userName,
                userId: userId,
                message: currentMessage,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
            // console.log(document.getElementById('chatBody').scrollHeight)
            setTimeout(() => {
                document.getElementById('chatBody').scrollTop = document.getElementById('chatBody').scrollHeight
            }, 100)

        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
            setTimeout(() => {
                document.getElementById('chatBody').scrollTop = document.getElementById('chatBody').scrollHeight
            }, 100)
        });
    }, [socket]);

    return (
        <>
            <div className='flex flex-row h-[680px] w-full max-w-7xl shadow rounded-xl bg-white'>
                <div className='h-full w-96 rounded-s-lg border-r'>
                    <div className='w-full p-5 border-b h-[10%]'>
                        <h1 className='text-lg font-bold flex flex-row justify-start items-center'>
                            <BsChatSquareDotsFill className='mr-2' />
                            Chats
                        </h1>
                    </div>
                    <div className='w-full max-h-full h-[90%]'>
                        <div className='w-full flex flex-row gap-2 px-5 py-4 justify-start items-start hover:bg-slate-100'>
                            <div className='flex flex-col justify-center items-center bg-slate-200 rounded-full p-2 relative'>
                                <h1 className='text-xl font-bold justify-center items-center'>
                                    <BiUser className='' />
                                </h1>
                                <div id="onlineUser" className='rounded-full bg-emerald-600 h-3 w-3 absolute -top-0    -left-1'></div>
                            </div>
                            <div className='w-full'>
                                <div className='flex flex-col justify-start items-start w-full'>
                                    <h1 className='text-sm font-normal flex flex-row justify-start items-center'>
                                        Aquib Ibn Shahbaz
                                    </h1>
                                    <h1 className='text-xs font-normal flex flex-row justify-start items-center text-slate-400'>
                                        When are we going to meet for
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-row gap-2 px-5 py-4 justify-start items-start hover:bg-slate-100'>
                            <div className='flex flex-col justify-center items-center bg-slate-200 rounded-full p-2 relative'>
                                <h1 className='text-xl font-bold justify-center items-center'>
                                    <BiUser className='' />
                                </h1>
                                <div id="onlineUser" className='rounded-full bg-emerald-600 h-3 w-3 absolute -top-0    -left-1'></div>
                            </div>
                            <div className='w-full'>
                                <div className='flex flex-col justify-start items-start w-full'>
                                    <h1 className='text-sm font-normal flex flex-row justify-start items-center'>
                                        Rahul Jha
                                    </h1>
                                    <h1 className='text-xs font-normal flex flex-row justify-start items-center text-slate-400'>
                                        When are we going to meet for
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-full w-full rounded-e-lg'>
                    <div className='w-full px-5 py-4 border-b h-[10%]'>
                        <div className='flex flex-row justify-between items-center'>
                            <div className=''>
                                <p className='text-sm'>Room: <span className='font-bold'>{roomId}</span></p>
                            </div>
                            <div className='flex flex-row gap-2 justify-center items-center'>
                                <BiUser className='text-lg' />
                                <h1 className='text-lg font-normal'>
                                    {userName}
                                </h1>
                                <p className='text-xs mt-1'>Online</p>
                            </div>
                            <div className='p-2 rounded-xl bg-slate-200 cursor-pointer'>
                                <IoMdSettings className='text-xl text-slate-600' />
                            </div>
                        </div>
                    </div>
                    <div id="chatBox" className='flex flex-col h-[90%] relative w-full'>
                        <div className='w-full h-[90%] overflow-hidden'>
                            <div className="flex flex-col px-4 h-full overflow-y-auto" id="chatBody">
                                {messageList.map((messageContent, key) => {
                                    return (
                                        <Fragment key={key}>
                                            {
                                                messageContent.author === userName && messageContent.userId === userId ?
                                                    <div className="flex w-full mt-2 space-x-3 max-w-xs">
                                                        <div className="flex items-center justify-center font-bold h-10 w-10 rounded-full bg-gray-300">
                                                            <span>{(messageContent.author.split('')[0]).toUpperCase()}</span>
                                                        </div>
                                                        <div>
                                                            <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                                                <p className="text-sm">{messageContent.message}</p>
                                                            </div>
                                                            {/* <span className="text-xs text-gray-500 leading-none">{new Date(messageContent.time).getHours()}:{new Date(messageContent.time).getMinutes()}</span> */}
                                                            <span className="text-xs text-gray-500 leading-none">{messageContent.time}</span>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                                                        <div>
                                                            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                                                <p className="text-sm">{messageContent.message}</p>
                                                            </div>
                                                            {/* <span className="text-xs text-gray-500 leading-none">{new Date(messageContent.time).getHours()}:{new Date(messageContent.time).getMinutes()}</span> */}
                                                            <span className="text-xs text-gray-500 leading-none">{messageContent.time}-{messageContent.author}</span>
                                                        </div>
                                                        <div className="flex items-center justify-center font-bold h-10 w-10 rounded-full bg-gray-300">
                                                            <span>{(messageContent.author.split('')[0]).toUpperCase()}</span>
                                                        </div>
                                                    </div>
                                            }
                                        </Fragment>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='border-t h-[10%] w-full left-0 p-4 flex items-center justify-center'>
                            <input className="h-full min-h-full rounded w-full px-4 text-sm focus:border-0" type="text" placeholder="Type your message…"
                                value={currentMessage}
                                onChange={(event) => {
                                    setCurrentMessage(event.target.value);
                                }}
                                onKeyPress={(event) => {
                                    event.key === "Enter" && sendMessage();
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}