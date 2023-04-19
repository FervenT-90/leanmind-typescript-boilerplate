/**
 * Main Class
 */
export class TemplateEngine {
  public template: string;
  public dictionary: { key: string, value: string };

  constructor(template: string, dictionary: { key: string, value: string }) {
    this.template = template;
    this.dictionary = dictionary;
  }

  public getResult(): string {
    return this.template.replace('${' + this.dictionary.key + '}', this.dictionary.value)
  }
}
