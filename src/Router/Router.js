
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Inbox from "../views/Inbox";
import Starred from "../views/Starred";
import SendEmail from "../views/SendEmail";
import Drafts from "../views/Drafts";

function RouterClass() {
    return (
        <Routes>
            <Route path='/inbox' element={<Inbox />} />
            <Route path='/starred' element={<Starred />} />
            <Route path='/send_email' element={<SendEmail />} />
            <Route path='/drafts' element={<Drafts />} />
        </Routes>
    )
}

export default RouterClass;