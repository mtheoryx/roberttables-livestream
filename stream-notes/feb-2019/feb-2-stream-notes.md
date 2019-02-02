# Stream notes February 2, 2019

**Today's Thought**
You're only a leader if people want to follow you.

## Segments

- [x] Thursday streamdeck one button "run script" status
- [x] Friday Quokka stream thoughts
- [x] Raid over plans (tenatively Talk2MeGooseman)
- [x] Do a thing
- [ ] Retrospective, possible Q&A

## Things we learned

- Do test your container locally, you could have bad assumptions
- Testing your container locally is faster than waiting for cloud
- Keep variability to a minimum for debugging
- Do keep notes of things that are "convenience for now"
- We need to start iterating the live deploy on stream, so that means...
- DRP: Prime the stream with TF apply in dev env as part of stream prep
- I've made assumptions about Account, user, and role setup that I should address
- Also `awsume` usage has been largely an assumption on my part
- Its difficult to know what we will be doing on stream, currently

## Notes

- BraveCobra2 is experimenting with other parts of the Hashi toolchain
- We are missing documentation, git discipline, and promotions of project
- An issue for discussion will be added, and we can collaborate together to see the different ways that people would want info on todays topic to make a decision whether they watch live, VOD later, or pass on the topic entirely

## Goals

- [x] Repos ready
- [x] Compose-ready local
- [ ] JSON-server heathcheck and test
- [ ] ECS network, security groups, cluster, service, tasks defined
- [x] Environment-specific variables
- [ ] Build and push images based on git hash
- [ ] Take tags in as environment variables

## Next Steps

- Promote new tasks
- Dev/Prod scaling
- Conditional bastions
- JSON Server lock down methods
