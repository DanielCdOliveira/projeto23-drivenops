import { useEffect, useState } from "react";
import axios from "axios";

function List() {
  const [students, setStudents] = useState(null);
    
  useEffect(async () => {
    const API_URL = process.env.REACT_APP_BASE_URL;
    try {
      const response = await axios.get(`${API_URL}/students/`);
      const students = response.data;
      console.log(students);
      if(!students){
        alert("Putz! Não há estudantes cadastrados para o sorteio!");
      } else {
        setStudents(students);
      }
    } catch (error) {
      alert("Não foi possível realizar o sorteio!");
    }
  }, []);
  



  if(students !== null){
      return (
    students.map((student)=>{
      return <h1>{student.name}</h1>
    })
  )
  }else{
     return(
      <h1>Carregando...</h1>
     )
  }

}

export default List;