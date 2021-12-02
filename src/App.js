import React, { useEffect, useState } from "react";
import TodoList from './components/TodoList';
import './App.css';

function App() {
	
	const [data, setData] = useState([{}]);
	const [formValues, updateFormValues] =useState({});

		useEffect(()=> {
			fetch("/members").then(
				res =>res.json()
			).then(
				data =>{
					setData(data);
					console.log(data);
				}
			);
		}, []);

	
		useEffect(() => {
			const formData = window.localStorage.getItem("List");
			updateFormValues(JSON.parse(formData));

		}, []);

		useEffect(()=>{
			window.localStorage.setItem('Hey there', JSON.stringify(FormData));
		});



	return (
		<div className="todo-app">
			<TodoList />

			{(typeof data.members === 'undefined') ? (
				<p></p>
			) : (
				data.members.map((member, i) =>(
					<p key={i}>{member}</p>

				))
			)}

		</div>

		
	)
}

export default App

