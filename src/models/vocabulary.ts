export interface IVocabulary {
  newWord: string;
  definition: string;
  exampleSentences?: string[];
  lang: ELanguages;
  partOfSpeech?: string;
  pronunciation?: string;
  similarWords?: string[];
}

export type NewWordFormValues = IVocabulary;

export enum ELanguages {
  English = 'eng',
  Korean = 'kor',
}

export type LanguageKey = ELanguages.English | ELanguages.Korean;

export type Dictionary = Record<LanguageKey, IVocabulary[]>;
