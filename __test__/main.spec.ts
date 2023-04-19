import { TemplateEngine } from '../src/main';

describe('Template Engine', () => {
  it('should replace in the template, the variable defined in the dictionary and return it', () => {
    const template = 'This is a template with one ${variable}'
    const dictionary = { variable: 'foo' }
    const expectedOutput = `This is a template with one ${dictionary.variable}`

    const main = new TemplateEngine(template , dictionary );
    expect(main.getResult()).toBe(expectedOutput);
  });
});
