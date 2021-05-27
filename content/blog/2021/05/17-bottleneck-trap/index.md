---
title: "Don't get choked by the Bottleneck Trap"
date: "2021-05-17T00:00:00.169Z"
description: "The \"Bottleneck Trap\" is a common problem in software engineering organizations."
---

![Bottlenecks](./bottlenecks.png)
The "Bottleneck Trap" is a common problem in software engineering organizations. The classic case is the software architect who also owns the coding and implementation of critical components or portions of the code base.

Operational models have evolved broadly over the years such that we can generalize the previous statement to be "senior engineering resource" becomes a bottleneck due to "scope of responsibilities being managed ineffectively".

The problem is a failure to achieve a good balance between development efforts and the other aspects of senior roles within an engineering organization.

### Career Evolution

First, let me talk about career growth. I imagine the majority of developers and technologists look at career growth as some step function of titles, and pay grades/tiers. Realistically, career growth is a bit more liquid. In order to justify a promotion (change of title/grade), we're often granted more responsibilities incrementally. Leveling up is a positive outcome associated with successfully navigating those responsibilities.

As employees earn seniority, their skills and interpersonal relationships become increasingly valuable to the business as a productivity multiplier. This is critical to development teams, because "software is a team sport". A team that dedicates one or two members to mentorship, coaching, leadership, etc. will find that growth activities become a bottleneck, and the immaturity of the skillset and productivity of the team exceeds the capability of that teams ability to manage it. This more than likely means that the senior members of the team become a bottleneck.

I've always approached a staircase or gradient when building technical teams, so that each person can feasibly be 
coached by the person "above" them. Additional advantages are multi-dimensionality and the contribution to a collaborative team environment. We aren't isolating team members by creating bottlenecks.

### Beyond the Gradient

While we have well-defined ways of minimizing bottlenecks within a team, these efforts become more challenging as developers move into new roles or continuing climbing the organizational ladder beyond their existing teams.

Relationships of any kind come with a fair amount of gravity (for better or worse). As an employee moves into a new role, the connections they've built with their former teammates don't cease. There is going to be continued communication and collaboration , and in some cases, it might short-circuit established process in doing so.

This is an area that requires organizational support. Team members moving up have to be coached how to navigate these types of transitions. Team members remaining behind have to be coached how to respect and understand not to take advantage of their relationships. This is critical for maintaining a collaborative environment beyond a single team, which facilitates a positive cross-functional environment. In jest, I like to think of this being "tight knit and loosely coupled".

### The architect dilemma

Architects can arguably be the hardest transitions to manage because of the generalized shared proximity to the same tasks and output.

This becomes exacerbated when first facilitating these types of roles in growing organizations due to a number of factors (lack of need for a dedicated position, inexperience managing these roles, reporting structure et al.)

As a result, the role is often a dual/hybrid position. While this is generally considered an anti-pattern, it can be successful as long as the duties are prioritized, and the business is supportive of the person making decisions that enforce that prioritization.

I've seen many companies try to create architects from Principal/Lead/Staff/Distinguished/Technical Fellow/(Did I get them all?) Engineers. To be honest, this is actually probably the most common evolution. Some of us don't want to code for 40 hours a week.

This references an old problem in a new way. If we have failed to build a cascading environment for mentorship and coaching, then the technical chops of a team are likely to exit with the person moving into an architect position. In order to protect the business, teams tend to request that this person do -- **and own** -- both.

This creates the inverted 80/20 problem: "20% of the people have 80% of the information". That's going to create bottlenecks and productivity barriers en masse.

A good organization recognizes the value of allowing the "next person up" to rise to the occasion.

### Transfer of Ownership

One of the easiest ways to navigate this problem is to establish boundaries associated with job function. Architects shouldn't own development projects. They can design it, provide the diagrams, collaborate with developers, provide tools, automation and process to guide development, but the implementation should be owned by engineering. Full stop.

However, ownership does not preclude architects from continuing to contribute to that codebase. There are plenty of ways to do this. Many of the solutions are going to have to cater to the software development life cycle in use.

With longer work intervals, architecture and development sprints are planned in advance.    Typically this means that architects have more time at the end of epics or larger/longer release containers to put their hands to the keyboard.

### Servant Development

I like to call these types of effort "servant development", because once the design has been provided, the architects have the ability to attack defects, optimize tooling and automation, or even try to write smaller priority code from future sprints in order to support the development teams focusing on the core, critical code.

Shorter work intervals tend to reduce that extra time in favor of a more aggressive, higher velocity pipeline. Architects provide a design in one interval that is implemented by development in the following interval. In these workflows, an architect is usually only one sprint a head of the development teams.

However, there are still opportunities for the developers to remain involved with the codebase. They can (and should) be involved in the code reviews so that they can evaluate the code for compliance (to the architecture) and overall correctness, as well as provide coaching/mentorship through the review and evaluation process.

Additionally, my personal favorite, is the presence of a well thought out production quality proof-of-concept. A good proof of concept becomes an executable specification of the architecture (at a smaller scale), and a reference architecture for the implementing engineers to follow and build from. In many cases, this reference architecture may act as a starter kit for tests, and the production code itself.

The benefits of these approaches allow architects to maintain technical depth to some degree, and to retain a collaborative approach to the codebase without blocking implementation.

At the grander scale, these relationships promote a collaborative cross-functional environment that helps distribute skill amongst an organization. This allows technical leaders to extend their influence when moving forward in their careers, rather than diminishing it or extending it in a manner that generates a negative side effect that subtracts, cancels out or even exceeds the benefit.

--- 
The path to a successful, high performing organization is rarely based on the technology of choice. More often it is the result of great communication, well-thought out process, and an operational model that supports causal relationships of actions and positive outcomes. 