---
title: Recruitment Challenges in Modern Technology Organizations 
date: "2020-02-27T00:00:00.169Z"
description: 
---

_NOTE: This was originally posted as "Architects, Operations and Engineering:
Decoding Modern Technology Organizations"_

Some of you that follow me on LinkedIn are probably aware that I repost job opportunities quite a bit. I often joke 
that my second job is recruiting. I genuinely enjoy helping to connect people and find people jobs.

I spend a fair amount of time talking to recruiters and talent management professionals to try to get an understanding 
of trends and practices (whether they might be good or bad.)

Over the past few years, I've noticed some confusion surrounding two specific areas.
1. Operations vs. Engineering
2. Architects.

For those of us working in the field, the differences are second hand. We understand it, because we eat, breathe and 
share it every day. I analogize this to banking. Every so often, we get hit with a fee or a constraint (the famous 
Regulation D comes to mind) with respect to managing our accounts that are tied to some company-specific or even 
regulation-specific rule of the FDIC or NCUA. We don't do it every day, so the fee or limitation comes as a shock. In 
many cases, that's what it is like for recruiters. They don't live and breathe the industry in the same light we do.

Let's take a look at these two areas and try to find ways to dispel the differences. 

---

**Operations vs. Engineering**

A friend of mine is a software engineer who has spent most of his career working on tax services software or fintech. 
Since the advent of keyword searches and ATS, he receives just as many messages for accounting and investment jobs as 
he does software engineering positions. This is simply an intelligence limitation of the software to provide context of 
all of the information between the margins.

Engineering at technology companies tends to be the part of the organization that delivers the intellectual property of 
the company. The given technology is going to vary from company to company. IoT companies are going to have hardware 
engineers, while eCommerce companies probably aren't.

Operations could really be thought of as a shortening of "Day-to-day Operations". 

> "Ed, isn't Operations just IT?" 

Well, maybe. IT is really a dated term that has become somewhat ambiguous in modern technology organizations. In most cases, the intellectual property is going to involve the handling of information of some form or another.

To properly convey the original intention of the term IT, we'd have to refactor it to IIT (Internal Information Technology) or something of the like. Operations (a.k.a day-to-day operations) is really a better term, because it creates a more specific definition of what the members of that organization does. They keep the lights on. They keep things stable.

So what's the difference? I'm sure many recruiters can find a software engineer and an operations engineer who list almost entirely the same sets of skills.


Engineering is creating something that customers are paying for. If they are paying for it, that intellectual property is usually protected to some degree. Historically, these "solutions" (remember this) to customer problems were based on proprietary code. The obfuscation of the intellectual property was how companies justified pricing. The first to market typically had the best returns until competitors figured out how to solve the same problems. Eventually the product was commoditized, prices came down and it just became a feature-comparison war that was largely case specific based on the customer's desired use cases, or even just a crap shoot when the base functionality was the same across all products within a given market.

Operations has traditionally been a 'cost center'. This essentially means that the organization was comprised entirely of operating costs that didn't generate revenue. (NOTE: I'm not going to jump down the rabbit hole of a DevOps discussion. I do agree that there are ways of optimizing operational costs via collaboration, automation and a strong DevOps culture. However, reducing the financial impact of an operations organization is not the same as generating revenue. This is an oft-misunderstood tenet of DevOps. The DevOps culture is intended to provide value, which it still accomplishes by reducing the impact of operational overhead. This doesn't necessarily mean that it generates revenue). In many cases, operations organizations do have developers who write code. In some companies this is a litany of directories with bash scripts, in others it is well-defined object oriented software. This is more the case today than 10-15 years ago, when most of the work performed by systems engineers/systems administrators was predominantly manual work. Scripts were really the first types of automation to crawl out of the sea of operations technology, and this led to many engineers thinking to themselves "I bet I could make some money off of this".

There was a wave of "tooling" software that was released in the early 2000s. Much of it was focused on making the lives of operations easier. That on its own wasn't enough to make money, but that added value was enough to lift eyebrows of beancounters at companies trying to compete in a commoditized market. Lowering operational costs became "almost" revenue generating, because the first companies to figure out how to do this, were able to lower their prices putting pressure on their competitors. (In some cases, this even led to knocking off competitors so that they could raise prices later, inflating revenue.)

The profits were small and short-lived however, because many of these projects were written as open-source efforts. In fact, open-source options took over very quickly leading to a myriad of mixed business models (i.e. start open source, and then move to subscription, or keep 80% functionality open source and offer enterprise functionality to some of the most critical business function features).

Nonetheless, companies focused on tooling and developer enablement were popping up everywhere. 

>Ed! Wait. How does this impact recruiters? 

Oh, right.

Let's look at companies like CircleCI or DataDog. These companies are providing software predominantly to operations teams.

If I'm a software engineer at either of these companies, I might list features I'm working on or have delivered on my resume.

If I'm an operations engineer at customers of these companies, I might list features of the software that I've used or implemented.

It's just like my friend, the software engineer, not budding tax accountant.

This problem is exacerbated by terms such as SRE, DevOps, and all of the ridiculous variance in job descriptions and titles. I have a friend who has the title "Advanced Software Engineer", but he is an L3 support representative. No software engineer skills required. I also know of engineers with titles such as "Infrastructure Engineer" who are designing hardware, or writing complex code, despite the fact that the position is usually synonymous with "Systems Administrator".

A narrow-minded recruitment team is going to miss entire sections of the candidate pool, and candidates are going to get a headache trying to adjust their resume to get the best "surface" area in job searches. 

---

**Architects**

The lines between architects is almost the same. Personally, I'm not fond of this term. When you think of an "actual" architect that designs buildings, the positions are a bit different. I prefer designer or planner, because ultimately that's what we do. We're creating a design or plan for "something".

The first type of architect I want to cover is the solutions architect. These roles are traditionally reserved for customer-facing experts. If you remember above, I called attention to a product as a "solution" to a customer problem. That's really what a solutions architect is responsible for. They possess substantial understanding of the industry, probably working for customers. They understand customer problems, and more importantly, the language of the business much better than the people writing the code.

In most cases, they are taking the applications, services, etc. and helping design workflows for customers. They are also responsible for working with engineering (directly or indirectly)  to ensure that user feedback results in honing features to improve the future customer experience.

This is fairly easy to understand.

The line between Ops/Cloud/IT Architects and Software Architects is a bit harder to draw in some cases.

At the easiest level, we can apply the Operations vs. Engineering rules to classify these types of positions.

Software Architects design the software and systems that will help solve customer problems. IT/Ops/Cloud Architects design internal systems that help reduce operational costs and ensure that the day-to-day operations of the company are as smooth as possible. 

> Ed. Wait, didn't you say that solutions architects help solve customer problems?

Yes, I did say that. The difference here is that software architects are designing software for the "business", while a solutions architect is leveraging the software to solve a specific customer's use case.

Let's go back to our CircleCI example. CircleCI writes software for building software. The software architects are going to design the software with many capabilities that are associated with those business problems. Most applications don't have "just one" way to be used. In some cases, they have to be designed to support many mutually exclusive workflows. They might have a solutions architect who specializes in Java development to help companies work with CircleCI and Java build pipelines, while there might be another solutions architect who specializes in C# to help companies work with CircleCI and C# pipelines. 

> Ed, you said IT is a bad term

Personally, I think IT is a bad term, but the industry didn't ask me. This is a common title. Operations Architects/Infrastructure Architects/Systems Architects (Usually) and IT Architects tend to all follow the same pattern.

To be honest, you can call it whatever you want. It boils down to the day-to-day, and who your customers are. If your customers are internal, then most of the time, your focus is going to live under "operations".  This doesn't necessarily mean that you aren't developing software. This is a very common misunderstanding. If you look at companies like Netflix, Facebook, Google, HubSpot, Etsy, etc. many of them have open sourced their own internal tools. (If you think about it, this makes a lot of sense. Open sourcing your tools is inviting free labor, which is a great way to reduce operational costs.) 

> Where did Cloud come from all of a sudden??

Cloud Architects tend to be experts in a given (or multiple) cloud provider solution (i.e. OpenShift, AWS, GCP, Azure).

This fits the same ambiguous nature that "hosting" or "Product IT" nomenclature did before the public cloud came to become popular. These teams weren't providing company-wide operations support, but rather specific operational responsibilities to keep  the company's products on line.

There really isn't a very good way to classify this, because it boils down to the company and how they use the cloud.

I've seen companies that have cloud architects who are part of the operations organization (sometimes referred to as Enterprise Cloud Architects), I've seen them explicitly part of the engineering organization, providing the base layer for IaaS, PaaS solutions. I've seen them in a dual role bridging both organizations, but providing two separate services. 

In fact, I've seen plenty of software architects who also assume the role of cloud architect, where the intellectual property is a platform. This is common in eCommerce, supply-chain, where an application has to be backed by complex distributed systems to guarantee performance to its customers.

Despite my futile attempt to draw a line between the terms, there are dozens of exceptions and deviations simply based on how each company views and perceives a given title. At best, that line is going to look pretty squiggly. 

---

The best advice I can give to recruiters and candidates alive is not to judge a book by its cover.

Recruiters, I know you are going to rely on keywords searches, ATS and you own experience, however that's not going to cover every scenario. If a candidate bugs you, pick up the phone and call them. Countless studies show that most people applying to jobs are applying to every single opportunity they can find. Persistence, especially when candidates are showing active interest, is a quality you are unlikely to find in a majority of the applicants. Some of the best candidates I've hired or interviewed, weren't all that special on paper. There is a good chance that you're passing on candidates who have qualifications that exceed your ability to enumerate, because you simply haven't been exposed to every corner of the industry.

Candidates, I know you are going to get impatient. Establish relationships with recruiters. Talk to them. Learn the trends, and no matter how much you disagree with them, be prepared to adapt. Give recruiters a break. We are making their job harder every time we apply to every single position posted on the web. Make a list of the companies you want to be at. Research their organizational structure. More often than not, recruiters are happy to talk to you about the organizations, even if there aren't positions in your wheelhouse available. Many companies also maintain their own talent community exactly for this purpose.

It's also important to remember that recruitment is a collaborative effort. Recruiters aren't the only links in the chain. There are definitely "iron curtain" recruitment teams that filter everything from hiring managers. However, there are also hiring managers that aren't good about reviewing resumes, or aren't good at when doing it. I admit, when I first had an opportunity to start interviewing candidates and reviewing resumes, I was overwhelmed. I bugged talent management, read half a dozen books and even took a few classes just to understand what to look for. Sometimes, it isn't even about the recruiter or the hiring manager. There is also a recruiting coordinator involved at many companies whose sole responsibility is to schedule interviews and screens. I'm sure many of us have funny stories about emails that didn't go out, times that were screwed up, or trying to coordinate the 4-hour marathon on-site interview.

In the end, these types of problems are about bridging a communication gap. I sincerely hope that bringing some context to these roles and how tasks are divided up, but in the end the best solution is a conversation.

A conversation that doesn't end up in a job match, is still a positive experience for many of us. This keeps doors open for candidates, as well as for companies who will find that their future talent management efforts become much easier by leaving candidates with a positive memory.

I can say without any shame or ego, that the best experience I ever had was for a position I didn't get. It was so good, I sent the recruiter a bottle of whiskey. I would go as far as to call him a "curator of the talent management experience", because "recruiter" just wasn't strong enough a title.

In closing, there are the titles that companies create to build functional separation within their organization while trying to attract and retain talent. There are the titles we, as candidates, aspire to because of what they represent to us. There is also the reputation we achieve through our efforts, our passion, and our willingness to do what is right given the tribulations of the day-to-day churn. I would rather hire reputation over title any day. 