export interface IVocabulary {
  newWord: string;
  definition: string;
}

export type NewWordFormValues = IVocabulary;

export enum ELanguages {
  English = 'eng',
  Vietnamese = 'vie',
}

export type LanguageKey = ELanguages.English | ELanguages.Vietnamese;

export type Dictionary = Record<LanguageKey, IVocabulary[]>;
