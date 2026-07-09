// oxlint-disable no-console -- Integration tests print progress between cases.
import runCircularDependency from './circular-dependency.ts';
import runComprehensive from './comprehensive.ts';
import runDegenerate from './degenerate.ts';
import runSchemaEvolution from './schema-evolution.ts';

console.log('Running circular dependency integration test\u2026\n');
runCircularDependency();

console.log('\nRunning comprehensive integration test\u2026\n');
runComprehensive();

console.log('\nRunning degenerate integration test\u2026\n');
runDegenerate();

console.log('\nRunning schema evolution integration test\u2026\n');
runSchemaEvolution();
