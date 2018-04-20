import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Container } from 'semantic-ui-react';
import '../src/styles/styles.css';
import Board from './components/Board';
import NavBar from './components/NavBar';
import { allTasks } from './services/task';
import Task from './shared/task/Task';

@observer
class App extends React.Component {
	@observable tasks: Task[] = [];

	componentDidMount() {
		// load tasks from backend here
		setTimeout(() => {
			this.tasks = allTasks();
		}, 1000);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Scrumboard</h1>
				</header>
				<NavBar />
				<Container fluid={true}>
					<Board
						columns={{
							Backlog: this.tasks,
							'Work In Progress': [],
							'In Review': [],
							Done: [],
						}}
					/>
				</Container>
			</div>
		);
	}
}

export default App;
