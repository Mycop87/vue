interface IError {
  error: {
    status: number, message: string,
  }

  [index: string]: any;
}

export class Error {

  private error = {
    error: {
      status:  400,
      message: 'some Error test',
    },
  } as IError;

  public get eObject (): IError {
    return { ...this.error };
  }

  public getEObject (status: number, message: string): IError {
    return {
      ...this.error,
      status,
      message,
    };
  }
}
module.exports = new Error();
