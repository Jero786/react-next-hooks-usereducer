# React Next Hooks and Effects

Some description here.

### Prerequisites

`Node 9+`
`NPM 6+`

### Installing

```
$ npm install -g eslint now
$ npm install
$ npm install husky prettier-eslint //needed to install pre-commit locally
```

**NOTE**:
In case that use `nvm` you will need to set by default  Node+6 (eg: `nvm alias default v10.8.0`)

## Start application
```
$ npm run dev
```
## Running unit tests
```
$ npm run test
```
## Running unit tests in watch mode
```
$ npm run test:watch
```

## Some project conventions
### Files
Actions, Reducers, Apis, etc. Should be camel case.
```
actions/home/homeAction.js
reducer/reducer/home/homeReducer.js
api/cloud-api/cloudApi.js

```
React component should be pascal case.
```
components/side-bar/Sidebar.js
```
### Folders
To clear identify at import level, to Folder please use '-'.
```
components/my-component/...
components/my-action/...
```
### Imports inside files

In order to be super clear at first glance, it's convenient to distinguish between the following type of resources.

* Components
* Resources
* Libs
* Actions
* Effects

```
// Components
import Layout from 'components/Layout';

// Libs
import './index.scss';
import React from 'react';
import {fetchTopEntries} from 'actions/home/homeActions';
import {connect} from 'react-redux';
import {fromJS} from 'immutable';

// Actions
import {actionTypes} from 'actions/home/homeActions';

// Resources
const emptyState = fromJS({
	isRequested: false
});

// Effects
import {useScrollWindow} from 'effects/window';
```
## Git
### commit
It is useful to pre-name each commit with the branch which applied. In order then to easy track each change after the merging process ([BRANCH_NAME] - [COMMIT_MESSAGE]).
```
git ci -commit "master - initial commit"
```
### push
It is useful to work with Forks in order to make code reviews process much cleaner.

## License
This project is licensed under the MIT License
