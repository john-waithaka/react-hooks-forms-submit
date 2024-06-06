//All the code below works, just know where to work with what


// // //note that for Element Types textarea, value and select we use "value"

// // import React, { useState } from "react";

// // function Form() {
// //   const [firstName, setFirstName] = useState("John");
// //   const [lastName, setLastName] = useState("Henry");


// //   function handleFirstNameChange(event) {
// //     setFirstName(event.target.value);
// //   }
  
// //   function handleLastNameChange(event) {
// //     setLastName(event.target.value);
// //   }



// //   return (
// //     <form>
// //       <input type="text" onChange={handleFirstNameChange} value={firstName} />
// //       <input type="text" onChange={handleLastNameChange} value={lastName} />
// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // }

// // export default Form;


// //This is an example of checkbox Form Element Type, we use "checked" as oppoesed to "value"
// // import React, { useState } from "react";

// // function Form() {
// //   const [newsletter, setNewsletter] = useState(false);

// //   function handleNewsletterChange(event) {
// //     // .checked, not .value!
// //     setNewsletter(event.target.checked);
// //   }

// //   return (
// //     <form>
// //       <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
// //       <input
// //         type="checkbox"
// //         id="newsletter"
// //         onChange={handleNewsletterChange}
// //         // {/* checked instead of value */}
// //         checked={newsletter}
// //       />
// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // }

// // export default Form;


// //Form handles all the JSX

// // src/components/Form
// import React from "react";

// function Form({
//   firstName,
//   lastName,
//   handleFirstNameChange,
//   handleLastNameChange,
// }) {

//    // Define the handleSubmit function
//    const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent the default form submission
//     console.log("First Name:", firstName);
//     console.log("Last Name:", lastName);
//   };


//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" onChange={handleFirstNameChange} value={firstName} />
//       <input type="text" onChange={handleLastNameChange} value={lastName} />
//       <button type="submit">Submit</button>

    
//     </form>
//   );
// }

// export default Form;



//Since we don't have a server to send our data to, we'll demonstrate submission by modifying 
//our Form component to access submitted values from state and list them in the DOM:
import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  //In our handleSubmit function, we can add some validation logic to check if the form inputs have the required data, and hold some error messages in state:
  const [errors, setErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    // first name is required
    if (firstName.length > 0) {
      const formData = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["First name is required!"]);
    }
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const formData = { firstName: firstName, lastName: lastName };
  //   const dataArray = [...submittedData, formData];
  //   setSubmittedData(dataArray);
  //   setFirstName("");//this deletes previous input
  //   setLastName("");
  // }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  //Then, we can display an error message to our user in the JSX:
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {/* conditionally render error messages */}
      {errors.length > 0
        ? errors.map((error, index) => (
            <p key={index} style={{ color: "red" }}>
              {error}
            </p>
          ))
        : null}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}


//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" onChange={handleFirstNameChange} value={firstName} />
//         <input type="text" onChange={handleLastNameChange} value={lastName} />
//         <button type="submit">Submit</button>
//       </form>
//       <h3>Submissions</h3>
//       {listOfSubmissions}
//     </div>
//   );
// }


export default Form;