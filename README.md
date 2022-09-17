## Installation

```bash
$ npm install lord-of-rings-sdk
```

Using yarn:

```bash
$ yarn add lord-of-rings-sdk
```

## Initialization

You need to provide your API key, which you can get on https://the-one-api.dev/

```ts
import LordOfRingsSDK from 'lord-of-rings-sdk';

const sdk = new LordOfRingsSDK({ apiKey: 'Your API key goes here' });
```

## Usage

Get  all books
```ts
const books = await sdk.getBooks();
```

Get top 3 longest movies
```ts
const movies = await sdk.getMovies({
  sortingOptions: {
    runtimeInMinutes: 'desc',
  },
  paginationOptions: {
    limit: 3,
  }
});
```
Get all characters whose name start with "A" (usage with RegExp)
```ts
const characters = await sdk.getCharacters({
  filterOptions: {
    name: {
      isIn: ['/^A/']
    }
  }
});
```

## Available Methods

#### sdk.getBooks(options?: BookGettingOptions)
#### sdk.getMovies(options?: MovieGettingOptions)
#### sdk.getCharacters(options?: CharacterGettingOptions)
#### sdk.getQuotes(options?: QuoteGettingOptions)
#### sdk.getChapters(options?: ChapterGettingOptions)
<br>

## Tests

If you want to run tests, clone the repository https://github.com/AndreyKarapetyan/Andrey_Karapetyan-SDK.git and run ```npm i``` and then ```npm test```. Make sure you have `API_KEY` environment variable in `.env` file.