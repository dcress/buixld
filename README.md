# Buixld
Repository for proof of concepts, prototypes and other web or UI/UX related development.

## Branching model:
Typically our branching model can be summarized as follows:

### master
	This branch has code which is stable and released to production. This branch is to keep track of released code.

### staging
	This branch has code which is ready to be tested. This branch keeps track of code which is ready to be released to test environment .

### dev
	This is where actual development happens. Pull requests should be issued against this branch .After a devcycle/ or a considerable amount of features are ready , then code from this branch will be merged to staging branch to test.

### feature branches
	This is where individual developers will work on their work items. These are going to be local to individual developers forks .And pull request is been made from this branch to central/upstream dev branch for code merges.


## Do’s and Don’t’s

Never, ever, do anything in master branch. The branch dev is the head of development, master is for stable releases!

Don’t develop on the dev branch. Always create a feature branch specific to the issue you’re working on. Name it by feature_[Issue#]. For example, if you’re working on CRM-91, your feature branch should be called feature_CRM-91. If you decide to work on another issue mid-stream, create a new branch for that issue–don’t work on both in one branch.

A single feature branch should represent changes related to a single issue. If you decide to work on another issue, create another feature branch from develop.


## Step by Step

1.Fork on GitHub (click Fork button)

2. Clone to computer
	$ git clone https://github.com/[you]/buixld.git


3. Navigate to directory
	$ cd buixld/

4. Set up remote upstream
	$ git remote add upstream https://github.com/buixld/buixld.git


5. Checkout dev branch
	$ git checkout dev


6. Start working on a new issue or feature
	$ git checkout -b feature_reptar
	$ git checkout -b bugfix_reptar

7. Develop on the feature.

8. Add files you want to commit
	$ git add changed/file
	$ git add -A
	$ git add .

9. Commit files
	.$ git commit -m "commit message"


10. Push branch to your fork on GitHub
	$ git push origin feature_reptar


Issue pull request for feature branch (Click Pull Request button)

When you are going to start on new implementation/ bug fix, please checkout/switch to dev branch, sync/update your dev/staging/master branch with upstream dev.

