import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import CourseComingSection from "./CourseComingSection";
import CoursesSection from "./CoursesSection";
import TeacherSection from "./TeacherSection";
import FeaturedSection from "./FeaturedSection";
import TestimonialSection from "./TestimonialSection";
import FaqSection from "./FaqSection";
import GallerySection from "./GallerySection";
import CallRegisterSection from "./CallRegisterSection";
import useHomePage from "./useHomePage";

const HomePage = () => {
  const { courseComingProps, coursesProps, teacherProps, ratesProps } =
    useHomePage();
  return (
    <main className="mainwrapper">
      <HeroSection />
      <CourseComingSection {...courseComingProps} />
      <CoursesSection {...coursesProps} />
      <TeacherSection {...teacherProps} />
      <FeaturedSection />
      <TestimonialSection {...ratesProps} />
      <FaqSection />
      <GallerySection />
      <CallRegisterSection />
    </main>
  );
};

export default HomePage;
