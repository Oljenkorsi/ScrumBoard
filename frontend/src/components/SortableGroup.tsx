import * as React from 'react';
import * as Sortable from 'react-sortablejs';

interface GroupProps {
	items: object[];
}

const SortableGroup: React.SFC<GroupProps> = ({ items }) => {
	return (
		<Sortable
			options={{
				group: 'shared',
				sort: false,
				onMove: (e, oe) => {
					const notMarker = el => el.firstChild.className !== 'empty';
					const notLabel = el => el.tagName !== 'SECTION';
					const isDraggable = el => notLabel(el) && notMarker(el);
					const isEmptyColumn = el => !notMarker(el) && el.parentElement.childElementCount === 2;
					const { dragged: from, related: to } = e;
					return isDraggable(from) && (isDraggable(to) || isEmptyColumn(to));
				},
			}}
			tag="div">
			{items}
		</Sortable>
	);
};

export default SortableGroup;
