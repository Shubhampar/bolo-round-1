import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import Categorize from "./Categories/Categorize";
import Comprehension from "./Categories/Comprehension";
import Cloze from "./Categories/Cloze";

function QuestionCard({ data, ind, question, setQuestions }) {
  function handleDelete() {
    if(question.length===1){return}
    setQuestions((prev) => prev.filter((el, I) => I !== ind));
  }

  function handleTypeChange(type) {
    let newdata = [...question];
    if (type === "Categorize") {
      newdata[ind] = {
        type: "Categorize",
        question: "",
        image: "",
        categories: [""],
        items: [{ value: "", belong: "" }],
      };
    } else if (type === "Cloze") {
      newdata[ind] = { type: "Cloze",image:"", question: "", option: [] };
    } else {
      newdata[ind] = {
        type: "Comprehension",
        passage: "",
        questions: [{ question: "",image:"",option:["",""],answer:""}],
      };
    }
    setQuestions(newdata);
  }

  return (
//     <div className="questionCard relative border-2 border-gray-300 border-l-8 border-l-blue-500 p-[20px] my-5 rounded-lg bg-white shadow-md">
//   <div className="flex items-center justify-between mb-4">
//     <select
//       id="category"
//       className="bg-blue-200 rounded-md py-1 px-3 font-semibold"
//       onChange={(e) => handleTypeChange(e.target.value)}
//     >
//       <option
//         className="bg-white"
//         selected={data.type === "Categorize" ? true : false}
//         value="Categorize"
//       >
//         Categorize
//       </option>
//       <option
//         className="bg-white"
//         selected={data.type === "Cloze" ? true : false}
//         value="Cloze"
//       >
//         Cloze
//       </option>
//       <option
//         className="bg-white"
//         selected={data.type === "Comprehension" ? true : false}
//         value="Comprehension"
//       >
//         Comprehension
//       </option>
//     </select>

//     <button
//       onClick={handleDelete}
//       className="py-3 px-4 ml-4 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//     >
//       <MdDeleteOutline size={"25px"} />
//     </button>
//   </div>

//   {/* rendering question components as per its type */}
//   {data.type === 'Categorize' ? (
//     <Categorize data={data} ind={ind} question={question} setQuestions={setQuestions} />
//   ) : data.type === 'Comprehension' ? (
//     <Comprehension data={data} ind={ind} question={question} setQuestions={setQuestions} />
//   ) : data.type === 'Cloze' ? (
//     <Cloze data={data} ind={ind} question={question} setQuestions={setQuestions} />
//   ) : null}
// </div>

<div className="questionCard relative border-2 border-gray-300 border-l-8 border-l-blue-500 p-6 my-5 rounded-lg bg-white shadow-md">
  <div className="flex items-center justify-between mb-4">
    <select
      id="category"
      className="bg-blue-200 rounded-md py-2 px-4 font-semibold"
      onChange={(e) => handleTypeChange(e.target.value)}
    >
      <option value="Categorize" selected={data.type === "Categorize"} className="bg-white">
        Categorize
      </option>
      <option value="Cloze" selected={data.type === "Cloze"} className="bg-white">
        Cloze
      </option>
      <option value="Comprehension" selected={data.type === "Comprehension"} className="bg-white">
        Comprehension
      </option>
    </select>

    <button
      onClick={handleDelete}
      className="py-3 px-4 ml-4 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      <MdDeleteOutline size={"25px"} />
    </button>
  </div>

  {/* Rendering question components as per its type */}
  {data.type === 'Categorize' && <Categorize data={data} ind={ind} question={question} setQuestions={setQuestions} />}
  {data.type === 'Comprehension' && <Comprehension data={data} ind={ind} question={question} setQuestions={setQuestions} />}
  {data.type === 'Cloze' && <Cloze data={data} ind={ind} question={question} setQuestions={setQuestions} />}
</div>

  );
}

export default QuestionCard;