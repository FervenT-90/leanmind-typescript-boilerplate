/**
 * Main Class
 */
export class TemplateEngine {
  public template: string;
  public dictionary: { [key: string]: string };

  constructor(template: string, dictionary: { [key: string]: string }) {
    this.template = template;
    this.dictionary = dictionary;
  }

  public getResult(): string {
    let result = ''
    Object.entries(this.dictionary).map(([key, value]) => {
      result = this.template.replace('${' + key + '}', value)

    })
    return result
  }
}
