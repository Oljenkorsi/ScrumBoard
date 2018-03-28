import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import '../src/components/styles.css';
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
					<Grid>
						<Board labels={{
								Backlog: this.tasks(),
								'Work In Progress': [],
								'In Review': [],
								Done: ['As a user I want to drag tasks to prioritize']}} />
					</Grid>
				</div>
		);
	}
}

export default App;
