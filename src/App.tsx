import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SingleCoursePage } from './pages/SingleCoursePage';
import { CoursesList } from './pages/CoursesList';
import { MainPage } from './pages/MainPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/courses" element={<CoursesList />}>
          <Route path=":courseId" element={<SingleCoursePage />} />
        </Route>
        <Route path="*" element={<h2>Page is not found</h2>} />
      </Routes>
    </>
  );
}

export default App;
