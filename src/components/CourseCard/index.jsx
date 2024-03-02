import { COURSE_TYPE } from "@/constants/general";
import { PATHS } from "@/constants/path";
import { ROLES } from "@/constants/roles";
import { formatCurrency, formatDate } from "@/utils/format";
import { Link } from "react-router-dom";
import Button from "../Button";

const CourseCard = ({
  type = COURSE_TYPE.normal,
  image,
  name,
  title,
  slug,
  teams,
  startDate,
  tags,
  price,
}) => {
  const teacherInfo = teams?.find((team) => team.tags?.includes(ROLES.TEACHER));
  const detailPath = PATHS.COURSE.INDEX + `/${slug}`;
  if (type === COURSE_TYPE.coming) {
    return (
      <div className="coursecoming__item">
        <div className="coursecoming__item-img">
          <Link to={detailPath}>
            <img src={image || ""} alt={name || ""} />
          </Link>
        </div>
        <div className="coursecoming__item-content">
          <p className="category label">Front-end</p>
          <h2 className="title --t2">
            <Link to={detailPath}>{title || ""}</Link>
          </h2>
          {!!teacherInfo && (
            <div className="user">
              <div className="user__img">
                <img src={teacherInfo.image} alt={teacherInfo.name} />
              </div>
              <p className="user__name">{teacherInfo.name}</p>
            </div>
          )}
          <div className="info">
            <div className="labeltext">
              <span className="label --blue">Ngày khai giảng</span>
              <p className="title --t2">{formatDate(startDate)}</p>
            </div>
            <div className="labeltext">
              <span className="label --blue">Hình thức học</span>
              <p className="title --t2">{tags?.join(" | ")}</p>
            </div>
          </div>
          <div className="btnwrap">
            <Button link={PATHS.COURSE_ORDER}>Đăng ký học</Button>
            <Button link={detailPath} variant="border">
              Xem chi tiết
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="courses__list-item">
        <div className="img">
          <Link to={detailPath}>
            <img
              src={image || ""}
              alt={name || ""}
              className="course__thumbnail"
            />
            <span className="course__img-badge badge">{tags?.join(" | ")}</span>
          </Link>
        </div>
        <div className="content">
          <p className="label">Front-End</p>
          <h3 className="title --t3">
            <Link to={detailPath}>{name || ""}</Link>
          </h3>
          <div className="content__info">
            {!!teacherInfo && (
              <div className="user">
                <div className="user__img">
                  <img src={teacherInfo.image} alt={teacherInfo.name} />
                </div>
                <p className="user__name">{teacherInfo.name}</p>
              </div>
            )}
            <div className="price">
              <strong>{formatCurrency(price)}</strong>
            </div>
          </div>
          <div className="content__action">
            <Button link={PATHS.COURSE_ORDER}>Đăng ký ngay</Button>
            <Button link={detailPath} variant="default">
              <img src="/img/icon-paper.svg" alt="icon paper" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default CourseCard;
