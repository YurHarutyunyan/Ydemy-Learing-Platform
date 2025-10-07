import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './createAppContext';
import { dummyCourses } from '../assets/assets';

export const AppContextProvider = props => {
  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);

  //Fetch all courses
  const fetchAllCourses = useCallback(() => {
    setAllCourses(dummyCourses);
  }, []);

  //function to calculate average rating of course
  const calculateRating = course => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach(rating => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };
  const calculateChapterTime = chapter => {
    let time = 0;
    chapter.content.map(lecture => (time += lecture.duration));
  };
  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
  };
  useEffect(() => {
    fetchAllCourses();
  }, [fetchAllCourses]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
