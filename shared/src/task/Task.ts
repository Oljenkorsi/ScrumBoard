import Participant from '../participant/Participant';
import TaskPriority from './TaskPriority';
import TaskType from './TaskType';

export default class Task {
	assignee: Participant;
	description: string;
	priority: TaskPriority;
	title: string;
	type: TaskType;
}
