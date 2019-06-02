---
date: '2019-1-12'
category: 'Software'
description: ''
---

# Stream notes January 12, 2019

## Segments

- [x] Hello, from snowpocalypse
- [x] Stream updates, news
- [x] Octobox/Github review
- [x] Do the thing
- [x] Retro

## Things learned

- My headset sucks
- For some reason follow alerts from streamlabs kill mic (non-deterministicly)
- BE CAREFUL with deleting .gitignore when you think it's the .gitkeep file (we should switch to a different naming convention)
- VS Code terraform integration is still problematic for some strings
- Be patient with attribute suggestions such as `url` vs `repository_url` they are not that intuitive
- When defining tf outputs, `tf plan` will seem to have no changes. But there are changes that require a `tf apply`
- Pay attention to the AWS originating IAM account you sign into in the console, you may not have STS access into all the accounts you think you do, even though they show up on switch role drop down

## Goals

- [x] Workspace state buckets
- [x] ECR registry
- [ ] ECR access roles (for automation later)
- [ ] Docker pushes
- [ ] Test the pull access locally
- [ ] Workspace setup state buckets and variables
- [ ] Workspace start VPC buildout

## Next Steps

_TODO_
