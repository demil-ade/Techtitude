import React from "react";
import HomePage from "../HomePage";
import RegistrationPage from "../RegistrationPage";
import NoPage from "../NoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path ="/" element ={<HomePage/>}/>
                <Route path ="Registration-page" element={<RegistrationPage/>}/>
                <Route path ="*" element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;