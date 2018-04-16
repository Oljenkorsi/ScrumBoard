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
					const isEmptyColumn = el => el.parentElement.childElementCount === 1;
					const { dragged: from, related: to } = e;
					return notMarker(from) && (notMarker(to) || isEmptyColumn(to));
				},
			}}
			tag="div">
			{items}
		</Sortable>
	);
};

export default SortableGroup;
