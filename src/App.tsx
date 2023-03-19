import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SingleCoursePage } from './pages/SingleCoursePage';
import { CoursesList } from './pages/CoursesList';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<CoursesList />}></Route>
        <Route path="/:courseId" element={<SingleCoursePage />} />
        <Route path="*" element={<h2>Page is not found</h2>} />
      </Routes>
    </>
  );
}

export default App;
