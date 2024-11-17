import React from 'react';

const DeveloperSetup = () => {
  return (
    <section>
      <h2>Developer Setup</h2>

      <h3>VSCode Setup</h3>
      <p>
        Install the following extensions for a smooth React development experience:
        <ul>
          <li>ESLint</li>
          <li>Prettier</li>
          <li>Bracket Pair Colorizer</li>
        </ul>
      </p>

      <h3>Terminal Setup</h3>
      <p>
        Use the integrated terminal in VSCode for easier management of your projects. Use common commands like `npm start`, `npm run build`, etc.
      </p>

      <h3>Preferred Editor Font</h3>
      <p>
        I use the "Fira Code" font for a cleaner code editing experience.
      </p>
    </section>
  );
};

export default DeveloperSetup;