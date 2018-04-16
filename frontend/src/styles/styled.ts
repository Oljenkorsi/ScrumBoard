import styled from 'styled-components';

const Marker = styled.section`
	user-drag: none;
	min-height: 3rem;
`;

const ColumnLabel = styled.section`
	padding-bottom: 0.4rem;
	user-drag: none;
	min-height: 2.5rem;
`;

const BoardWrapper = styled.section`
	padding-top: 1rem;
	padding-left: 2rem;
	padding-right: 2rem;
	background: #add8e6;
`;

export { Marker, ColumnLabel, BoardWrapper };
