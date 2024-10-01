# hequs
Project Hequs (Hybrid Application)

Welcome to the Hequs project! This document will guide you through the steps to retrieve the project and set up your development environment.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 18.17 or higher)
- [npm](https://www.npmjs.com/) (included with Node.js)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (installed globally)
- [Git](https://git-scm.com/) (for version control)

## Cloning the Project

1. Open your terminal.
2. Clone the repository using the following command (replace `<REPO_URL>` with your repository URL):
   ```bash
   git clone <REPO_URL>
   ```
3. Navigate to the project directory:
   ```bash
   cd Hequs
   ```

## Installing Dependencies

Once inside the project directory, run the following command to install the necessary dependencies:

```bash
npm install
```

## Setting Up the Environment

### 1. Starting the Development Server

To start the development server and open the app, use the following command:

```bash
npx expo start
```

### 2. Using an Android Emulator

To run the app on an Android emulator, make sure you have set up an Android emulator using Android Studio. Then, use the command:

```bash
npx expo run:android
```

## Publishing Updates

To publish updates to the app, use the following command:

```bash
npx eas update
```

Make sure you have configured your environment with EAS (Expo Application Services).

## Contributing

If you wish to contribute to this project, feel free to open issues or submit pull requests.

## Help

If you have any questions or need assistance, please contact the development team.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
