---
title: "Design for Sale: Facilitating Buy-in"
date: "2021-02-22T00:00:00.169Z"
description:
---

One of the most challenging requirements in the software design process is getting buy-in. This is a never-ending compositional effort that requires a broad range of skill sets and communication techniques.

Where to begin?

Most design efforts start with the elicitation of requirements. Architects may or may not be involved in this process. In value oriented flows, requirements are usually extracted from customers via UX, product management, and/or sales. There are a lot of different workflows, and it's beyond the scope of this article to dive into them. That being said, I will emphasize that the fewer steps between the customer and the implementation will usually result in less distortion of the requirements.

In this stage, if an architect is involved at all, we are usually in listening mode. The purpose is to start the interpretation process of translating the expressed desires and needs into the language of technology.

At this phase, our buy-in efforts have actually already begun even though it is a time for our mouths to be mostly shut and our ears to be open. As we listen to the requirements, we are naturally going to begin associating the problems with our experience. This is a good thing. However, we are also likely to feel gravity towards some of the solutions we have provided in the past. This can be a good thing, but at this stage it is premature. Don't pollute the problem space with the solution space.

Listen. Take notes. Sketch some rough diagrams. Be as agnostic as possible about technology. During this phase, limit your questions to clarifications. There are two primary goals in this phase.

Understanding of the problem
establishing a vocabulary for the components.

Understanding the problem is extremely important. We want to get as much detail as we can from the get go. A solid understanding of the problem is what drives the two "Broehm"-ian qualities of software design:

- "Are we building the product right?"
- "Are we building the right product?"

Establishing vocabulary is absolutely critical to buy-in and software design. My native language is English. It is a very non-Pythonic language, in that there are a multitude of manners in which we can say something. Communication in English is very challenging even amidst native speakers based on the vast array of phrases and synonyms. This makes miscommunication a likelihood.

The greatest weapon we have to combat the follies of the English language is a common vocabulary. Eric Evans refers to this as a "ubiquitous language". It is a subset of our spoken language, constrained to a set of domain/business-specific words to describe the problem space we are attacking. This vocabulary becomes the primary tool for buy-in, because it forces participants to converge on the same terms, reducing the complications of communication during efforts to come to decisive and supportive agreement on technical direction.

Sharpening the Blade

As we establish vocabulary, requirements elicitation dovetails into requirements refinement. At this juncture, there tends to be a short cycle of communication between architects and stakeholders (engineering teams, pms, ux, etc.) where requirements are socialized to engineering teams that will implement the technical solutions, and follow up questions are propagated back up the communication channel towards the end user.

The vocabulary will be refactored and honed further, in order for the scope of communication to be tightened up.

During this phase, we have the first attempts at buy-in, which tend to be technical in nature. What kinds of changes are required by the system? How does this impact the existing system? How does this impact the teams that implement them?

As architects navigate an array of features, improvements, requirements etc we find that the requirements are somewhat like a hearty stew. As we dip our spoon in looking for the best cube of steak, we invariably submerge a carrot or potato or two, and the landscape of elements to our stew are shifted.

At this phase, buy-in is going to be subservient to managing tradeoffs. In my experience, this phase is a consequent statement to the antecedent elicitation of requirements. There is a technical "response" that helps provide context and clarity to the overall scope of work that needs to be done, what parts of that work are the most important to the end user, and how we can deliver the most value to that customer based on the available resources to complete that work and the effort require to deliver the individual pieces.

While buy-in isn't at the forefront, it is still there. While we are discussing requirements with engineering managers, tech leads, et al. we are foreshadowing the high level design. We are talking about components and sequence. We are talking about the potential effort and resource management. We are setting the table for future discussions, and we are outlining the needs for executive sponsorship.

Sponsorship

Not all design efforts require executive sponsorship. This ultimately depends on the scope and/or risk of a project. Many requirements that come in the typical development pipeline are "business as usual". However, over time, due to entropy, churn, bad planning or any other number of unfortunate issues, we may find that in order to achieve desired velocity or value, there are obstacles we have to overcome. We usually refer to this as technical debt.

Re-platforming, or meta-requirements like upgrading/changing our tech stack to better support our end users is a necessary evil. The ideal design insulates us from these challenges, or decreases the cost of future amendment. These efforts are often disguised under fun terms like "digital transformation", "modernization", "technical migration", et al. These cases almost always require executive sponsorship, because it represents a significant risk to the business.

These types of efforts live and die by sponsorship. This is often the most challenging type of buy-in to obtain. One of the reasons this is so challenging is that it requires quorum from leadership. An executive that doesn't have support from the leaders in the field will be set up to fail every much as managers without support from directors/VPs etc.

The direction in which you approach this depends on the structure of the company. If you work in a top-down structure, start with the execs. If you work in a bottoms-up structure, start with the engineering leads.

Regardless of the who or degree of the project, my first conversations tend to be reconnaissance. What are the pain points? What are their priorities? Who else should I talk to? The first question confirms that the person or persons are actually stakeholders. If their pain points don't intersect with the problem, then we cross them off the list. If there is an intersection, we have to determine the priority. Not all stakeholders have an equal stake.

The last question is a way to make sure our list is complete. You could suggest that this is the opposite of the first question, in that it aims not to confirm that someone on our list is an actual stakeholder, but rather that we haven't inadvertently omitted one. The answer should be constrained to teams or individuals who this stakeholder collaborates relative to the problem at hand.

Starting From The Top

This is hard. When sponsorship starts with an ivory tower type decision, we have to convince one all-powerful opinion, without the advantage of consensus, bandwagon or herd momentum.

My only advice in this stage is come with facts, be prepared, and practice "managing up" skill sets. The scope of your position is going to come from the level that the executive sits at. If this is a C-suite executive or VP-ish level engineering lead, you are likely going to speaking in terms of business, cost, and high-level comparisons.

The process at this stage isn't that much different than it was when we started. We have to treat the exec similar to an end user. What is their pain? Vocabulary is still critical at this juncture, because these leaders may very well only have insight into problems at the domain's space. We have to present the design effort in a manner that solves a point of pain.

These pain points aren't necessarily "how do I make my widget faster?". More likely these are issues like "we can't hit our dates" or "too many bugs are getting through to customers". Getting sponsorship to change the "how"s of our business is going to require both support and investment from execs.

I have fallen victim to a very common phrase many times "I'm supportive of changes". (or one of the many facsimilies thereof). This needs clarification, because being supportive is not the same as investment.

This tends to be a political stance, such as "sure, you can change it as long as you come up with the time and resources to do it".

This doesn't mean no, but it's also a half-hearted "yes". In order to accomplish the effort, you may need to do it yourself or draft overly-dedicated engineers to work on it in their spare time.

This tends to be easier the larger a company is, because there tends to be more budget for efforts like this. The sheer manpower of large companies allows us to make economic adjustments to get things done. For smaller companies, this is quite challenging, especially if the company is clamoring to realize value in the form of revenue.

You may have to "live to fight another day". Make sure to pick your battles. If you don't think that the company can succeed without the changes you are proposing, then you need to drive that position with data. No one is going to throw caution to the wind on your gut.

This can be very frustrating and it's tempting to cast the exec decision in an unflattering light, but that isn't always the case. Sometimes it's just a matter of economics. The justification for the improvement may not outweigh the risk. In other circumstances, it's in an exec's best interest to see how much kindling you can kickstart with a "hot dog and beans" budget.

It is especially important to keep in mind that the door is rarely ever closed. There have been many circumstances in my career where a seemingly shut door was pried back open based on the results of "weekend warrior" prototypes I've thrown together on my own or with a small cadre of passionate contributors.

Starting From The Bottom

I find that this is an easier way to go about attaining buy in. However, before I go into this subject, I want to emphasize that this must be done in an organization that fully supports the bottoms-up organization paradigm. If the company's leadership is not focused on servant leadership or "IC-driven" efforts, an attempt to build momentum, what I call "bandwagoning", can be misconstrued as insubordinate. Tread carefully in those circumstances, because it is very possible you will not only fail to obtain executive sponsorship for your projects, you may be inadvertently challenging their authority.

Starting from the bottom aims at trying to bandwagon or snowball support for your efforts. I start this process by making a list of my stakeholders. Once I have a list, I try to order the list based on open-mindedness vs. skepticism. The most open-minded stakeholders are first, the most skeptical are last.

Once I have a "hit list", I'll cycle through that list, socializing the concepts. There is a politicization as well as a democratization of this process. First, we have to be transparent, but honest, how this process is going to impact the stakeholder. A very common mistake is to target open-minded leaders who aren't going to benefit from the project, just because they are open-minded. It's important to be precise, and accurate with your targeting. There is a limited amount of time to grow feet on an initiative, so we can't waste time selling to folks who aren't prospective buyers. Even moreso, we don't want to risk the reputation of the project by creating fodder for watercooler discussions.

As we work our way down the list, the scaffolding necessary to build our bandwagon is going to increase. As skepticism increases, we will need to provide a growing amount of evidence in terms of prototypes, data, etc. This is a big reason we want to start with the most open-minded candidates first, because they are the ones we'll be enlisting to help drive PoC and prototype efforts to ground.

Moving the project forward often depends on reaching a point where we have built enough of a snowball or bandwagon from which we can present to executive leadership with the justification that a.) we have data and b.) everyone wants to do this. We don't always have to work our way to the end of the list.

Another variable to consider is that amongst the list of stakeholders is the influence that each of them hold amongst the company, the business, with ICs, execs, and so on. If the last person on the list is a key VP or even a tech lead central to the effort, getting them on board will be necessary.

In these cases, it's important to consider re-ordering your list, or creating some "micro" meetings/conversations to start to drop hints. Sometimes, a simple slack message can be used to test the waters to help gauge the effort required to persuade someone towards a change.

Secret Weapons: Compromise and Patience

One of the most powerful weapons when trying to obtain buy in, is compromise. Negotiation is an artform in itself. When you know that you are going to enter a conversation that requires persuasion, it's a good idea to know what your bottom line needs to be. Always come in higher, and always assume that they've come in higher as well. This works more easily with quantifiable terms, so make sure that you assign a value to each and every component of your proposal. Consider alternatives. Consider multiple scenarios. If you spend a good amount of thought going into a conversation like this, the odds that the end result is something you considered is fairly high.

However, just because you've considered the outcome, doesn't mean that the outcome sits above the line you've drawn for what your bottom line is. This is where patience comes in. If at first you don't succeed...

Truthfully, this can be a challenge, and a lot of it comes down to developing humility and EQ in your role. If you walk away with less than what you believe you need, the best thing you can do is pause the negotiations with patience. Tell the stakeholder that you're going to go back and review their proposal...

... and DO IT.

It's a very simple equation. Is their proposal going to cut your implementation/design to the point where success is impossible? Unlikely?

If you can live without, then accept the proposal. The silver lining is that in most cases "less is more", such that if they've clipped a feature or two, you might be able to realize the value of the project earlier and win the ability to complete the features you've initially envisioned.

If you can't live without, then come back and explain your case. Usually it doesn't come to this. I can count on one hand the number of times I've been in this position. This isn't a challenge to your resolve, it's a challenge to your ability to know how to abandon something you can't accomplish. This is important to the company, the project and your career.

You must be able to say "no".

If leadership says that they can't sponsor or invest in what you need, then you have to be willing to walk away from that effort. It does them no good for you to put forth effort into a design that is going to guide weeks or months of development effort that we know in advance won't deliver value.

You're also going to have to explain why. This goes back to establishing your bottom line. Establishing your bottom line goes all the way back to the beginning of this article. One of the hardest skills to develop as an architect is agnosticism. That subject alone is probably deep enough to discuss all on its own.

You haven't mentioned technology

I sure haven't. Well, technically I did about 50 times, but I keep editing it out. The point is that technology is the meat of the conversation, but we're talking about the skeleton right now. Every situation is going to treat the technology differently. Technology selection is part of the POC/Prototype process. It is organic and should happen over time during the discussions.

I did this on purpose, because any tech lead, principal or architect who reads this is going to want to reach for an IDE. We all do it. Even if we move into management, there is a part of us that instinctively reaches for the technology.

This is part of the buy-in process, and it comes down to leveling. The level of the person we are selling dictates the level of detail in our pitch and proposal.

If I'm sitting down with an engineer, and talking about the values of a certain framework or persistence technology, it is a foregone conclusion that the two of us are going to geek out on every pedantic detail. That is a great socialization technique to build up excitement. However, that same conversation with the managers of the same engineers is likely to yield a different result; "I have to change from A to B. That takes time. I have all of these other deliverables to meet."

If I can romanticize our buy-in meetings and conversations with leaders generically, we want to come across as graceful and eloquent. We want to be the Don Draper of technological decision making. That means we have to be focused on how to persuade our constituents, rather than focusing on the technology. In these instances technical details is an "um" or an awkward pause. Don't get me wrong, the technology is the subject matter. However, our perspective at this moment has to be on how we are going to sell it, not defining what it is.

If we are selling to managers of ICs, we have to sell the technology in a manner that makes their jobs easier. Naturally, building excitement from their team is a way to do that, but it's also like walking around  Disneyland telling all of the kids to ask their parents to buy them candy or tickets to Star Wars rides. This might work once, but if that's the only basis for our proposal, the managers are more likely to be frustrated than they are supportive.

Selecting frameworks or technologies that increase developer productivity, reduce lines of code, make testing simpler, have long term support,etc. are great selling points at this level. This is one of the reasons that DevOps is extremely popular, and why we see so many digital transformation efforts. The claims of the process are extremely bold (despite the fact that it requires substantial investment.)

Selling to managers of managers becomes a bit more abstract. I look at this as a variable "sense of direction". The closer I get to the C-suite, the more I focus on value to the business and the customer. The closer I get to ICs, the more I focus on individual productivity and business process. Neither of these is ever "zero" in my proposals or conversations. This is usually where I build my stance when trying to sell a proposal, and then I nudge based on that person's specific pain point and how the design/proposal might help them out.

One of the reasons I've omitted technology as a specific detail of these conversations is that in my experience I've found that most of these conversations don't care about the technology. More often than not, the initial high-level design of components and sequences establishes a bird's eye view of an algorithm, pattern or template that will be used to construct the solution to the problem.

For those of us who have studied the history of software, the patterns to solutions have outlived the languages and specific technologies used in their implementation by a broad margin. A focus on governing dynamics as a primary topic for conversation ensures  the ability to quickly re-adjust the level of conversations, with the ability to drill down into details based on stakeholder inquiry. In other words: no ask, no tell.

However, it's also important not to ignore your passion. Find a way to translate your passion for the details or results or whatever gets you going to each level of conversation.

Handling Skeptics

Many architects, PMs, engineering leaders, etc. will suggest that the most challenging aspects of software design and the SDLC are converting skeptics. I'm not sure I agree that it is the greatest challenge, but it is certainly the most stressful.

There are going to be skeptics.

There are good skeptics and there are bad skeptics.

A good skeptic is someone who is risk adverse for the benefit of the company the customers, the team, and so on. I don't consider these skeptics to be the hardest to persuade, but more or less the ones with the most questions. They aren't an immovable object as much as they just have a default position that requires a load of answers. CIOs, CISOs, IT, have a reputation for being the hardest to obtain buy-in from. While I agree with the reputation, I think has been earned based on ignorance rather than merit.

These are leaders that aren't always in the SDLC chain, but they are stakeholders when it comes to keeping the lights on or managing the new toys that engineering wants. Even if their job descriptions weren't driven by the stability of the company, it would be common sense for them to be skeptical about our purposes, because they are footing the bill for our project. This is another area that many software architects ignore. There is a long list of cross-cutting concerns that exist from the operations or reliability engineering spaces that are waved away as ticket fodder. I don't want to chase that rabbit for now, but it's important to understand that Operations or IT-driven skepticism isn't usually driven from a place of malice but of risk. I have seen far more cases where an architect hasn't done their due diligence to answer operational questions in their proposals than I have Ops/IT "gunning for engineers" in some negative manner.

Another good skeptic is simply someone ignorant of the patterns or process associated with the solution space. This is pretty common. We, as people, are far too sensitive to the concept of ignorance. We can't know everything, and the best way to combat that is with open-mindedness and a healthy collection of questions.

Bad skeptics are those who cling to opinions based only on emotional attachment. The extreme case of a bad skeptic is analogous to slaying a dragon. As much as I want you to believe that we can eradicate all of our biases to become a crystalline representation of architectural majesty, it's just not practical. We should always strive to eliminate or constrain our bias, but ultimately we all have them. This means that at some level, we all have the propensity to be a bad skeptic.

I mention it in this regard, because I firmly believe that the only way to convince someone out of bad skepticism is humility and empathy. By demonstrating our own bias and prejudices, we can hope to achieve commonality from which to nudge someone towards the goals.

You can't force this. You can't push a skeptic. Psychologically speaking, people with a high amount of illogical or irrational skepticism are more likely to respond to pushing and forcing by just digging into their position deeper.

Under those circumstances, the only thing you can do is work around them and hope for minimum impedance and friction to your efforts.

---

I've actually had some feedback on the past few articles, which is very helpful. Despite beating myself up about the stream of consciousness format, someone gave me the thumbs up (Thanks Aashish!), so I'll stick with that!