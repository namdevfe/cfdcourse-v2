import Button from "@/components/Button";
import CourseCard from "@/components/CourseCard";
import { PATHS } from "@/constants/path";
import React from "react";

const CoursesSection = ({ courses }) => {
  return (
    <section className="courses">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title title --t2">
            Tất cả <span className="color--primary">khóa học</span>
          </h2>
        </div>
        <div className="courses__list">
          {courses?.map((course, index) => {
            return <CourseCard key={course.id || index} {...course} />;
          })}
        </div>
        <div className="courses__btnall">
          <Button
            link={PATHS.COURSE.INDEX}
            variant="grey"
            className="course__btn "
          >
            Tất cả khoá học
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
