export interface ErrorType {
  readonly message: string
}
export class AppError implements ErrorType {
  constructor(public message: string) {
    this.message = message
  }
}

export class RequestError implements ErrorType {
  readonly message: string
  readonly statusCode: number
  constructor(message: string, statusCode: number) {
    this.message = message
    this.statusCode = statusCode
  }
}

export class InternalError extends RequestError {}
export class NotAuthorized extends RequestError {}
export class ClientError extends RequestError {}
