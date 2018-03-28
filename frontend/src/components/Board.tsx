import * as React from 'react';
import ReactSortable from 'react-sortablejs';
import { Grid, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

interface BoardProps {
	labels: object;
}

interface GroupProps {
	items: object[];
}

const SharedGroup: React.SFC<GroupProps> = ({ items }) => {
	return (
		<ReactSortable options={{group: 'shared',
				onMove: (e, oe) => {
					console.log('e', e);
					const notLabel = (el) => el.tagName !== 'SECTION';
					// column labels return false and thus aren't draggable to fix dragging to empty list
					return (notLabel(e.dragged) && notLabel(e.related)) ||
						(notLabel(e.dragged) && !notLabel(e.related));
				}
			}} tag="div">
			{items}
		</ReactSortable>
	);
};

const Board: React.SFC<BoardProps> = ({ labels }) => {
	const columns = () => {
		const content = (tasks: string[]) => {
			return tasks.map(task =>
				<Segment key={task} color="green" secondary={true} data-id={task}>
					{task}
				</Segment>);
		};

		const ColumnLabel = styled.section`
			padding-bottom: 0.2rem;
			user-drag: none;`;

		return Object.keys(labels).map(label => (
			<Grid.Column width={4} key={label}>
				<Segment>
					<SharedGroup items={[
						<ColumnLabel>{label}</ColumnLabel>,
						...content(labels[label])]}/>
				</Segment>
			</Grid.Column>
		));
	};

	const Wrapper = styled.section`
		padding-top: 1rem;
		padding-left: 2rem;
		padding-right: 2rem;
		background: #ADD8E6;`;

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
