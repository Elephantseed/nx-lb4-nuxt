import ora, { Ora } from 'ora';

export function spinners(): Ora {
  const spinner = ora('Loading unicorns').start();
  setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading rainbows';
  }, 1000);
  return spinner;
}
