import { addDoc, collection, getDocs } from 'firebase/firestore';

import { dictionaryFireStore } from '../config/firebaseConfig';
import db from '../firebase';
import { Dictionary, ELanguages, IVocabulary } from '../models/vocabulary';

const initDictionaryData: Dictionary = {
  [ELanguages.English]: [],
  [ELanguages.Korean]: [],
};

interface UseDictionary {
  fetchDictionary: () => Promise<Dictionary>;
  addNewWord: (newWord: IVocabulary) => Promise<void>;
}

export const useDictionary = (): UseDictionary => {
  const fetchDictionaryFromFireStore = async () => {
    const querySnapshot = await getDocs(collection(db, dictionaryFireStore.collection));

    const data = querySnapshot.docs.map((doc) => doc.data()) as IVocabulary[];

    const dict = data.reduce((acc, curr) => {
      const { lang } = curr;
      const languageSupport = Object.values(ELanguages).includes(lang);
      if (!languageSupport) {
        return acc;
      }
      acc[lang] = [...acc[lang], curr];
      return acc;
    }, initDictionaryData);

    return dict;
  };

  const addNewWord = async (newWord: IVocabulary) => {
    const { lang } = newWord;
    const languageSupport = Object.values(ELanguages).includes(lang);
    if (!languageSupport) {
      return;
    }

    await addDoc(collection(db, dictionaryFireStore.collection), newWord);
    await fetchDictionaryFromFireStore();
  };

  return { fetchDictionary: fetchDictionaryFromFireStore, addNewWord };
};
