---
title: "Platforms and Infrastructure: Cohesion"
date: "2021-01-23T00:00:00.169Z"
description: 
---

Last week I discussed some of the differences between the terms platform and infrastructure. This week I'd like to riff on the same topic from a different angle. How are the two concepts the same? How is it that we confuse them to begin with?

There can be a lot of crossover between the two, and in many cases the business goals of an organization drive a cohesiveness between the two in order to provide a cleaner, leaner experience for both the end user and those who have to manage the care and feeding of the "backend".

### Analogy (For the Technically Inclined) : Memory Models

In a nutshell, a memory model is a concept or set of guarantees made about a processor architecture. One of the common elements of a memory model is how it manages memory barriers, which are mechanisms responsible for guarantees associated with visibility and ordering of tasks when sharing data.

Unfortunately, this wasn't a standardized concept, so different architecture manufacturers used different semantics. When coding in low or mid-level languages (Assembly, C/C++, etc.) this put the responsibility of managing different semantics onto the developers. On the other hand, languages like Java were able to abstract away the semantics into the JVM based on the guarantees set forth in the Java Memory Model.

The analogy is a bit loose, but deliberate. When we are coding in Java, there is a very clear separation between code level synchronization and the individual memory access semantics performed by the JVM. We have to use specific keywords, structures and techniques to inform the JVM how to proceed. That code can be theoretically moved to JVMs that support different architectures, without any necessary modification, despite the fact that the memory barriers may be inserted in different places or in different ways on different architectures.

In terms of architecture, this is the utopian "platform" that can be placed on different infrastructures. Many businesses offering software solutions have customers with prejudices in terms of technology. There are retail businesses that don't want their hard-earned money going to Amazon, so they'd much rather do business with vendors like Microsoft or Google. Conversely, there are industries that are terrified of vendor lock-in, so they'd prefer to use a multi-cloud approach. This requires that their application be platform or infrastructure agnostic depending on the necessary depth of their tech stack.

### A little history...

There is a second reason I liked this analogy. It serves to provide subtext into the history and evolution of platform and infrastructure. Low-level languages were often used to develop applications that were going to be delivered to consumers on bare metal systems of some sort. Software applications might be installed on a laptop or desktop, and business applications might be installed on a server.

Platform and infrastructure were the OS and the device respectively. For software applications that didn't require special interaction with hardware or peripherals, development was mostly a slam dunk. The operating system provided all of the necessary abstraction. However, some businesses needed more horse power, peripheral devices, etc. This allowed some violations of the abstraction layer leading to challenges for the software providers.

Interestingly enough, the problem space for those businesses are very similar to the problems and challenges of embedded device manufacturers, IoT, robotics, mobile devices etc. There was a requirement to test a lot of hardware to ensure that the software worked. For "consumer-level" products, this was extremely challenging, because it meant testing most of the devices that would end up in the homes of the general public. Financially speaking, a volume business usually allows for the costs to cancel out, but given the scope, the risk is much higher. Aim high, crash hard.

There were various solutions to the problem. Apple provides a white-box solution, that is more or less the same path that embedded devices take: "You buy my software on the hardware I know it works on". It's a package deal.

In terms of hiring and team building, infrastructure skill sets were often FPGA programmers, electrical engineers, computer engineers etc. At the platform level, we had systems level engineers that were typically doing some form of low/mid level coding. However, while these skill sits were emerging, they were often performed by the same folk. They didn't peel away from each other until vendors scaled out to the point it made sense to do so.

With the onset of the web, businesses were able to reach more customers through fewer touch points. . Eventually products became more complicated, requirements became more challenging, and demand required value to be delivered faster. More skill sets emerged: network engineers, all sorts of application-specific developers for databases, domain-specific business apps, physical storage, et al. Whether or not the positions or skills were business or product facing ultimately became a triviality dependent upon the problem space of the specific business.

### The Question

Things have changed quite a bit since then. An assumption that had mostly been true for decades was suddenly called into question:

> "Where do I put my product?"

Web and virtualization technologies offered the creation of a new space: web hosting. Early web hosting was mostly global file-sharing. (GeoCities FTW!) The argument could be made that this was the infancy of cloud computing.

Over the past 20 years or so, there has been an ongoing question about the security, governance and costs of public vs. private cloud. I'm going to side step this and look at the effects of asking the previous question.

I believe that Benjamin Franklin once stated that you can never place your foot in the same place in a stream twice. First, the stream is always moving. Secondly, once you place your foot in the stream, it is changed. (NOTE: I did try to verify this and was unable to. Sorry Ben!)

The effect of asking the question above is similar. Once we ask the question, the industry has changed. Platform and infrastructure take on new shapes. As we re-evaluate whether or not we should pay Amazon or Microsoft, we also start revisiting the age old questions that led to the creation of Java and the JVM.

### The Simple Cases

Maybe our business problems are very simple, similar to early software programs that only needed to interact with the operating system. This is where we can use PaaS offerings, or construct our own with open source or commercial software that solves all of the low-hanging fruit problems for us. Our use case isn't specific under these conditions, so we reduce costs and focus more on solving the business problem by making a "buy/borrow" decision.

Containerization provides a good example. Kubernetes continues to mature, and as such, it solves an increasing percentage of platform problems. As an aside, its developers have made an uncanny effort to provide good abstraction from infrastructure through projects like the CSI (Container Storage Interface) and CRI (Container Runtime Interface).

While this drives some candidates and recruiters crazy due to an increased scope of responsibilities for similar job titles, these products are a boon to businesses trying to cut down costs.

It is much less expensive to pay for an engineer to build Terraform manifests than it is to pay a much larger team of engineers to write code that solves the same problems. It's also cheaper to maintain and update those manifests than it is to maintain and update the code base. It's also cheaper to deliver...and...and...etc.

This is a growing population of cases. Platform and infrastructure might very well be indistinguishable in these cases. Using the CSI and CRI above as examples, infrastructure might just be a configuration line item similar to synchronization statements or structures in a Java class. I think it might be a solid argument to consider a platform as an "abstraction layer on steroids" at this level. It's often very thin, consisting of configuration and specification of infrastructure parameters, in addition to lightweight capabilities, orchestration etc.

In many circumstances, the problems are solved to such a degree by external offerings, that the business can manage platform and infrastructure entirely through an Operations staff.

### The Not So Simple Cases

The opposite extreme is when conventional tools don't solve enough/any of our problems to the satisfaction that we can be profitable and induce smiling faces onto our customers.

A great example of this is [Google Spanner](https://static.googleusercontent.com/media/research.google.com/en//archive/spanner-osdi2012.pdf). (This is a great read by the way. If you're interested in "the other" 
paper, it is here: [Calvin](http://cs.yale.edu/homes/thomson/publications/calvin-sigmod12.pdf). It's too bad Google 
didn't name their paper Hobbes). The power of the Spanner solution 
comes from the ability of Google to manage it's own network infrastructure and to have extremely precise observation of clock uncertainty (via the TrueTime API that exposes references to hardware clock).

While modern Spanner derivatives like [YugaByteDB](https://www.yugabyte.com/) and [CockroachDB](https://www.cockroachlabs.com/) offer similar 
semantics and overarching designs, 
they don't offer the same degree of fidelity as Spanner, and therefore can't provide the same level of consistency.

In cases like these, not only are platform teams and infrastructure teams separate, they tend to have even further division.

Most of these skill sets tend to be software developers who have experience working with distributed systems, databases, concurrency, systems level programming, etc. How and where they sit within an organization is ultimately tied to the organization's problem space.

While these can be hard technical problems to solve, from the perspective of the business, they are expensive. Many of these problems aren't that new. Testing and releasing software is expensive. If we have to test and release software that isn't directly related to the business logic, this is a source of friction for the business. The advantage of using third party solutions is that they have already been tested. Naturally there are risks we take that the testing is comprehensive enough to meet our needs, but that's part of the tradeoff.

### The In-Between

Unfortunately, Kubernetes is still evolving. It hasn't solved every problem. Even the solutions it has provided don't necessarily provide them in a manner that meets the acceptance criteria for your businesses problem space.

Let's not throw out the baby with the bath water, though. Maybe there is a happy medium.  If Kubernetes gets us halfway there, that is still better than zero.

In my experience this is where most of us end up. It is the junction of the confusion. The reason for this is that there is a vast set of possibilities surrounding how pre-baked tools can solve or not-solve our problems. Maybe the infrastructure can be abstracted entirely, but we need to build our own platform. Maybe a little more, maybe a little less.

In terms of building teams, scaling a company and solving business problems,  this is a greater challenge than "hard" technical problems. You still have to contend with the hard technical problems, if only a subset, and you also have to manage the tradeoffs between build and buy.

This can be hard to organize, because we can hire too many developers, or not enough. Maybe we don't have enough of the operations/cloud engineer skills. Finding a business-specific balance between the two is challenging, especially because we can't always look externally to examples from other companies or solutions.

---

One of the hardest challenges when working in this area of a technology organization is being objective and honest.

Personally, I have a visceral enjoyment surrounding low level development and understanding how things work at their core. I love to write code and know what is happening from the application feature all the way down to the electrical properties in the hardware. However, I also like customers with smiley faces. Part of working in any organization, even if it's one that you founded, is putting the organization's goals before your own.

My fascination with both a high-level and drilled-down view is probably why I eventually fell in love with software architecture. I learned to let go of the code, and focus more on the solution and I probably enjoy those smiley faces more than the lines of code. It takes a village to provide a realization of the design. It isn't just a team of SDEs that drive it to ground. It is product management, operations, testers, etc.

Platform and infrastructure are two of my favorite areas, because they represent a vast ocean of problems, challenges and opportunities. These are two distinct areas, but they also represent a cohesive surface to a business: to help solve problems as effectively as possible.

Earlier I made a reference to solving these problems via operations. This is where honesty   and biases come into play in a number of important ways. As a technology and business leader, if we opt to solve problems with our own code where they can be sufficiently supplemented with external solutions, we're providing obstacles to the competitive advantage of the business as well as inflating costs that are passed on to the customer.

Realistically, apples to apples, an operations engineer is a less expensive resource than a software engineer. This isn't a statement of value of the person, but rather a representation of the work that can be accomplished, the complexity of that work, and the extended impact of that work on the company.

When we are faced with build vs. buy decisions, we aren't just discussing the cost of the software, we're talking about staffing, future maintenance and risk. In many cases these decisions aren't small. If I want to add a search layer to the business's product to allow customers to query comments, past transactions, etc., there are a lot of different avenues I can take depending on the scenario:

- If I'm using AWS, I can used their managed solution. We'll say that it's going to be a major feature for our 
business, so I'm going to add one senior SDE to my platform team. Maybe we add a head to the cloud team, depending on how much we're already using AWS and how much additional work it will take to set up and maintain the resource.
- Maybe my application is for a major bank, and we're still public cloud adverse, so we opt for OpenShift. We can 
  evaluate the use of  Open Distro vs. the traditional ELK stack. The scope of the application level changes might be the same as a managed solution. However, the infrastructure has changed dramatically. Rather than letting Amazon's staff manage the infrastructure, we've got to do it. More than likely we'll need at least one ops engineer to take on that additional work.
- Maybe, our search use case has special needs that aren't covered by Elasticsearch or the underlying Lucene code. 
  Instead, we're working with the open source contributors to Lucene at Apache on our own personal fork of the project. We'll need to hire application level SDEs to integrate the search layer into our application. We'll also more than likely need systems level developers to work with the forked Lucene project in order to manage whatever changes or alterations are necessary to the on disk or in-memory structures.

Be objective about the circumstances. Be honest about what it is going to take in terms of the approach. Success and achievement require a lot of effort, so make sure you work smart. There is no need to add obstacles that don't need to be there.

Being honest isn't just for leaders. If you're a software developer that loves platform and infrastructure, make sure the organizations you seek out are approaching those problems in a manner that you are going to find satisfying.

Platform and infrastructure is messy, vast, confusing, controversial, and a source of high contention. It offers challenges that are technical, procedural and organizational. I've tried to allude to the sources of that confusion while defining their cohesion.

There is a powerful subtext here related to build and buy decisions. Something we all must remember when making decisions of this nature is best illustrated by the words of Carl Sagan -

> In order to make an apple pie from scratch, you must first invent the universe.
