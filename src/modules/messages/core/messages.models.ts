export interface Message {
	readonly id: string;
	readonly title: string;
	readonly content: string;
	readonly createdAt: string;
	readonly tags: string[];
}