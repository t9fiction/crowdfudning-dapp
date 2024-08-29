import React from 'react'
import { ConnectButton } from "thirdweb/react";
import { client } from "../app/client";

const Navbar = () => {
    return (
        <div className='w-full h-20 flex flex-row py-4 justify-between mx-auto items-center'>
            <div>logo</div>
            <div>Main Menu</div>
            <div>


                <ConnectButton
                    client={client}
                    appMetadata={{
                        name: "Example App",
                        url: "https://example.com",
                    }}
                />

            </div>
        </div>
    )
}

export default Navbar
