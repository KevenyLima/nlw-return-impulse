export interface FeedbackData {
  type:string
  comment: string
  screenshot?: string
}

export interface FeedbackRepository{
  create:(data:FeedbackData) => Promise<void>
}