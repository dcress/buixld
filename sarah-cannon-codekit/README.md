
## Documentation


// Use <code>.section-padding</code> to space top and bottom of content areas.
```` html
	<!-- Main content -->
    <section class="content-main section-padding">
````

// Add space to the bottom of an element 
```` html
	 <img class="bottom-space" src="img/home-news-trio-1.jpg" alt="News Story 1"/>
	<p class="bottom-space">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
````






# Sarah Cannon build with CodeKit

## About
Using [CodeKit](https://incident57.com/codekit/) to precompile [LESS](http://lesscss.org/), concatenate and minify files and handle other front-end processes.

## Resource / Comp
[Desktop](https://projects.invisionapp.com/share/7R1M9GG32#/screens/45346713?maintainScrollPosition=false)
[Mobile](https://projects.invisionapp.com/share/3P1NKIHZA#/screens)

## Priorities
1. Home
2. Story
3. Cancer Type
4. iNavigate

## Development

### Libraries used
- Bootstrap 3
- jQuery

### Plugins used
- Animate css
- Flexslider
- Wow js
- Stellar js

### Git workflow
#### Initial clone of repo
- cd /user/wherer-you-want/
- git clone https://github.com/hcawebdevelopment/sarah-cannon-codekit.git

#### Develop on local instance on master

#### Commit to local instance
- git status          # View the state of the repo
- git add <some-file> # Stage a file
- git commit          # Commit a file</some-file>

#### After staging your commits, pull latest code
- git pull --rebase origin master

#### Resolve conflicts (if applicable)
- fix changes in code
- git rebase --continue
- git push origin master

#### Push features to master
- git push origin master

## Setup
Download [CodeKit](https://incident57.com/codekit/). Clone repo from GitHub. Make a development branch named 'yourname-dev'. Once you have it set up locally you can then drag the project folder into CodeKit. The <code>codekit.config</code> should have all the process paths set, but if it fails for some reason, make sure your compile paths are accurate. You can use CodeKit's live refresh server by presses 'preview' in the top right corner of the interface.

After setting up codekit you can begin development. Contribute to master through you dev-branch and we will merge files.
