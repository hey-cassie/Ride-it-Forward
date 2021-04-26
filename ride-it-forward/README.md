# RideItForward (like pay it forward)
Have you ever wondered how much you save on fuel while commuting by bicycle? This handy app does the calculations for you and allows users to donate all or a portion of those savings to local nonprofits that advocate for cycling safety/safer streets. As a bike rider who has commuted to work for years, I know how fun and rewarding it can be. I also know that one bonus of bike commuting is the fuel savings. Likewise, I have worked in the nonprofit sector and know how hard it is to find funding that helps create and maintain safer streets. Ride it Forward is meant to celebrate active transportation, and good health through biking, while connecting riders with local bike advocacy organizations.

**Please note: this project is a work in progress! Next steps include: finding a reliable real-time fuel price API to use to calculate more accurate savings, creating a search engine that allows users to search for nonprofits, and more!

*Also! This app requires an user id & access token to connect with the Strava API v3. If you have a Strava account, please visit `https://www.strava.com/settings/api` to retrieve your token. Your user id is located in the url address of your profile page. Once retrieved, copy & paste token into the athlete.service.ts file (lines 16 & 25). Likewise, paste your id in the same file on line 23 and `run ng` serve to view your stats and fuel savings! 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

MIT License

Copyright (c) [2021] [Cassie Jones]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.