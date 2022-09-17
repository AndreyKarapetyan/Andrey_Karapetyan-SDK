## Overview

Author: Andrey Karapetyan

The problem is to create an SDK for "The Lord of the Rings". API that is used is https://the-one-api.dev/.

## Solution

We need a class `LordOfRingsSDK` that has the necessary methods to get all data from the API. After requesting all endpoints, we see that the returned data schemas are consistent. Based on that, we create interfaces for each domain (`Book`, `Movie`, `Character`, `Quote`, `Chapter`). The API allows us to filter, sort, and paginate data; the info must be in the URL. For the easiness of usage, we create a special function `convertOptionsToURLString` that converts objects with appropriate filtration, sorting, and pagination based on each domain to a URL string. Although each domain has different fields, the base interface is the same, which easies the implementation of the special function.  Finally, though there are many endpoints in the API, the five methods of the class (`getBooks`, `getMovies`, `getCharacters`, `getQuotes`, `getChapters`) are enough to get any information. For example, if we want to get a book by id, instead of using the available endpoint, we can just filter by id: `sdk.getBooks({ filterOptions: { _id: { isIn: ['some id'] } } })`.