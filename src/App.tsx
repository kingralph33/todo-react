import './App.css';
import AddNewTask from './Components/AddNewTask';
import TitleBar from './Components/Buttons/TitleBar';
import TaskList from './Components/TaskList';

function App() {
	return (
		<div className='container mx-auto mt-48 w-3/4 p-24'>
			<TitleBar />
			<AddNewTask />
			<TaskList />
		</div>
	);
}

export default App;
