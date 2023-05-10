// js/components/MainPage.jsx
import {useEffect, useState} from "react";

export default function MainPage() {
	const [records, setRecords] = useState([]);
	const [genreFilter, setGenreFilter] = useState(null);

	useEffect(() => {
		try {
		  fetch("/api/records", {
			method: "GET",
		  })
			.then((response) => response.json())
			.then((json) => setRecords(json.data));
		} catch (e) {
		  console.log(e);
		}
	  }, []);
	
	  const deleteRecord = async (e) => {
		e.preventDefault();
	  
		console.log(e.target.id);
		const id = e.target.id;
	  
		if (window.confirm("Are you sure you want to delete this record?")) {
		  try {
			fetch(`/api/records?id=${id}`, {
			  method: "DELETE",
			})
			  .then((response) => response.json())
			  .then((json) => {
				setRecords(records.filter((record) => record._id !== id));
			  });
		  } catch (e) {
			console.log(e);
		  }
		}
	  };
	  
	
	  const filterRecords = (genre) => {
		setGenreFilter(genre);
	  };
	
	  const filteredRecords = genreFilter
		? records.filter((record) => record.genre === genreFilter)
		: records;
	
	  console.log(filteredRecords);


	return (
		<section className={"bg-white"} style={{backgroundImage: "url('https://images.pexels.com/photos/2743488/pexels-photo-2743488.jpeg?auto=compress&cs=tinysrgb&w=1600)"}}>
			<div className={"container px-6 py-10 mx-auto"}>
				<h1 className={"w-[500px] mx-auto text-center text-6xl font-bold text-blue-600"}>Welcome to our library!</h1>
				<br></br><br></br>
				<p className={"w-[1000px] mx-auto text-center mb-2 text-2xl font-bold text-red-400"}>Feel free to explore our books and to add new ones</p><br></br>
				<center><a href="http://localhost:3000/insert" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Insert new book</a>
				<a href="http://localhost:3000/chat" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Talk to ChatBot</a></center><br></br>

				<div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
					<button type="button" onClick={() => filterRecords(null)} class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            			All Genres
          			</button>
          			<button type="button" onClick={() => filterRecords("Signal Processing")} class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            			Signal Processing
          			</button>
					  <button type="button" onClick={() => filterRecords("Data Science")} class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
					  	Data Science
          			</button>
					  <button type="button" onClick={() => filterRecords("Mathematics")} class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
					  	Mathematics
          			</button>
					  <button type="button" onClick={() => filterRecords("Economics")} class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
					 	 Economics
          			</button>
					  <button type="button" onClick={() => filterRecords("History")} class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
					  	History
          			</button>
					  <button type="button" onClick={() => filterRecords("Science")} class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            			Science
          			</button>
					  <button type="button" onClick={() => filterRecords("Psychology")} class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
					  	Psychology
          			</button>
					  <button type="button" onClick={() => filterRecords("Fiction")} class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            			Fiction
          			</button>
					  <button type="button" onClick={() => filterRecords("Computer Science")} class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            			Computer Science
          			</button>
					  <button type="button" onClick={() => filterRecords("Nonfiction")} class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            			Nonfiction
          			</button>
					  <button type="button" onClick={() => filterRecords("Philosophy")} class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
					  	Philosophy
          			</button>

				</div>

				<div className={"grid grid-cols-2 md:grid-cols-4 gap-4"}>
					{filteredRecords.map(record => (
						<div key={record._id} className={"relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow transition-all duration-300 cursor-pointer filter hue-rotate hover:hue-rotate-90"} style={{backgroundImage: "url('https://images.pexels.com/photos/1132577/pexels-photo-1132577.jpeg?auto=compress&cs=tinysrgb&w=1600')"}}>
              			<h3 className={"mb-2 text-2xl font-bold text-red-500"}>{record.title}</h3>
              			<h4 className={"mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400"}>Author: {record.author} </h4>
						<h4 className={"mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400"}>Genre: {record.genre}</h4>
						
						<center><button type="button" onClick={deleteRecord} id={record._id} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" style={{marginTop: "auto"}}>
							Delete!
						</button></center>
						</div>
				)) 
				}
			</div>
			</div>
		</section>
	)
}