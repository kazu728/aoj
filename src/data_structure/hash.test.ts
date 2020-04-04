import { main } from './hash'

const input = `6
insert AAA
insert AAC
find AAA 
find CCC
insert CCC
find CCC
`

const convert = (output: string[]): string => output.join('\n')
const output: string[] = main(input)

test('should search', () => {
  expect(convert(output)).toEqual(`yes\nno\nyes`)
})
