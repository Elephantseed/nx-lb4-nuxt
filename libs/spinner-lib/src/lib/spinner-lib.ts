import ora from 'ora';

export class SpinnerLib {
  get spinner(): any {
    return this._spinner;
  }

  private readonly _spinner: any;

  constructor() {
    this._spinner = ora('Loading unicorns').start();
  }

  greet() {
    setTimeout(() => {
      this._spinner.color = 'yellow';
      this._spinner.text = 'Loading rainbows';
    }, 1000);
  }
}

export function nodeServerLib(): string {
  return 'node-server-lib';
}

