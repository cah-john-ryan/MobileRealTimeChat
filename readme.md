# Overview
Through the course of this workshop you will be familiarized with how to build a mobile chat application in Ionic 2.

## How to follow this workshop
There are feature branches available in this repository.  To view them use the command `git branch -a`.  Each feature branch is accompanied by a "completed" feature branch to show how I completed the feature in this workshop for reference.  You can checkout any of these branches using the command `git checkout [branch-name]`.

### Technologies to be learned:

- Ionic 2
- Angular 2
- Firebase
- Git

### Pre-requisites:

1. Laptop
2. A mobile device that supports Android\iOS

To reduce the time needed for setup, please try to install the below software prior to attending this workshop.  Don’t worry if you run into any challenges with this effort, we will help with completing this setup once the workshop has started.

Laptop setup:

- An IDE that can work with Typescript and AngularJS:
  * If you don't have an IDE that manages this, just use Visual Studio Code: https://code.visualstudio.com/download
- Git: https://git-scm.com/
- Node.js: https://nodejs.org/en/ (for mac run: `brew install node`)
- Ionic 2: http://ionicframework.com/docs/v2/intro/installation/

Mobile device setup (app install):
- iOS: https://itunes.apple.com/us/app/ionic-view/id849930087?mt=8
- Android: https://play.google.com/store/apps/details?id=com.ionic.viewapp&hl=en

Account setup:
- GitHub: https://github.com/
- Ionic: http://ionicframework.com/

A list of helpful commands in case you are not very familiar with npm, ionic, or git:

| command                   |                                                                                                                                         |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| npm install               | Install's ALL package dependencies you need to get your app running. (it uses the package.json file to identify those dependencies)     |
| ionic serve               | This will compile\transpile your code and then spin up local web hosting so that you can debug in your browser at http://localhost:8100 |
| ionic upload              | This will push your compiled code to the Ionic View application on your phone                                                           |
| git branch                | This will list the branches you can switch to (including the 'vardan' branch which is your own.                                         |
| git checkout <branchName> | This will switch your codebase over to the branch you entered in the command.                                                           |
| git add -A                | (commit prep) This will stage all changes present for your upcoming commit.                                                             |
| git commit -m "<message>" | This will commit all changes you have staged to the branch you are on.                                                                  |
