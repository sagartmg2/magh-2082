Per project Initial one time setup

1. git init
2. git remote add origin <github-url>
   eg: git remote add origin https://github.com/sagartmg2/magh-2082
3. (optional) to check step number 2
   git remote -v

daily usage

1. git status (optional)
2. git add . // adds every file or commit
   or git add <file-path> // for individual files
3. git commit -m "feature message"
4. git push origin <branch>
   eg: git push origin master

git file status
U - untracked files / new files
A - git added // files in track
M - modified

// branches
- create new branch 
    git checkout -b <new-branch-name>
    eg: git checkout -b  navbar

- check current branch (optional)
    git branch

- switch between branches
    git checkout master
    or 
    git checkout navbar

// merge request | pull request 


// merge conflict


# cloning
git clone <git-url>
eg: git clone https://github.com/sagartmg2/magh-2082


// Opensource Fork,PR,
