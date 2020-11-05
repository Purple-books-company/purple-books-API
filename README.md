# Purple Books API

## TODO

- Enable Logging
- Error Handling
- Routes
- Decide on Database
- Use Docker for testing

## Running the API

- Clone this repository in a folder of your choice. (use ssh if you want)

  ```bash
  git clone https://github.com/Purple-books-company/purple-books-API.git
  ```

- Move into the project folder

  ```bash
  cd purple-books-API
  ```

- Create `.env` file in the root of the project.

- Install App Dependencies

  ```bash
  npm ci
  ```

- Start the App.
  
  - with Nodemon

    `npm run dev`

  - without Nodemon

    `npm start`

## How to Contribute

- Make sure you are on master branch.

  ```bash
  git checkout master
  ```

- Fetch the latest commits

  ```bash
  git fetch origin
  ```

- Reset Local repo to match the Origin repo

  ```bash
  git reset --hard origin/master
  ```

- Make a new feature branch. (you cannot directly push to master branch)

  ```bash
  git checkout -b <your-name>/<feature-name>
  ```

  > Example

  ```bash
  git checkout -b mugilan/login
  ```

- Make and Commit the changes

  ```bash
  git status
  git add <file-name>
  git commit -m "<some-meaningfull-commit-message>"
  ```

- Push the changes to remote to make a Pull Request(PR).

  ```bash
  git push -u <your-name>/<feature-name>
  ```

- Make a Pull Request(PR) in github and wait for approval.

- Delete Local Branches after successfull PR approval. (optional)

  ```bash
  git branch -d <your-name>/<feature-name>
  ```

- Sync with the remote branches by pruning deleted remote branches

  ```bash
  git fetch -p
  ```
