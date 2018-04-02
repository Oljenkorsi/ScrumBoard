import * as React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { ColumnLabel, Marker, Wrapper } from '../styles/styled';
import SortableGroup from './SortableGroup';

interface BoardProps {
	labels: object;
}

const Board: React.SFC<BoardProps> = ({ labels }) => {
	const columns = () => {
		const emptyMarker = (label: string) => {
			return (
				<Marker key={'empty_' + label}>
					<div className="empty" />
				</Marker>
			);
		};

		const content = (tasks: string[]) => {
			return tasks.map(task => (
				<Segment key={task} color="green" secondary={true} data-id={task}>
					{task}
				</Segment>
			));
		};

		return Object.keys(labels).map(label => (
			<Grid.Column width={4} key={label}>
				<Segment>
					<SortableGroup
						items={[
							<ColumnLabel key={'column_' + label}>{label}</ColumnLabel>,
							...content(labels[label]),
							emptyMarker(label),
						]}
					/>
				</Segment>
			</Grid.Column>
		));
	};

	return (
		<div>
			<Wrapper>
				<Grid stackable={true}>
					<Grid.Row>{columns()}</Grid.Row>
				</Grid>
			</Wrapper>
		</div>
	);
};

export default Board;
