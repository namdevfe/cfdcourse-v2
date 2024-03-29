const COURSE_PATH = "/course";
const PROFILE_PATH = "/profile";
const BLOG_PATH = "/blog";

export const PATHS = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  PAYMENT_METHOD: "/payment-method",
  PRIVACY: "/privacy",
  COURSE: {
    INDEX: COURSE_PATH,
    DETAIL: COURSE_PATH + "/:courseSlug",
  },
  COURSE_ORDER: "/course-order",
  PROFILE: {
    MY_INFO: PROFILE_PATH,
    MY_COURSE: PROFILE_PATH + "/my-course",
    MY_PAYMENT: PROFILE_PATH + "/my-payment",
  },
  BLOG: {
    INDEX: BLOG_PATH,
    DETAIL: BLOG_PATH + "/:blogSlug",
  },
  NOT_FOUND: "*",
};
