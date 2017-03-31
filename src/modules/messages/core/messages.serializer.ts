import { Message } from './messages.models';

export module Serializer {
	export function serialize(message: Message) {
		if(!message) return null;
		return { 
			title: 				message.title, 
			content: 			message.content,
			tags:				message.tags || []
		};
	}

	export function deserialize(data: any): Message[] {
		if(!data) return [];
		return data.messages.map(deserializeMessage).filter(Boolean);
	}

	export function deserializeMessage(data: any): Message {
		if(!data) return null;
		return {
			id:					data.id,
			title:				data.title,
			content:			data.content,
			createdAt:			data.createdAt,
			tags:				data.tags
		}
	}
}