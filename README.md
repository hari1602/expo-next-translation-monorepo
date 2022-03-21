# expo-next-translation-monorepo

Monorepo example on using expo-next-translation library and share across different platform (Next.js & Expo). Check out the library [here](https://github.com/hari1602/expo-next-translation) for more information.

Next.js is deployed in vercel for preview, [click here](https://expo-next-translation-monorepo.vercel.app/). Realized there will be no page reload.


Packages used:

- app
  
  - To share universal component & screens
  
- locale

  - translation files to be shared across projects
- next

  - Web project using Next.js
- expo

  - Mobile project using Expo

`Note: The current locale information will be stored in AsyncStorage for mobile to persist the language info.` 
