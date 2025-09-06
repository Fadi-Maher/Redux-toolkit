import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface LanguageState {
  lang: 'en' | 'ar';
  dir: 'ltr' | 'rtl';
}

const initialState: LanguageState = {
  lang: 'en',
  dir: 'ltr',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'en' | 'ar'>) => {
      state.lang = action.payload;
      state.dir = action.payload === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = state.dir;  
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;
