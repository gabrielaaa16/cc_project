import React, {useEffect, useRef} from 'react';

function MessageBox(props) {
	const messagesEndRef = useRef(null);
	const { chatMessages, } = props;

	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: 'smooth', });
	}
	useEffect(() => {
		scrollToBottom()
	}, [chatMessages]);

	return (
		<div className={'h-[400px] overflow-auto px-[20px]'}>
			<ul className={'divide-y divide-gray-200'}>
				<li className={ 'py-3' }>
							<span className={ `block mb-2 text-2xl font-bold text-red-400` }>
								ChatGPT:
							</span>
					<span className={ 'block' }>
								Hi, I am a ChatBot. How can I help you?
							</span>
				</li>
				{
					chatMessages.map((message, index) => {
						return (
							<li className={'py-3'} key={index}>
								<span className={ `block ${message.role === 'assistant' ? 'mb-2 text-2xl font-bold text-red-400' : 'mb-2 text-2xl font-bold text-blue-400'} font-bold` }>
									{
										message.role === 'assistant' ? 'ChatGPT:' : 'You:'
									}
								</span>
								<span className={ 'block' }>
									{
										message.content
									}
								</span>
							</li>
						)
					})
				}
			</ul>
			<div ref={ messagesEndRef } />
		</div>
	);
}

export default MessageBox;