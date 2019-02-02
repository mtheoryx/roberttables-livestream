# Stream notes January 22, 2019

## Segments

- [x] Hello
- [x] Stream review
- [x] Stream updates
- [x] Issues review
- [x] Do the thing
- [x] Retrospective

## Things we learned

- Be careful about spaces in comma-delimited lists of variables
- Be careful between underscores (\_) and hyphens (-) in provider methods
- Be aware of your available AMIs per region
- To find AMIs run `aws ec2 describe-images --owners amazon --filters 'Name=name,Values=amzn2-ami-hvm-2.0.????????-x86_64-gp2' 'Name=state,Values=available' --output json | jq -r '.Images | sort_by(.CreationDate) | last(.[]).ImageId'`
- Amazon Linux 2 DOES have vim (and other utilities) but not Git

## Goals

- [x] Spin it all up so far
- [x] Look at the tf state file
- [x] Create a bastion and log into it

## Next Steps

- Build and push docker images
- Make a docker install in the private subnet
- Make an ALB for routing
- Docker compose up on the private subnet
- Move from that to ECS
