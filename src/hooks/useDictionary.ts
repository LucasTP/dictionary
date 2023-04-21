import { Dictionary, IVocabulary, LanguageKey } from '../models/vocabulary';

export const useDictionary = (lang: LanguageKey) => {
  const dictionary: Dictionary = {
    eng: [] as IVocabulary[],
    vie: [] as IVocabulary[],
  };

  const fetchDictionary = async () => {
    const response = await fetch('/api/vocabulary');
    const data = await response.json();
    dictionary.eng = data.eng;
    dictionary.vie = data.vie;
  };

  return { dictionary: dictionary[lang], fetchDictionary };
};
