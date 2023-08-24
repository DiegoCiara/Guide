
export function checkString(input) {
  if(input === null)
    return ''
    const terminalKeywords = ['npm', 'yarn', 'pip', 'docker-compose', 'sudo']
    const jsonKeywords = ['{']
    if (jsonKeywords.some(item => input.includes(item))) {
      return 'Json'
    }else if (terminalKeywords.some(item => input.includes(item))) {
      return 'Terminal';
    }else{
      return 'Código'
    }
}