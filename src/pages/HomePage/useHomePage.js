import { ROLES } from "@/constants/roles";
import useQuery from "@/hooks/useQuery";
import courseService from "@/services/courseService";
import rateService from "@/services/rateService";
import teamService from "@/services/teamService";

const useHomePage = () => {
  /* -------------------------------- API Handling --------------------------------------- */
  const { data: coursesData, loading: coursesLoading } = useQuery(
    courseService.getCourses
  );

  const { data: teamsData, loading: teamsLoading } = useQuery(
    teamService.getTeams
  );
  const teams = teamsData?.teams || [];

  const { data: ratesData, loading: ratesLoading } = useQuery(
    rateService.getRates
  );

  // Modify data
  const courseComing = coursesData?.courses?.filter((course) => {
    return course.startDate && new Date(course.startDate) > new Date();
  });

  // Courses Coming Props
  const courseComingProps = {
    courseComing,
    loading: coursesLoading,
  };

  // Courses Props
  const coursesProps = {
    courses: coursesData?.courses,
  };

  // Teams Props
  const teacherProps = {
    teams,
  };

  // Rates Props
  const rates = ratesData?.rates || [];
  const ratesProps = {
    rates,
    loading: ratesLoading,
  };

  return {
    courseComingProps,
    coursesProps,
    teacherProps,
    ratesProps,
  };
};

export default useHomePage;
