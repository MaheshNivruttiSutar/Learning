# javaScript Project
This is a javaScript project
MDN DOC : https://developer.mozilla.org/en-US/docs/Learn/JavaScript

## Run a test Case
Go to index.html file and add file name in SRC like this src = "script.js"

//Anothe method is : node 'file name'
exm: node counter.js

Pre-condition: Check you are in correct path




Commands :
1. git init : We are using this command to initializing empty git repository
2. git checkout -b "github" : Create a new branch (github) from master
3. ls -la : to see all files and directories, including hidden ones, in the current directory.
4. git add . :  Add all changed files to the staging area [git add --all | git add -A | git add .]
5. git commit -m "first commit" : commit changes
6. git log: to view the commit history of a repository
7. git status : displays the state of the working directory and the staging area
8. Restoring files :
        git restore . :
                      git restore --staged <file name> : to unstage the staged changes
                      git restore <file> : to discard changes in working directory
        git checkout . :
9. git rm -r --cached . : Clearing the cache
10. Deleting/Renaming file =
                Deleting : git rm <file name>    (Deleting file and also staging)
                Renaming : git mv <old file name> <new name>
11. git diff : shows difference before/after modifications
12. git log --oneline : just on one line together with a seven-digit SHA number and commit message.
13. Amending : (History changing)
            git commit --amend
            git commit --amend -m "New commit message"
            git commit --amend --no-edit
14. git reset :
                git reset HEAD~1 : undo the last local commit
                git reset --hard <commit-hash> : reset a branch (master) to a previous commit and discard all subsequent commits
                git reset HEAD <file1> <file2> : To unstage specific files that have been added to the index

15. Rebasing :
        git rebase <branch>/<commit> : allows you to rebase your current branch onto <branch> or <commit>
        git rebase --interactive <branch>/<commit> : starts an interactive rebase of your current branch onto the specified <branch> or <commit>. Interactive rebase allows you to edit, reorder, squash, and split commits interactively
        git rebase -i HEAD-# : starts an interactive rebase starting from the HEAD going back # commits
        git rebase -i --root : starts an interactive rebase going all the way back to the initial commit (root commit) of your repository
16. Branches :
        git branch : which lists the branches in your Git repository
        git switch -c NAME : is used to create a new branch named NAME and switch to it. (git checkout -b NAME)
17. Merging :
        git merge <branch> : is used in Git to integrate changes from <branch> into your current branch
18. Delete a branch :
                git branch --delete NAME
                # git branch -d NAME
                # git branch -D NAME
19. Stashing code :
                git stash : command is used to stash (or store) your current changes away
                # git stash list : command lists all stashes that you have saved
                # git stash apply : command applies (or reapplies) the most recent stash (stash@{0} by default) to your working directory
                        git stash apply stash@{1}
                # git stash pop : The git stash pop command is similar to git stash apply, but it also removes the most recent stash from the stash list after applying it
                        git stash pop stash@{1}
20. Git Clean :
        git clean : command is used to remove untracked files from the working directory of a Git repository
        git clean -n # dry run : The -n or --dry-run option shows which files would be removed by git clean without actually removing them
        git clean -d # directories : The -d option tells git clean to also remove untracked directories in addition to untracked files
        git clean -f # force : The -f or --force option is required to actually remove the untracked files and directories. Without this option, git clean will not remove anything; it only shows what would be removed.
21. Remotes :
        git remote add NAME URL : This command is used to add a new remote repository
        # git remote add remove URL : This command removes an existing remote repository from your Git configuration.
        # git remote OLDNAME NEWNAME : This command renames an existing remote repository.
        # git remote -v : This command lists all remote repositories associated with your Git project.
22. Git Push :
        git push REMOTE BRANCH : This command is used to push the specified branch (BRANCH) to a remote repository (REMOTE).
        # git push --set-upstream-to origin main : This command sets the upstream branch for the current local branch (main) to origin/main
        # git push -u origin main # --set-upstream : This command is used to push the local branch (main) to the remote repository (origin) and set it as the upstream branch.
        # git push --all : This command is used to push all branches to the remote repository.
        # git branch --set-upstream-to <origin/remote-branch> : This command sets the upstream branch for the current local branch to a specific remote branch (origin/remote-branch).