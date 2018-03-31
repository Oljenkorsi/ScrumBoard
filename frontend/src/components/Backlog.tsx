import * as React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Task from '../../node_modules/shared/src/task/Task';

interface BacklogProps {
	tasks: Task[];
}

const Backlog: React.SFC<BacklogProps> = (props: BacklogProps) => {
	const tasks = props.tasks;

	const taskSorter = (t1: Task, t2: Task) => t1.priority - t2.priority;

	const columns = () => {
		return <Grid.Column width={4}>
			<Segment>
				{'Backlog'}
				{tasks.sort(taskSorter).map(task =>
					<Segment key={task.title}>{task.title} {task.description}</Segment>)}
			</Segment>
		</Grid.Column>;
	};

	return (
		<Grid stackable={true}>
			<Grid.Row>{columns()}</Grid.Row>
		</Grid>
	);
};

export default Backlog;
