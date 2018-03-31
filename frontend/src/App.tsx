import * as React from 'react';
import Board from './components/Board';
import NavBar from './components/NavBar';
import { allTasks } from './services/task';

import Task from '../node_modules/shared/src/task/Task';

class App extends React.Component {
	tasks = (): Task[] => {
		return Array.from(allTasks());
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Scrumboard</h1>
				</header>
				<NavBar />
				<Board
					tasks={this.tasks()}
				/>
			</div>
		);
	}
}

export default App;
