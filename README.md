## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Level Password Example

JustWarmingUp

## App Limitations 

Level 5 and 6 is not available. The application uses basic HTML instead of Canvas to render elements, so there are performance issues when rendering large maps. The game session is interrupted when the page is reloaded.

## Design

The design is based on standard Bootstrap components and custom Styled Components.


## Technologies

TypeScript + React + Redux + Bootstrap + React Scripts

## Remark

Web socket logic could be taken out of the Home page component (for example into a middleware). But in this simple situation, I didn't see that it makes sense.
