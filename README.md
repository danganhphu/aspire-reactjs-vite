## Prerequisites

1. **NET 9.0 SDK**: Install [.NET 9.0 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
2. **Node.js**: Install [Node.js and NPM](https://nodejs.org/en/).
3. **Yarn**: Install [Yarn](https://yarnpkg.com/getting-started/install).

> [!WARNING]
> Ensure that you have [Docker](https://www.docker.com/) or [Podman](https://podman.io/) running on your machine (if running services through these tools).

## Project Setup (ReactJs Vite)

1. **Clone the Repository**

    ```bash
    git clone https://github.com/danganhphu/aspire-reactjs-vite.git
    cd src/react-vite
    cp .env.example .env
    ```

2. **Install Dependencies**

    Run the following command to install the necessary dependencies:

    ```bash
    yarn install
    ```

3. **VSCode Extensions**: Install the following VSCode extensions (if using VSCode):

    - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

4. **Create VSCode Settings** (if using VSCode)

    If you are using VSCode, create a `.vscode` folder in the root of your project and add a `settings.json` file with the following content:

    ```bash
    mkdir -p .vscode
    echo '{
      "editor.formatOnPaste": true,
      "editor.formatOnSave": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit",
        "source.fixAll.format": "explicit"
      }
    }' > .vscode/settings.json
    ```

5. **Setup Husky (if applicable)**

    If you are using Husky for Git hooks, make sure to set it up:

    ```bash
    yarn prepare
    ```

### .husky/pre-commit

Create a file named pre-commit in the .husky directory with the following content:

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo '🏗️👷 Styling, testing and building your project before committing'

# Check ESLint Standards
yarn lint-staged ||
(
    echo '😤🏀👋😤 Get that weak shit out of here! 😤🏀👋😤
            ESLint Check Failed. Make the required changes listed above, add changes and try to commit again.'
    echo '🤡😂❌🤡 Failed Type check. 🤡😂❌🤡
            Are you seriously trying to write that? Make the changes required above.'
    false;
)

# If everything passes... Now we can commit
echo '🤔🤔🤔🤔... Alright.... Code looks good to me... Trying to build now. 🤔🤔🤔🤔'

# Uncomment the following code if you want to run a build before committing:
# yarn build ||
# (
#     echo '❌👷🔨❌ Better call Bob... Because your build failed ❌👷🔨❌
#            Next build failed: View the errors above to see why.
#     '
#     false;
# )

# If everything passes... Now we can commit
echo '✅✅✅✅ You win this time... I am committing this now. ✅✅✅✅'
```

## Additional Notes

-   Ensure that you have the Prettier and ESLint extensions installed and enabled in VSCode.
-   The settings provided will automatically format and lint your code on save and paste.

## Project References (React)
[React Vite](https://github.com/alan2207/bulletproof-react).

Happy coding!
