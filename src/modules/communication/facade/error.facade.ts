export abstract class GatewayError {
  public status: number;
  public message?: string;

  constructor(status: number, message?: string) {
    this.status = status;
    this.message = message;
  }
}

