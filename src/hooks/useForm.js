// import { useState } from "react";

// // "Можно лучше от ревью"
// export function useForm(inputValues = {}) {
//   const [values, setValues] = useState(inputValues);

//   const handleChange = (event) => {
//     const { value, name } = event.target;
//     setValues({ ...values, [name]: value });
//   };
//   return { values, handleChange, setValues };
// }