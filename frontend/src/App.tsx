import * as React from 'react';
import { Container } from 'semantic-ui-react';
import '../src/styles/styles.css';
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
				<Container fluid={true}>
					<Board
						labels={{
							Backlog: this.tasks(),
							'Work In Progress': [],
							'In Review': [],
							Done: [
								'As a user I want to drag a task to an empty list',
								'As a user I want to drag tasks to prioritize',
							],
						}}
					/>
				</Container>
			</div>
		);
	}
}

export default App;
