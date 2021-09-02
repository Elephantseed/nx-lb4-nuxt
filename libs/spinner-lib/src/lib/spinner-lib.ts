import ora, {Ora} from 'ora';

export class SpinnerLib {
  get spinner(): Ora {
    return this._spinner;
  }

  private readonly _spinner: Ora;

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

