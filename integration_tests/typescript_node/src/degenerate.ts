import {
  type EmptyChoiceIn,
  type EmptyChoiceOut,
  EmptyStruct,
  type EmptyStructIn,
  type EmptyStructOut,
} from '../generated/degenerate/types';
import { assertRoundTrip } from './assertions';

export function initialIn(x: EmptyChoiceIn): never {
  return x;
}

export function initialOut(x: EmptyChoiceOut): never {
  return x;
}

export function terminalIn(_x: unknown): EmptyStructIn {
  return {};
}

export function terminalOut(_x: unknown): EmptyStructOut {
  return {};
}

export default function run(): void {
  assertRoundTrip(EmptyStruct.size, EmptyStruct.serialize, EmptyStruct.deserialize, {});
}
