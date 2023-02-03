---
title: "Definition of Done"
date: "2021-01-26T00:00:00.169Z"
description:
---

One of the most common challenges in any form of work is trying to define completeness. Technology value streams are no different.

Anyone who has spent any time creating something has had to spend their fair share of the time at the whetstone learning what can only be called a "sense of abandonment". There is always a better way to turn a phrase in an essay or novel. There is always a better  solo in the masterful opus being composed. There is most certainly, always a better way to code that module, class, function, etc.

A value stream is often categorized as a bidirectional or cyclical relationship between the producer of "the thing" and the consumer of "the thing".  

1. The consumer states what is needed 
1. The producer creates the thing, based on their interpretation of the consumer's statements
1. The consumer states what is needed (which may include feedback on the the producer's output).
1. And so on...

### What is done?

The first step in defining done is to be specific enough about what the expected end result is in order to differentiate it from other outputs as well as to ensure that there is a point we can "break" the aforementioned cycle to measure.


We also have to take care to ensure that this specificity isn't overdone. Injecting structure into organizations, teams can be counterproductive when it becomes a barrier to achieving goals or it introduces a degree of overhead that isn't directly related to the work being done. Elimination or practical reduction of wastage in terms of efforts spent producing value is one of the primary tenets of DevOps.


We might call this functional specification, acceptance criteria, requirements, etc. The important aspect is that we have one or more statements that can be measured that describes a goal. 

### From goals to actions

This is domain specific, and it depends on the level of decomposition necessary to convert a consumer's request or need into an actionable list of functionality or units of work.


In extremely simple (and probably impractical) use cases, a customer ask might be as simple as a single function. On the other hand, a single customer request could encompass multiple epics, divided into stories across a dozen engineering teams.


"Done"ness becomes interesting in this case, because we're more than likely going to end up with a whole bunch of little "done"s that are assembled through various layers of medium-sized "done"s further assembled to the great big "done".


In fact, the process of decomposition has to be "done" before code can begin.


Done has the potential for both temporal and hierarchical dimensions that have to be taken into account.


Taking consumer specifications might be coming from an external customer through a UX team through a product management organization and handed off to architects and/or engineering leadership. Once the requirements get into the gooey inside of a company, they tend to bounce around a bit. Engineering and product management at various levels will break down requirements into work until they are "story"able things that can be dumped into productivity software so that software developers can let their fingers do the walking.


In each case there is a state of "I'm done right now, with this task". I'm deliberately hand waving over a few concepts that become easier to understand in the next section.

### Do the thing

When a developer writes code, at some point that code is going to need to be checked in to a build branch. It's customary for some form of inspection to occur before that is allowed. In fact, there are usually a combination of a great many ways to accomplish this: peer reviews, SCA tooling, security scans, gated commit, code coverage gates for unit tests, et al. Ultimately an organization has an internal standard that defines what code is allowed to be built on a production facing branch. If the code checks all of the boxes, then the code is merged and the developer is done...for now. 

### Build and Release

One of the early nomenclatures for CI/CD pipeline was a Build and Pull or Push and Pull. I've always liked this, because it is centered around the state of the software artifact. After coding, we compile, run unit tests and confirm that the code is functionally sound. This is "installable" or "runnable" software.


In terms of "done"ness, this covers the bottom portions of a good test pyramid. After the artifact has been built, it enters the deployment or delivery phase. This was called a "pull system", because deployment automation would "pull" the artifact from the repository to perform quality attribute testing (aka NFR/Non-Functional Requirements), smoke testing, any advanced hands-on testing, beta environments and eventually on to a customer facing environment.


In terms of doneness, software artifacts aren't always going directly to customers. In some cases they are going to other internal consumers as services or libraries that will be further extended or used to be re-assembled into that 'great big "done"' we mentioned.


Internal requirements tend to happen at lower resolutions in terms of decompositional hierarchy. These tend to be functional requirements that are measured by successful integration between services. These are some of the mid-level dones. 

### The Agreement

One of the most powerful attributes of the concept of "done" in a value stream is that the output/feedback cycle is compositional. Each output is verified and validated by the next phase of temporal "done"ness. This builds "course correction" into the software development lifecycle at all levels of the decomposition hierarchy, as well as all of the various phases from requirements and specification to the very second before we hand it off to the customer.


Each hand off from one phase to the next creates a contract between producer and consumer about the state of the work traversing that handoff.


When we bind the definition of done to the natural flow of decomposition, we are also tying it in a cohesive way to the business philosophy and organization. In some cases, it becomes a symbiotic relationship. While missing a requirement or decompositional step is far more likely to be the result of human error that is easily corrected, the more dangerous misses are those that are hidden because there is no one assigned to perceive it.


In these cases, a "done"ness blind spot may represent a chasm in the organizational or procedural structure that is more challenging to resolve when it has gone unseen for a long period of time. The consequences are often one of many business challenges associated with failing to keep pace with the natural entropy of technology and innovation.


In terms of accomplishing "done"ness, by defining a relationship specific agreement between the role of the producer and the role of the consumer, we enable quality and success via the properties of good, simple individual contributions: good communication (listening and speaking), delegation, accountability, and a drive to solve for the consumer of our work, rather than the completion of a task.


With that said, I'm done. For now :)