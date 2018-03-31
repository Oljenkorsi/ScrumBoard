import * as React from 'react';
import Board from './components/Board';
import NavBar from './components/NavBar';
import { allTasks } from './services/task';

class App extends React.Component {
	tasks = (): string[] => {
		return Array.from(allTasks()).map(task => task.title);
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Scrumboard</h1>
				</header>
				<NavBar />
				<Board
					labels={{
						Backlog: this.tasks(),
						'Work In Progress': ['Semantic UI is easy to learn'],
						'In Review': ['Just add some styles', 'This is working'],
						Done: ['All is done', 'TSLint is goood', 'Unstrict TS rules use when types are necessary'],
					}}
				/>
			</div>
		);
	}
}

export default App;
