export interface StudentInterface {
  first: string;
  last: string;
  enroll: (courseName: string) => void;
  listCourses: () => string[];
}