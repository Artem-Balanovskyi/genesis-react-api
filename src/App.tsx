import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SingleCoursePage } from './pages/SingleCoursePage';
import { CoursesPage } from './pages/CoursesPage';
import { MainPage } from './pages/MainPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/courses" element={<CoursesPage />}></Route>
        <Route path="/courses/id" element={<SingleCoursePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
