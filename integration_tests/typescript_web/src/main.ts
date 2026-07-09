// oxlint-disable no-console -- Integration tests print progress between cases.
import runCircularDependency from './circular-dependency.ts';
import runComprehensive from './comprehensive.ts';
import runDegenerate from './degenerate.ts';
import runSchemaEvolution from './schema-evolution.ts';
import { verifyOmnifile } from './assertions.ts';

function setStatus(message: string): void {
  const app = document.querySelector<HTMLDivElement>('#app');

  if (app === null) {
    throw new Error('Missing app element.');
  }

  app.innerHTML = message;
}

setStatus('Running integration tests\u2026');

window.requestAnimationFrame(() => {
  try {
    console.log('Running circular dependency integration test\u2026\n');
    runCircularDependency();

    console.log('\nRunning comprehensive integration test\u2026\n');
    runComprehensive();

    console.log('\nRunning degenerate integration test\u2026\n');
    runDegenerate();

    console.log('\nRunning schema evolution integration test\u2026\n');
    runSchemaEvolution();

    console.log('\nVerifying omnifile\u2026\n');
    verifyOmnifile();
  } catch (e) {
    const failureParagraph = document.createElement('p');
    failureParagraph.innerHTML = 'Integration tests failed. See the console for details.';
    document.body.appendChild(failureParagraph);

    throw e;
  }

  setStatus('Integration tests passed.');
});
