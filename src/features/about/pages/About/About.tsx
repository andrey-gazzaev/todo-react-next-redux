import { memo } from "react";
import Link from "next/link";

const AboutPageComponent = () => {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
      <Link href="/">Home</Link>
    </main>
  );
};

AboutPageComponent.displayName = "AboutPage";

/** About page component. This is a placeholder for the about page. */
export const AboutPage = memo(AboutPageComponent);