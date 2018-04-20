import * as React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Task from '../shared/task/Task';
import { BoardWrapper, ColumnLabel, Marker } from '../styles/styled';
import SortableGroup from './SortableGroup';

interface Columns {
	[label: string]: Task[];
}

interface BoardProps {
	columns: Columns;
}

const Board: React.SFC<BoardProps> = ({ columns }) => {
	const container = () => {
		const emptyMarker = (label: string) => {
			return (
				<Marker key={'empty_' + label}>
					<div className="empty" />
				</Marker>
			);
		};

		const content = (tasks: Task[]) => {
			return tasks.map(task => (
				<Segment key={task.title} color="green" secondary={true} data-id={task.title}>
					{task.title}
				</Segment>
			));
		};

		return Object.keys(columns).map(label => (
			<Grid.Column width={4} key={'column_' + label}>
				<Segment>
					<ColumnLabel>{label}</ColumnLabel>
					<SortableGroup items={[...content(columns[label]), emptyMarker(label)]} />
				</Segment>
			</Grid.Column>
		));
	};

	return (
		<BoardWrapper>
			<Grid stackable={true}>
				<Grid.Row>{container()}</Grid.Row>
			</Grid>
		</BoardWrapper>
	);
};

export default Board;
