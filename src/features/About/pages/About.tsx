import { memo } from "react";

const AboutPageComponent = () => {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
};

export const AboutPage = memo(AboutPageComponent);