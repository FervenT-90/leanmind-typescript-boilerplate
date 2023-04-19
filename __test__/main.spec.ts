import { TemplateEngine } from '../src/main';

describe('Template Engine', () => {
  it('should replace in the template, the variable defined in the dictionary and return it', () => {
    const template = 'This is a template with one ${variable}'
    const dictionary = { key: 'variable', value: 'foo' }
    const expectedOutput = `This is a template with one ${dictionary.value}`

    const main = new TemplateEngine(template , dictionary );
    expect(main.getResult()).toBe(expectedOutput);
  });

  it('should replace in the template, the variable defined in the dictionary and return it', () => {
    const template = 'This is a template with one ${variable}'
    const dictionary = { key: 'variable', value: 'foo' }
    const expectedOutput = 'This is a template with one foo'

    const main = new TemplateEngine(template , dictionary );
    expect(main.getResult()).toBe(expectedOutput);
  });
});
