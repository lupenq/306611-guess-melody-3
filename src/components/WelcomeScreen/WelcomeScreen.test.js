import WelcomeScreen from "./WelcomeScreen";

it(`Render WelcomeScreen`, () => {
  const tree = renderer
  .create(<WelcomeScreen
    errorsCount={3}
    onWelcomeButtonClick={() => {}}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
