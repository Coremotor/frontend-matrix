export interface IContent {
  grade: string;
  knowledge: IKnowledge[];
}

export interface IKnowledge {
  description: string;
  details: string[];
}
