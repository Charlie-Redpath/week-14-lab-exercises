# Week 14

CI and CD

## Project structure

- `insecure/` a nodejs project with insecure dependencies
- `mashup/` some messed up JS
- `unittesting/` some unit tested js

## Links

see [Github Actions, Getting started](https://docs.github.com/en/actions/quickstart)
## Your mission

- [x] Get CI to test for insecure modules
- [x] Get CI to detect messed up JS
- [x] Get CI to run unit testing
- Create a new project called `combined/` which outputs a
hello greeting depending on the language you pass in the url
    - [x] It must lint
    - [x] It must check for known security vulns in dependencies
    - [ ] It must run unit tests for new languages
- **Stretch goal** Deploy your application to AWS
    - [ ] Setup CI steps
    - [ ] Setup CD deployment using Cloudformation
    - [ ] Make a change and have it re-deploy
