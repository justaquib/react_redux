import React, { useEffect, useState } from 'react'

const users = [
	{
		username: "john",
		age: 15,
		hobbies: ["Football", "Cricket"],
	},
	{
		username: "jane",
		age: 23,
		hobbies: ["Reading", "Writing"],
	},
];
export default function SubdomainComp() {
    const [subdomain,setSubDomain]  =   useState(null)
    useEffect(() => {
		const host = window.location.host; // gets the full domain of the app

		const arr = host
			.split(".")
			.slice(0, host.includes("localhost") ? -1 : -2);
		if (arr.length > 0) setSubDomain(arr[0]);
	}, []);
    const requestedUser = users.find((user) => user.username === subdomain);
  return (
    <>
    <div className="flex flex-col w-screen justify-center items-center">
        {subdomain ? (
            requestedUser ? (
                <div className='flex flex-col justify-center items-center w-full'>
                    <div className='flex flex-row gap-4'>
                        <h1>Username</h1>
                        <h3 className='font-bold uppercase'>{requestedUser.username}</h3>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <h1>Age</h1>
                        <h3>{requestedUser.age}</h3>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <h1>Hobbies</h1>
                        <ul>
                            {requestedUser.hobbies.map((hobby) => (
                                <li key={hobby}>{hobby}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <h1>Not Found</h1>
            )
        ) : (
            <div>
                {users.map((user) => (
                    <div>
                        <a
                            key={user.username}
                            href={
                                global.window.location.protocol +
                                "//" +
                                user.username +
                                "." +
                                global.window.location.host +
                                '/subdomain'
                            }
                        >
                            {user.username}
                        </a>
                    </div>
                ))}
            </div>
        )}
    </div>
    </>
  )
}
