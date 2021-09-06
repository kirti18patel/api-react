import React, {useEffect} from 'react';
function Students() {
    const url = "https://api.hatchways.io/assessment/students";

    const fetchData = () => {
        return fetch(url)
              .then((response) => response.json())
              .then((data) => console.log(data));}

        const data =[fetchData()]
        console.log(data);
    return ( 
        <>
        {
            data.map((d, i) => {

                return<h1>{d[0].lastName}</h1>
            })
        }
        <h1>hii</h1>
        </>
    )
}

export default Students;


// return (
//     <section>
//         {/* {
//             students.map(student =>(
//                 <>
//                 <img src={student.pic}></img>
//                 <h1>{student.firstName} {student.lastName}</h1>
//                 <p>Email : {student.email}</p>
//                 <p>Company : {student.company}</p>
//                 <p>Skill : {student.skill}</p>
//                 <p>Average : {student.grades.average()}%</p>
//                 </>
//             ))
//         } */}
//                         {/* {
//                     students.map(student => (
//                         <h1 key={student.lastName}></h1>
//                     ))
//                 } */}
//     </section>