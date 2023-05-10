import React, {useState} from 'react';
import MessageBox from "/js/components/MessageBox";

function ChatComponent(props) {
	const [chatMessages, setChatMessages] = useState([]);

	const filterChatHistory = chatHistory => {
		let filteredChatHistory = [];
		for( let i = 0; i < chatHistory.length; i++ ){
			const currMessage = chatHistory[i];
			const nextMessage = chatHistory[i+1];

			if( i === chatHistory.length - 1 || (currMessage.type !== 'error' && nextMessage?.type !== 'error' && currMessage.role !== nextMessage?.role) ){
				filteredChatHistory.push(currMessage);
			}
		}

		return filteredChatHistory;
	}

	const buildResponseMessageObject = response => {
		let responseMessageObject;

		responseMessageObject = response.data.message;

		return responseMessageObject;
	}

	const handleKeyDown = async (e) => {
		if(e.key === 'Enter'){
			if(!e.target.value){
				return;
			}

			const currentMessage = e.target.value;
			e.target.value = '';
			e.target.disabled = true;

			const currentMessageObject = {
				role: 'user',
				content: currentMessage,
			}

			setChatMessages(prevChatMessages => [...prevChatMessages, currentMessageObject]);
			const currentChatHistory = [...chatMessages, currentMessageObject];
			const filteredChatHistory = filterChatHistory(currentChatHistory);

			try{
				let response = await fetch('/api/answer', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						messages: filteredChatHistory,
						type: 'michael_scott',
					}),
					signal: AbortSignal.timeout(20000),
				});
				response = await response.json();

				e.target.disabled = false;
				e.target.focus();
				console.log(response);

				const responseMessageObject = buildResponseMessageObject(response);
				setChatMessages(prevChatMessages => [...prevChatMessages, responseMessageObject]);
			}
			catch(error){
				console.log(error);
			}
		}
	}

	return (
		<section className={"bg-white"} style={{backgroundImage: "url('https://images.pexels.com/photos/572061/pexels-photo-572061.jpeg?auto=compress&cs=tinysrgb&w=1600')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
		<div className={'w-full mx-auto text-center text-6xl font-bold text-blue-600'}>
			Welcome to the fun chat!
		</div><br></br><br></br>
		<center><a href="http://localhost:3000" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Library</a></center><br></br>

		<div className={"w-full max-w-[1500px] mx-auto my-10"}>
			<div className={"border border-b-0 rounded-lg border-gray-300'"}>
				<MessageBox chatMessages={chatMessages}/>
			</div>
			<input
				id={'chat-input'}
				type={'text'}
				className="bg-gray-50 border border-gray-300 border-x-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
				placeholder="Type something..."
				onKeyDown={handleKeyDown}
			/>
		</div>
		</section>
	);
}

export default ChatComponent;