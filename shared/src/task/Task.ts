import Participant from '../participant/Participant';
import TaskPriority from './TaskPriority';
import TaskStatus from './TaskStatus';
import TaskType from './TaskType';

export default class Task {
	assignee: Participant;
	description: string;
	priority: TaskPriority;
	status: TaskStatus;
	title: string;
	type: TaskType;
}
