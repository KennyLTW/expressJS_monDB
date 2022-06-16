import Button from '@mui/material/Button';
import React, { useState, useEffect } from "react";

function Inbox() {
/*
    useEffect(() => {
        fetch("/getInbox")
        .then((res) => res.json())
        .then((data) => console.log(data.message));
    })
*/
    const getInbox = async () => {
        //console.log('getInbox');
        try {
            const response = await fetch("/getInbox", { 
                method: "GET",
                headers: {
                    Accept: 'application/json',
                },
            });
            const result = await response.json();
            console.log('result is: ', JSON.stringify(result, null, 4));

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Button onClick={getInbox}>Get Inbox</Button>
    )
}

export default Inbox;