// js/components/InsertPage.jsx
export default function InsertPage() {
	const insertRecord = async (e) => {
		e.preventDefault();

		const title = document.getElementById('title').value;
		const author = document.getElementById('author').value;
		const genre = document.getElementById('genre').value;
		const data = {
			title: title,
			author: author,
			genre: genre,
		};

		console.log(data);

		fetch("/api/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then( () => {
				console.log("A records has been uploaded")
				document.getElementById('title').value = '';
				document.getElementById('author').value = '';
				document.getElementById('genre').value = '';
			})
	}
	return (
		<section className={"bg-white"} style={{backgroundImage: "url('https://images.pexels.com/photos/2743488/pexels-photo-2743488.jpeg?auto=compress&cs=tinysrgb&w=1600)"}}>
			<div className={"container px-6 py-10 mx-auto"}>
				<h1 className={"w-[500px] mx-auto text-center text-6xl font-bold text-blue-600"}>Insert a book</h1><br></br>
				<p className={"w-[1000px] mx-auto text-center mb-2 text-2xl font-bold text-red-400"}>You bring the book, we bring the shelves. Let's make some magic happen!</p><br></br>
				<center><a href="http://localhost:3000" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Library</a></center><br></br>

				<form>
					<div className="mb-6">
						<label htmlFor="email" className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">Title</label>
						<input type="text" id="title"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Book Title" required/>
					</div>
					<div className="mb-6">
						<label htmlFor="email" className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">Author</label>
						<input type="text" id="author"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Book Author" required/>
					</div>
					<div className="mb-6">
						<label htmlFor="email" className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">Genre</label>
						<input type="text" id="genre"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Book Genre" required/>
					</div>
					
					
					<button type="submit"
					        onClick={ insertRecord }
					        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit
					</button><br></br><br></br>

				</form>

					<label htmlFor="email" className="block mb-2 text-6xl font-medium text-gray-900 dark:text-white">Thoughts from other book lovers</label><br></br>
					<blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
    					<svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    					<p>"Books are a gateway to new worlds and perspectives. They provide an escape from reality and allow me to explore different cultures, ideas, and emotions. They expand my knowledge and understanding of the world, and they inspire me to think critically and creatively."</p>
					</blockquote><br></br>
					<blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
    					<svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    					<p>"Books are a lifelong journey of discovery. They challenge me to question my assumptions, broaden my perspectives, and embrace new ideas. They open doors to different genres, styles, and authors, allowing me to constantly explore and evolve as a reader. Books are a constant source of learning and intellectual stimulation."</p>
					</blockquote><br></br>
					<blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
    					<svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    					<p>"Books are a source of inspiration and motivation. They fuel my imagination and ignite my passion for learning. Through books, I can delve into the depths of human experiences, empathize with diverse characters, and gain insights into the complexities of life. They encourage me to dream big and strive for personal and intellectual growth."</p>
					</blockquote><br></br>
					<blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
    					<svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    					<p>"Books are my companions, offering solace and companionship in both joyful and challenging times. They are a source of comfort and a refuge where I can immerse myself in stories and characters that resonate with me. They provide an opportunity for self-reflection and personal growth."</p>
					</blockquote><br></br>
					<blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
    					<svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    					<p>"Books are a form of entertainment and enjoyment. They captivate my imagination, spark my curiosity, and provide hours of engrossing entertainment. Whether I'm engrossed in a thrilling mystery, swept away by a heartwarming romance, or intrigued by a thought-provoking non-fiction book, reading brings me joy and fulfillment. It's a form of relaxation and pleasure that I look forward to whenever I pick up a book."</p>
					</blockquote><br></br>
					<blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
    					<svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    					<p>"Books are a source of empathy and understanding. They have the power to bridge gaps between different cultures, backgrounds, and experiences. Through books, I can step into the shoes of characters from diverse backgrounds, gaining insights into their lives, challenges, and triumphs. This cultivates empathy and broadens my understanding of the human experience, fostering a greater sense of compassion and acceptance."</p>
					</blockquote><br></br>
					<blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
    					<svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    					<p>"Books are a form of self-expression and creativity. They serve as a platform for authors to share their unique stories, ideas, and perspectives with the world. As a reader, books enable me to tap into my own creativity, as I imagine vivid settings, visualize characters, and interpret the words on the page in my own way. They inspire me to explore my own voice and perhaps even pursue writing myself."</p>
					</blockquote><br></br>
					<blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
    					<svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    					<p>"Books are an escape from reality, allowing me to temporarily leave behind the stresses and demands of daily life. They transport me to different eras, places, and realms, providing a much-needed respite and a chance to unwind. Reading books is like embarking on an adventure without ever leaving the comfort of my favorite reading spot."</p>
					</blockquote><br></br>
					<blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
    					<svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    					<p>"Books are a source of knowledge and education. They contain a wealth of information on a wide range of topics, from history and science to philosophy and art. Reading books allows me to expand my understanding of the world, learn new concepts, and stay informed about current events. They are like a gateway to endless learning, providing me with intellectual stimulation and the opportunity to broaden my horizons."</p>
					</blockquote><br></br>
					<blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
    					<svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    					<p>"Books are companions that never let me feel alone. They are there for me during times of solitude, offering comfort, inspiration, and companionship. No matter where I am or how I'm feeling, I can always turn to a book to find solace and a sense of connection. Books have a way of making me feel understood and less alone in the world, as if I'm part of a larger community of readers who share similar interests and experiences."</p>
					</blockquote><br></br>
					<blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
    					<svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    					<p>"Books are a legacy of humanity. They are a testament to our collective wisdom, culture, and heritage. Through books, we preserve our stories, ideas, and knowledge for future generations. They are a reflection of our history, values, and aspirations, passing on the legacy of previous generations and shaping the intellectual landscape of the future. Books connect us to the past, present, and future, creating a timeless thread that binds humanity together."</p>
					</blockquote><br></br>

					<form>
				<label for="message" class="block mb-2 text-3xl font-large text-gray-900 dark:text-white">Booklovers area</label>

   					<div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       					<div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           				<label for="comment" class="sr-only">Your opinion...</label>
           				<textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Tell us what books mean to you..." required></textarea>
      				 	</div>
       				<div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
           			<button type="submit" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
               			Post
          		 	</button>
           			<div class="flex pl-0 space-x-1 sm:pl-2">
               		<button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                   		<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
                   		<span class="sr-only">Attach file</span>
               		</button>
               		<button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                   		<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                   		<span class="sr-only">Set location</span>
              	 	</button>
               		<button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                   		<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                   		<span class="sr-only">Upload image</span>
               		</button>
           			</div>
       				</div>
   					</div>
					</form>
					<p class="ml-auto text-xs text-black-500 dark:text-black-400">Remember, comments should follow our <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p><br></br><br></br><br></br>
			</div>
		</section>
	)
}