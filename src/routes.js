/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { WorkBench } from './Pages/Workbench'
import { MainPage } from './Pages/MainPage'
import { BuildingPage } from './Pages/BuildingPage'
import { ClassroomPage } from './Pages/ClassroomPage'
import { LoginPage } from './Pages/LoginPage'
import { SettingsPage } from './Pages/SettingsPage'



export const PageRoutes = () => 
    <Router>
        <Routes>
            <Route exact={true} path="/" element={<MainPage/>} />
            <Route exact={true} path="/login" element={<LoginPage/>} />
            <Route exact={true} path="/building/:id" element={<BuildingPage/>} />
            <Route exact={true} path="/classroom/:id" element={<ClassroomPage/>} />
            <Route exact={true} path="/settings" element={<SettingsPage/>} />
        </Routes>
    </Router>