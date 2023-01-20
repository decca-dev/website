export interface ProjectInterface {
	name: string;
	description: string;
	href: string;
	status: 'Done' | 'WIP';
}

export interface ResponseData<T> {
	success: boolean;
	data?: T;
}
