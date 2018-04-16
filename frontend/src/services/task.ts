import ParticipantType from '../../node_modules/shared/src/participant/ParticipantType';
import Task from '../../node_modules/shared/src/task/Task';
import TaskPriority from '../../node_modules/shared/src/task/TaskPriority';
import TaskType from '../../node_modules/shared/src/task/TaskType';

const tasks = [
	{
		assignee: { name: 'Anyone', type: ParticipantType.developer },
		description: 'so that I can follow Scrum',
		priority: TaskPriority.high,
		title: 'As a user I want to add tasks to scrumboard',
		type: TaskType.feature,
	},
	{
		assignee: { name: 'Veini', type: ParticipantType.developer },
		description: 'so that I can follow Scrum',
		priority: TaskPriority.high,
		title: 'As a user I want to get updated tasks from backend',
		type: TaskType.feature,
	},
	{
		assignee: { name: 'Veini', type: ParticipantType.developer },
		description: 'so that I can follow Scrum',
		priority: TaskPriority.low,
		title: 'As a user I want to have multiple projects',
		type: TaskType.feature,
	},
	{
		assignee: { name: 'Veini', type: ParticipantType.developer },
		description: 'so that I can follow Scrum',
		priority: TaskPriority.medium,
		title: 'As a user I want to add tasks to a running spring',
		type: TaskType.feature,
	},
	{
		assignee: { name: 'Veini', type: ParticipantType.developer },
		description: 'so that it is bugfree',
		priority: TaskPriority.medium,
		title: 'As a user I want the project fully UI tested',
		type: TaskType.feature,
	},
	{
		assignee: { name: 'Veini', type: ParticipantType.developer },
		description: 'so that it is bugfree',
		priority: TaskPriority.high,
		title: 'As a user I want tasks to have order for prioritizing',
		type: TaskType.feature,
	},
	{
		assignee: { name: 'Veini', type: ParticipantType.developer },
		description: 'so that UI is beautiful',
		priority: TaskPriority.low,
		title: 'As a user I want to disable scrolling to left because overflow-x wont work',
		type: TaskType.feature,
	},
	{
		assignee: { name: 'Otto', type: ParticipantType.developer },
		description: 'so that code is beautiful',
		priority: TaskPriority.low,
		title: 'As a dev I want to the columns to re-prioritize if I drop a task in middle of two tasks',
		type: TaskType.feature,
	},
	{
		assignee: { name: 'Otto', type: ParticipantType.developer },
		description: 'user-drag: none not on ff',
		priority: TaskPriority.low,
		title: 'As a dev I want to disable ghost while dragging column labels on firefox',
		type: TaskType.bugfix,
	},
];

const allTasks = (): Task[] => {
	return tasks;
};

export { allTasks };
