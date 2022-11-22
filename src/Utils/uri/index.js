const api = "http://apps.wmsu.edu.ph:3001";
const sampleadd = "ThisisASampleString";
export const saveEnlistment = () => {
  return `${api}/aris/student/enlistment/${sampleadd}`;
};

export const getStudentEnlistHistory = (id) => {
  return `${api}/aris/student/enlistment/` + id + `/history`;
};
