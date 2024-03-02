import CourseCard from "@/components/CourseCard";
import { COURSE_TYPE } from "@/constants/general";
import { Empty } from "antd";
import React, { useEffect } from "react";

const CourseComingSection = ({ courseComing, loading }) => {
  useEffect(() => {
    function courseComingList() {
      let courseComingSlider = $("#coursecoming__slider");
      courseComingSlider.flickity({
        cellAlign: "left",
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        dragThreshold: 0,
        wrapAround: true,
      });

      $(".coursecoming .control .control__next").on("click", function (e) {
        e.preventDefault();
        courseComingSlider.flickity("next");
      });
      $(".coursecoming .control .control__prev").on("click", function (e) {
        e.preventDefault();
        courseComingSlider.flickity("previous");
      });
    }

    const timeoutId = setTimeout(() => {
      if (courseComing?.length > 0) {
        courseComingList();
      }
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [courseComing]);
  return (
    <section className="coursecoming --scpadding">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title title --t2">
            Khoá học <span className="color--primary">sắp khai giảng</span>
          </h2>
          <div className="control">
            <div className="control__prev">
              <img src="/img/icon-btn-control.svg" alt="icon prev" />
            </div>
            <div className="control__next">
              <img src="/img/icon-btn-control.svg" alt="icon next" />
            </div>
          </div>
        </div>
      </div>
      {!loading && courseComing?.length === 0 ? (
        <Empty description="There are no courses" />
      ) : (
        <div className="coursecoming__list" id="coursecoming__slider">
          {courseComing?.length > 0 &&
            courseComing.map((course, index) => (
              <CourseCard
                key={course?.id || index}
                {...course}
                type={COURSE_TYPE.coming}
              />
            ))}
        </div>
      )}
    </section>
  );
};

export default CourseComingSection;
