export interface mailData {
  subject: string
  body: string
}

export interface mailAdapter {
  send(data:mailData):Promise<void>
}