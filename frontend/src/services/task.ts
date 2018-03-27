import ParticipantType from '../../node_modules/shared/src/participant/ParticipantType';
import Task from '../../node_modules/shared/src/task/Task';
import TaskPriority from '../../node_modules/shared/src/task/TaskPriority';
import TaskType from '../../node_modules/shared/src/task/TaskType';

const tasks = [
	{
		assignee: { name: 'Otto', type: ParticipantType.developer },
		description: 'so that I can follow Scrum',
		priority: TaskPriority.high,
		title: 'As a user I want to add tasks to scrumboard',
		type: TaskType.feature,
	},
	{
		assignee: { name: 'Otto', type: ParticipantType.developer },
		description: 'so that I can follow Scrum',
		priority: TaskPriority.high,
		title: 'As a user I want to drag tasks to prioritize',
		type: 1,
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
];

const allTasks = (): Task[] => {
	return tasks;
};

export { allTasks };