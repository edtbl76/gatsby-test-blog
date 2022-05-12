---
title: "Lightweight ADR: Architecture Decision Records"
date: "2022-05-12T00:00:00.169Z"
description: "The reasons for architectural decisions often become more important over time, because the details of new 
problems take residence in our brains where those old decisions used to live."
---

There are a number of great resources about ADRs that I'll refer to at the end of the article. 
There are fantastic definitions in those resources, so I'm not going to provide that here. Instead, I'd like to 
discuss the why we use them, and how to construct them in a manner that they'll be used effectively by others.

ADRs are very much the "directional signal" of the software architecture world. Just as you turn on the blinkers in your
car, truck, motorcycles, etc. to signal to those coming behind you, and ADR helps provide signal to architects, engineers, 
product experts and so on. As it so happens, that person might even be you. A lucid decision you make today may very well
become a frustrating exercise in failed memory recall a year from now.... and that's why we write ADRs. 

Good documentation practices are hard to come by. Sentiments in many books, blogs, etc. tend to push the court of public 
opinion to the extremes:

    No documentation at all vs. Tomes of Confluence pages.

### No Documentation

A complete lack of documentation is not going to help anyone. A codebase is descriptive of the solution to a point. 
However, it doesn't provide an easy-to-read-and-consume-for-humans approach to describing distributed systems, web
architecture, and the relationship between business domain and the technological solution being married to it. 

### Lots and Lots of Confluence Pages

Here we represent the opposite end of the spectrum. This usually starts with the best of intentions. A Tech Lead, manager,
director, etc. tries to create a lean page. Then a manager wants to create a page just for their team, and an architect
doesn't like the format, so they create their own page, and so on. Leaders come and go, new content is created in lieu
of a curation process for old content (which becomes stale.)

New hires read through the documentation and note that there is conflicting information, and it becomes a concerted, 
expensive, effort to determine what is accurate and what isn't. 


    NOTE: Sometimes, we'll simply look for the newest resource and 
            discard the old. I've worked in an client enviornment 
            where a team  had forked an existing project (and it's 
            confluence pages) only to later abandon that fork. 
            None of the original content had been updated, so the 
            latest documentation was actually less relevant.

    
**Lesson Learned**: Humans apparently don't support [Generation Clocks](https://martinfowler.com/articles/patterns-of-distributed-systems/generation.html) 

---

### From What to Why?

So what works best? Human beings tend to operate on the path of least resistance. On the volume slider of documentation,
we are likely to find harmony somewhere near "No Documentation" represented as "as little as possible"

They say that pictures are worth a thousand words, so it doesn't take much effort to provide the value of component
diagrams. With minimal augmentation, and [judicious labeling](https://c4model.com/), pictures provide a lot of the heavy
lifting with respect to communicating the overall high level design of a distributed system's architecture, with a 
reasonable amount of detail. 

Sequence diagrams, animations, or even numbered component diagrams help augment the view of a system at rest with salient
temporal decorations that allow us to better understand the system over time. 

This answers two high level questions:
1. What does it look like?
2. What does it do? 

It fails to answer a far more important question: _Why does it do it?_

This is where ADRs strut their stuff. 


### How much Why is enough? 

If you are a parent, then you are more than likely aware of the "flow control defect" in children: 

    while (true) {
        if (age > 6)
            break
        ask("Why?")
    }


ADRs don't have to answer every possible why. 
- Why did you choose AWS? 
- Why did you choose Java? 
- Why did you use tabs rather than spaces? 

These types of questions are probably not directly related to a solution. Better examples might be why we selected a 
specific managed service over a non-managed service, or between two managed services, etc. Perhaps we'll document an
ADR for why we selected a specific microservices framework over another? (i.e. [Micronaut](https://micronaut.io/) vs. 
[Spring](https://spring.io/)). 

When do we decide that a decision rises to the level of requiring an ADR? The annoying architect answer I like to give is
"it depends". (It does!)

###### Are you likely to forget the decision? 
If this is a new space for you (business domain, technical competency) it's likely that you are going to forget most
of the decisions, because you don't have the grasp on what represents an "industry"-specific measure of intuition. You're
more likely to over-document the design in this case.

Maybe you are a .Net person moving into a Java ecosystem. Maybe you're a 15 year veteran of robotics or embedded systems
making a jump into distributed systems. There are plenty of valid reasons why a decision isn't intuitive, and it isn't
always a negative form of ignorance. 

Some decisions, in certain circumstances, given appropriate exposure and experience, are just a slam dunk. It does happen. 
These don't need an ADR. However, if you learn how to write them w/ brevity, it still won't hurt to write one. 

###### Is your entire team likely to forget the decision?
I don't believe in designing in a vacuum. Software Architecture requires collaboration, herding ideas and feedback, as 
well as the multi-dimensionality that comes from product professionals, business analysts and various pedigrees of
technologists. 

Get another pair of eyes. Bathe in feedback. 

This helps qualify the first question. If you are new to the space, and you have a sufficiently sized team, you're 
likely to build intuition by proxy. 

**IF** you have a sufficiently sized team. You might not. Maybe it's just you. 

###### Can you engage the greater community? 
Unless you are working for something incredibly secret and bleeding edge, the odds are that you are working with highly
public and scrutinized design patterns. If you are careful to remove branding, naming and any critical data to 
design documentation, you can often leverage peers in the community for opinions.

###### What about the problem you're trying to solve?
We can write books on this. 
[Here's a great example of one!](https://www.amazon.com/Software-Architecture-Trade-Off-Distributed-Architectures/dp/1492086894). 
What are the constraints of the problem? What are the architectural characteristics that are important to ensuring that 
the delivery of the solution meets to needs of the client or customer? What are the additional side effects of prioritizing
those characteristics over others? (i.e. consistency vs. availability or security vs. speed). What constraints have hard
limits vs. suggestive ones. (i.e. SLA vs. SLO).

Sometimes, the entire purpose of documentation is to create an auditable record that something happened. ADRs solve this
too. 


---

This gist is that there is no absolute guidance anyone can provide as to whether or not a decision is going to be 
forgotten, or how necessary it is to document it.

Unfortunately, balancing acts to answer these questions often take a lot of time and effort, which leads to a CYA 
approach to creating documentation. Our "path of least resistance" approach can be nudged towards the other end of
the spectrum, which is effectively the non-code version of a Big Ball of Mud: too much documentation. 

I'm actually a fan of erring on the side of caution, as long as the cost of doing so isn't so disruptive that it becomes
subtractive to our primary goals and efforts. 

This leads us to ...

### Creating an Effective ADR. 

If you've never written an ADR, stop reading and check out the links at the bottom of the article. If you have, 
please continue. 

What you see here is my opinion. It isn't always the best way to accomplish things. It's not built only from my experience, 
but rather the advice of many colleagues smarter than I, and reading an exorbitant amount of literature on the subject
from non-colleagues who are much smarter than I. 

#### 1. An ADR has three goals.

Every ADR I've written has had three primary sections. 
1. Problem Statement
2. An **opinionated** explanation of the solution to the problem.
3. A brief explanation of the any side effects or risks introduced by this solution, and how they'll be mitigated. 

#### The Problem Statement

This should be a leanly written description of what we're trying to solve, and what the value of solving it is. Why are
we doing this? Who is asking for it? Is it a dependency of some other work? What are the consequences of not solving it?

This particular question should be the easiest one to write. If you can't write this section from memory, there is a 
good chance that you don't understand the problem as well as you probably should. (This isn't always the case, but 
it's definitely a standard I've set for myself when I write an ADR.) If I can't describe the problem with fluency, how
confidently can I talk about solving it? 

#### The Solution

When coaching others, this is one of the section I often find to be misunderstood. The most common challenge I see is 
that the section describes what **can** be done rather than what **you** are planning to do. It must be an opinionated
answer to a question. 

Before I write this section, I like to rephrase the first section in the form of a high-level question. For instance, 
let's assume that our problem is that we need to implement a distributed locking mechanism to manage a quorum for a 
proprietary distributed data store . I'll often write this question on a sticky (virtual or real) and make sure it is 
plain view as I research, prototype and noodle. I keep that sticky visible until iteration begins. (Well after 
the approval of the ADR.) 

Continuing from the prior example, it might look like this:

    How am I going to design (or select) a distributed locking system 
    to manage the quorum for the distributed data store we are 
    building? 

The focus of this section is to answer that question. This is a segue into another issue I find in ADRs. The solution
section often turns into a software review. We don't need to describe additional features, bells and whistles of
technology choices unless there is some value to do so. (This also means referencing unrelated ADRs. If we are going to
reference another ADR, there should be a direct relationship between that ADR and the problem statement of this ADR.)

Referencing ADRs based on correlative elements (same tech choice or pattern) must be done very carefully. We don't
want to imply or otherwise accidentally create the perception of a dependency when one does not exist. Generally, most
indirect references are made as a means of communicating a concept that exists elsewhere within an organization or
architecture. This can be useful in large organizations, for communicating complex designs, and especially getting over 
the hump of any internal compliance or regulatory requirements associated with decisions that require approvals of some
nature. If I want to make this kind of association, I usually create a footnote at the end of the ADR, isolated
away from the business/technology contexts of the record. I also augment the association with substantial verbiage 
about why I'm making the association.

##### To Compare or not to Compare...

A fairly polarizing aspect of this section is whether or not to compare your solution with industry alternatives. I 
think this is a valid approach as long as you can do so without falling back into the "software review" anti-pattern. 
It's very easy to accidentally start comparing two technologies feature for feature. I find that less is more. A quick
sentence about looking at alternatives, followed by one or two statements about why we made the decision is usually 
sufficient. 

When you are doing any research or A/B comparisons, it's worth keeping that information. (I usually keep it with the ADR, 
so I can easily reference it if there are further questions.)

Another challenge with comparisons is that inquisitive stakeholders might be familiar with the technologies or 
do their own due diligence with a different outcome than your opinion. This isn't always necessarily a bad thing. They 
might be right! (This goes back to what I mentioned with regard to knowing the problem...)


##### To Diagram or not to Diagram. 

Ideally, you shouldn't have to create a new diagram from scratch, because something will already exist. However, 
ADRs tend to "zoom in" a bit into the detail of an architecture, which might be closer to the actual implementation
than much of the existing documents. 

That said, we should hopefully be able to leverage or reference existing documents. Use your best judgement. The
purpose of the ADR is to communicate a design decision. If a diagram is going to make that easier, then make one. 
Just remember that there are only 8 hours in a day. I can't think of a scenario that would warrant the need to create 
an entire set of new architectural documents for a single decision. 

#### Side Effects and Consequences

This section should not be a list of every possible thing that can go wrong. The easiest example would be choosing an
AP vs. CP system. Availability vs. consistency is one of the most well known tradeoffs in software. This is the operative
word: **tradeoff**.

In the process of solving the problem, we had to evaluate tradeoffs. Prior to describing an effective ADR, I suggested
that some decisions are a slam dunk. The easiest decisions are the ones where the requirements of the problem you are
solving fall clearly on one side of a tradeoff spectrum. They fall in such a way that we consider them intuitive. If
these are the only tradeoffs being evaluated, in most cases, we probably won't create an ADR unless there is a need
for the paper trail. However, the benefit of it being so obvious is that the content can reflect this. It results in 
a very brief ADR. 

Beyond the "easy tradeoffs", there are the hard tradeoffs. (Now my book recommendation makes more sense!) These are the
tradeoffs that warrant explaining. In some cases, the risk is low, but we still need to document it in order to 
explain the nature of the tradeoff and why the risk is low. This may be a case where the specific downsides of the tradeoff
are less important than the upside, or the specific impact doesn't fall into a range that has a negative impact on the 
system we are designing. 

In other cases, the risk might not be low, and the tradeoff not only has an impact, but that impact presents another 
problem that must be accounted for. This might mean another ADR! 

One of the most gracious compliments I hear delivered by stakeholders is the "thoughtfulness" of a design. I believe
this is the section that provides that thoughtfulness. The first two sections are somewhat mechanical in nature. 
Discussing consequences and solutions for them is a conduit for building confidence and trust. Here, we are answering 
the "what-ifs" that represent worry and concern. We might not address all of those questions, however providing 
a proactive consideration delivers conviction towards the provision of safe solutions. 

---

##### Final Thoughts

ADRs should be as long as the need to be. It should include as much content as is required to clearly communicate the
three goals outlined above. (There are a number of variations included in the links I've provided. I've used a number
of different styles, and I've had the least worst experiences keeping it simple)

Remember that the audience for ADRs aren't just stakeholders in the present. The audience is future architects, engineers,
and so on. It's very much an architectural time capsule. Speaking of time, we often have less of it than we'd like to
get things done. As a result, brevity is appreciated. The longer an ADR is, the more likely that it's going to be 
scanned rather than read. If that happens, then understanding will run the risk of being fragmented. This defeats the
entire purpose of the ADR. 

Keep it simple. Less is more. Never go it alone. 

You put in a lot of effort to create the systems you deliver. One of the major steps in preserving the integrity of
those decisions and efforts is to track them. 

---


**ADR Resources**

- [ADR Github](https://adr.github.io/)
- [Nat Pryce's ADR Tools](https://github.com/npryce/adr-tools)
- [ThoughWorks Tech Radar](https://www.thoughtworks.com/de-de/radar/techniques/lightweight-architecture-decision-records)
