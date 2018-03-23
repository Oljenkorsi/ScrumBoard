import * as React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

export interface BoardProps {
	labels: object;
}

const Board: React.SFC<BoardProps> = (props: BoardProps) => {
	const labels = props.labels;

	const columns = () => {
		
		const content = (tasks: string[]) => {
			return tasks.map(task => <Segment>{task}</Segment>);
		};

		return Object.keys(labels).map(label => (
			<Grid.Column width={4}>
				<Segment>
					{label}
					{content(labels[label])}
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
