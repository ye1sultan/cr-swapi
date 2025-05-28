# cr-swapi

A simple Star Wars API (SWAPI) client built with modern web tools. Pulls data from [https://swapi.dev](https://swapi.dev) and displays it cleanly.

- [https://swapi.dev](https://swapi.dev) - may not be available in some browsers due to expired certificates.
- [https://swapi.tech](https://swapi.tech) - does not have the necessary fields as specified in the requirements, including gender filtering.
- Neither of these APIs provide images, so images had to be manually imported and rendered.
- Filtering by gender is impossible because API does not provide it.

##

Follow these steps to get the project up and running locally.

### 1. Clone the repository

```bash
git clone https://github.com/ye1sultan/cr-swapi.git
cd cr-swapi

npm i
npm run dev
```
