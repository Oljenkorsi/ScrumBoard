import * as React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Task from '../../node_modules/shared/src/task/Task';
import TaskStatus from '../../node_modules/shared/src/task/TaskStatus';

interface BoardProps {
	tasks: Task[];
}

const Board: React.SFC<BoardProps> = (props: BoardProps) => {
	const tasks = props.tasks;

	const groups = [
		{ label: 'Todo', status: TaskStatus.todo },
		{ label: 'In progress', status: TaskStatus.inProgress },
		{ label: 'In review', status: TaskStatus.inReview },
		{ label: 'Done', status: TaskStatus.done },
	];

	const columns = () => {
		const content = (tasks: Task[]) => {
			return tasks.map(task => <Segment key={task.title}>{task.title} {task.description}</Segment>);
		};

		return groups.map(group => (
			<Grid.Column width={4} key={group.label}>
				<Segment>
					{group.label}
					{content(tasks.filter(task => task.status === group.status))}
				</Segment>
			</Grid.Column>
		));
	};

	return (
		<Grid stackable={true}>
			<Grid.Row>{columns()}</Grid.Row>
		</Grid>
	);
};

export default Board;
