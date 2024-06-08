import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import * as process from 'node:process'
import pico from 'picocolors'

const msgPath = path.resolve('.git/COMMIT_EDITMSG')
const msg = readFileSync(msgPath, 'utf-8').trim()

const commitRE
  = /^(?:revert: )?(init|feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(?:<.{1,10}>)?: (.{1,50})/

const commitEmoji: Record<string, string> = {
  init: '🎉',
  feat: '✨',
  fix: '🐞',
  docs: '📃',
  style: '🌈',
  refactor: '🦄',
  perf: '🎈',
  test: '🧪',
  build: '🔧',
  ci: '🐎',
  chore: '🐳',
  revert: '↩',
}

const regList = commitRE.exec(msg)

if (regList && regList.length > 1 && commitEmoji[regList[1]]) {
  if (!regList[2].includes(commitEmoji[regList[1]])) {
    const newMsg = msg.replace(regList[2], `${commitEmoji[regList[1]]} ${regList[2]}`)
    console.log(pico.blue(`您提交的消息: ${msg}`))
    console.log(pico.green(`修正后的消息: ${newMsg}`))
    writeFileSync(msgPath, newMsg, 'utf-8')
  }
}
else {
  console.log(pico.yellow(`\n你提交的信息: ${msg}`))
  console.error(`
${pico.white(pico.bgRed(' 错误 '))} ${pico.red(`无效的提交信息格式.`)}
  ${pico.red(`正确的提交消息格式. 例如:`)}
    ${pico.green(`feat: add a new feature`)}
    ${pico.green(`fix: fixed an interaction bug`)}
    ${pico.bgGreen(`feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert`)}\n\n`,
  )
  process.exit(1)
}
