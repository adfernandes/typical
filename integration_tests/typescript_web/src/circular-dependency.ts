// oxlint-disable no-console -- Integration tests print progress between cases.
import { StructFromBelow } from '../generated/circular_dependency/dependency/types.ts';
import { StructFromAbove } from '../generated/circular_dependency/types.ts';
import { assertRoundTrip } from './assertions.ts';

export default function run(): void {
  assertRoundTrip(StructFromAbove.size, StructFromAbove.serialize, StructFromAbove.deserialize, {
    field: 'field',
    size: 'size',
    elements: 'elements',
    fallback: 'fallback',
  });

  console.log();

  assertRoundTrip(StructFromBelow.size, StructFromBelow.serialize, StructFromBelow.deserialize, {
    x: {
      field: 'field',
      size: 'size',
      elements: 'elements',
      fallback: 'fallback',
    },
  });
}
