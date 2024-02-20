# Movie Catalog

This web app uses the TMDB API to display a list of movies and their details. It also allows users to search for movies and add them to their favourites (stored in localStorage).

## Live demo

A live demo of the app is available at https://movie-catalog.kru.ge/.

### Main technologies used

- [Vite](https://vitejs.dev/) - Build tool
- [React](https://reactjs.org/) - Frontend library
- [React Router](https://reactrouter.com/) - Routing library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TanStack/react-query](https://react-query.tanstack.com/) - Data fetching and caching library
- [Axios](https://axios-http.com/) - HTTP client
- [Cloudflare CDN](https://www.cloudflare.com/cdn/) - DNS, CDN, caching
- [AWS S3](https://aws.amazon.com/s3/) - Hosting

## Running the app

To run the app, you will need to create a .env file in the root directory with the following content:

```
VITE_TMDB_BEARER_TOKEN=your_tmdb_bearer_token
```

You can get a TMDB bearer token by signing up for an account at https://www.themoviedb.org/signup and then creating an API key at https://www.themoviedb.org/settings/api.

To run the app, use the following commands:

```
npm install
npm run dev
```

The app will be available at http://localhost:3000.

## Building and deploying the app

To build the app, use the following command:

```
npm run build
```

This will create a dist directory with the built app.

To build and deploy the app, you can use the following command:

```
npm run deploy
```

This will create a dist directory with the built app and deploy the app to AWS S3. You will need to have the AWS CLI installed and configured with your credentials.
