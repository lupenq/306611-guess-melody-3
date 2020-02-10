import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./WelcomeScreen.jsx";

it(`Render WelcomeScreen`, () => {
  const tree = renderer
  .create(<WelcomeScreen
    errorsCount={3}
    onWelcomeButtonClick={() => {}}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
