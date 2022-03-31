import React, {useState} from 'react';



export const CourseContext = React.createContext()


const ChoseCourse = () => {
  const [usersData, setUsersData]=useState({course:""})

  return <div>
    <CourseContext.Provider value={usersData.course}>

    <label for="Course">Course:</label>
    <select name="Course" id="Course-select" placeholder="Course" value={usersData.course} onChange={e=> setUsersData({course:e.target.value})} >
    <option>Frontend Development</option>
    <option value={usersData.course} onChange={e=> setUsersData({course:e.target.value})}>Backend Development</option>
    <option >Fullstack Developement</option>
    <option >UI/UX Course</option>
    <option >Android App Development(IOS and HIOS)</option>
    </select>
    </CourseContext.Provider>

  </div>;
};

export default ChoseCourse;
