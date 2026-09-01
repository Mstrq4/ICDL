import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

async function evaluateQuizProgress(currentQIndex, questionCount) {
  const source = await readFile(new URL('../App.tsx', import.meta.url), 'utf8');
  const match = source.match(/const progress = ([^;]+);/);

  assert.ok(match, 'Quiz progress expression should exist in App.tsx');

  const expression = match[1]
    .replaceAll('currentQIndex', String(currentQIndex))
    .replaceAll('exam.questions.length', String(questionCount));

  return Function(`"use strict"; return (${expression});`)();
}

test('quiz progress includes the current question', async () => {
  assert.equal(await evaluateQuizProgress(0, 4), 25);
  assert.equal(await evaluateQuizProgress(1, 4), 50);
  assert.equal(await evaluateQuizProgress(3, 4), 100);
});
