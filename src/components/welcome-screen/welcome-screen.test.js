import WelcomeScreen from "./welcome-screen";

it(`Render WelcomeScreen`, () => {
  const tree = renderer
  .create(<WelcomeScreen
    errorsCount={3}
    onWelcomeButtonClick={() => {}}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
