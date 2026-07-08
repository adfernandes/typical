import {
  type EmptyChoiceIn,
  type EmptyChoiceOut,
  EmptyStruct,
  type EmptyStructIn,
  type EmptyStructOut,
} from '../generated/degenerate/types';
import { assertRoundTrip } from './assertions';

// oxlint-disable-next-line @typescript-eslint/no-unused-vars -- We only care that it type checks.
function initialIn(x: EmptyChoiceIn): never {
  return x;
}

// oxlint-disable-next-line @typescript-eslint/no-unused-vars -- We only care that it type checks.
function initialOut(x: EmptyChoiceOut): never {
  return x;
}

// oxlint-disable-next-line @typescript-eslint/no-unused-vars -- We only care that it type checks.
function terminalIn(x: unknown): EmptyStructIn {
  return {};
}

// oxlint-disable-next-line @typescript-eslint/no-unused-vars -- We only care that it type checks.
function terminalOut(x: unknown): EmptyStructOut {
  return {};
}

export default function run(): void {
  assertRoundTrip(EmptyStruct.size, EmptyStruct.serialize, EmptyStruct.deserialize, {});
}
