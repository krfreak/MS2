export class Message{
  id: string;
  title: string;
  content: string;
  createdAt: string;
  tags: string[];
  isHint: boolean;

  constructor(id, title, content, isHint, tags, createdAt){
    this.id = id;
    this.title = title;
    this.content = content;
    this.isHint = isHint;
    this.tags = tags;
    this.createdAt = createdAt;
  }
}
