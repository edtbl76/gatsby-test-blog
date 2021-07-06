---
title: "Accidental Complexity"
date: "2021-07-05T00:00:00.169Z"
description: "Keep it simple, Stupid."
---


Most modern software applications have no shortage of complexity. As components are split from each other to take 
advantage of distributed architectures, we find that the scope of uncertainty and possibility increases by orders of 
magnitude. 

This is exacerbated by the need to drive distributed architectures in order to achieve extreme scale to meet the 
demands of a vague storied requirement: "information at our fingertips in the blink of an eye".

In order to support the Mercurian (Fred that is.) demands of "we want it all, we want it now", the specialization of 
characteristics necessitated by architectural components becomes more heterogeneous. Evolutionarily speaking, the 
distribution of components only grows through the adolescence of technological innovation, and with it grows the 
complexity.

There are two types of complexity:
- Necessary Complexity
- Accidental Complexity

### Necessary Complexity

Necessary complexity is the minimal complexity required to solve the problem that has been presented. For instance, 
if I'm going to sort elements within a collection, I have to evaluate every element in the collection. In terms of 
time complexity, I can never have a solution that is "less" than O(N).

This particular example is fairly black and white. However, practically speaking, there are many problem domains 
that aren't as easy to evaluate. There are circumstances like the Traveling Salesman, or the Three Generals problem 
where either the inputs are too great to calculate, or there are Byzantine circumstances, et al. In addition to the 
problem itself, perhaps there are requirements concerning how the problem is solved. For instance, there may be a 
need to have sufficient parallelism, such that algorithms that might provide optimal performance in a 
single-threaded solution wouldn't be as viable. 

Let's try to clarify the definition of necessary complexity in light of the weeds I've just mentioned. 

Implementation details are rarely specified by architects unless they are a critical aspect of the architecture. If 
I'm designing an eCommerce site, the implementation details of searching through content is more than likely going 
to be left to the development teams. However, If I'm designing a search engine, I'm probably going to be more 
involved in the search algorithms and implementation. This means that complexity is driven by practical necessity. 
We don't need to labor over comparing every possible algorithm if we know that certain industry standards satisfy 
both the reasonable requirements of non-critical characteristics, as well as meet the demands dictated by the 
critical ones. 

It is extremely rare that we will need to challenge the performance or attributes of existing algorithms. For the 
most part, software algorithms have reached a stage of maturity, such that optimization creeps forward at an 
incredibly slow pace. For now, most performance gains come from the physical components driven by software instructions,
as opposed to the algorithms themselves. 

Despite what might be seen as a limitiation, there are advantages to this maturity. As algorithms become more stable,
they become communication devices. These algorithms, data structures and patterns are easier to study and understand.
This allows the architecture of software to be disseminated in an effective way within and across engineering 
organizations. This approaches a collective comprehensiveness to understanding, which baselines the simplicity of 
the architectural solution.


All else being equal, necessary complexity is the minimum amount of complexity required to solve the problem based 
on the available technology and resources at the time the problem needs to be addressed, while 
allowing the overall design and architecture to be understood by those who will implement it. 

### Accidental Complexity

Accidental complexity is noise. It is every aspect of the solution that makes it harder to understand, implement, 
delivery or otherwise coalesce with the original intent. 

Ideally, every dollar spent and minute dedicated to the end goal would be constrained to solving the problem at hand.
Unfortunately, this is impossible. 

In order to validate that the solution is going to address the problem, we have to create tests. We have unit tests 
to ensure that the code actually works. We have acceptance tests that ensure that we are bound to acceptance criteria. 

Over the years, new paradigms have emerged to simplify testing. Behavior Driven Development (BDD) simplifies the 
syntax of acceptance tests so that the tests are constructed in language semantics similar to business 
requirements. Monitor Driven Development (MDD) provides a mechanism to continuously test a solution to ensure that it 
holistically and continuously fulfills the desired end goal. This provides temporal and aggregate dimensions to 
validation. 

Beyond testing, there are administrative and support factors such as monitoring, logging, admin access, et al. There 
are the stages and tools involved with release, delivery and/or deployment of the software. There are even the 
evolutionary fitness functions used to ensure that development adheres to architectural constraints and guidelines.

Entire frameworks have been written to support the simplified paradigms. Much of the DevOps cultural phenomenon is 
focused on providing tools and augmentations that help reduce the noise generated by accidental complexity. 

One might argue that accidental complexity, in totality, is unavoidable. "What does it matter where the logic exists 
to support my solution?"

It matters in terms of abstraction. Referring back to the nature of growing complexity as systems become more 
distributed, we have mechanisms to abate the complexity in the design of the software itself. API-driven development 
ensures that each module, service, or bounded context is encapsulated in a manner that external consumers interact 
only with the nouns and verbs of the API. They only need to be concerned with the "what". The "how" is the 
responsibility of the curators of the service abstracted by the API. 

APIs provide a considerable amount of simplicity by hiding the unruly details. As a consumer of an API, this allows 
me to budget my focus in greater degree to the problem I'm trying to solve. I'll spend less time context-switching 
to alien component implemention, which means I will spend less overall time delivering my piece of the overall 
solution. This improves my own productivity, decreases the time to deliver, inversely increasing the velocity of the 
release cycle. Coincident to the economy of time is the associative decrease in cost. 

Abstraction, as a function of work and day-to-day operations, consolidates the cost of delivering product to the 
hands of customers. 

Most of this is pretty intuitive. While there are thousands of pages in the form of books, articles and blogs 
written in support of these ideas, one can come to the same conclusion with a cursory understanding of software 
development life cycles, business and money management. 

Unfortunately, it is far more common to see companies negatively impacted by accidental complexity than to see them 
flourish with lean processes. In my own experience, failure to right the ship comes from a healthy amount of 
ignorance and resistance to change. This is often driven by momentum. 

    Stop me if you've heard this before: 

        "We don't have the time to fix it."

    Or this: 

        "We've sunk a lot of money and time into this solution."

    and so on...


### Addressing the Accident

If you expect there to be a one-size-fits-all solution, or a "quicker picker upper", then you haven't spent very 
long in the software game. It just doesn't work that way. There is no golden hammer.

However, in lieu of a skeleton key solution, a procedural framework exists. First, we have to consider what causes 
accidental complexity. 

In many cases, I've found that companies opt to build their own test frameworks or tooling. This isn't a problem 
unless the company skips the evaluation stage. If my business is eCommerce, at first glance, it doesn't make much sense 
for me to build my own release and deployment pipeline. 

Typically, it makes sense to create a formal evaluation of the existing solutions, and score or weight those 
comparisons against the business requirements. 

In most cases, off-the-shelf software meets fundamental requirements. This is a considerable savings in terms of 
time to market, supportability and cost (especially if you choose open source solutions.)

There is no golden hammer. 

OTS solutions are great, but like anything else, they have limitations. Truly open source solutions tend to have 
limited, community-driven support, and there is often a hard ceiling concerning the supported scale of the solution. 
This is often overlooked in evaluations. We must always look ahead. If the business expects or targets a given scale,
then this should always be a factor in our evaluations. At some point, we may have to change solutions, provide 
integration or customization code, or provide a do-it-yourself (DIY) solution. 

So-called "Enterprise" OTS solutions tend to be pay-to-play versions of open source software. Subscribing to these 
services often includes an extended feature set not available to open source/community versions, as well as support 
contracts. The cost of these solutions is usually the primary focus during evaluations, but I recommend looking 
deeper. Get on the phone and talk to someone. Watch a demo of the extended features. Research the support experience. 

I've dealt with vendors whose enterprise solutions were absolutely phenomenal and worth every penny. At the same 
time, I've dealt with vendors whose extended feature set could easily be provided by locally developed integrations, 
and whose support experience was inconceivably poor. 









