---
title: "Defining The Architect Role, Part 2: Fitting In" 
date: "2022-08-19T00:00:00.169Z"
description: "
Episode IV: The Technologists Strike Back
In part two,
I'd like to compare and contrast architecture and engineering roles in order to demonstrate
how these roles, and the skill sets, can compliment each other in a technology organization.
"
---

Welcome Back, 

I hope [part 1](https://emangini.com/2022/08/09-architects1/) was helpful. 
I discussed three basic categories of architectural thought and output to establish an ontological view.

In part 2, I aim to leverage this foundational view to compare and contrast an architect with an engineer to elucidate the differences so we can establish a 
bird's eye view of accountability across technological quanta.  

This is a scenic tour. 
It is hard to understand
how a role fits in the greater organism of a business without understanding or questioning the organism.
There are easter eggs, and I'm going to try to do my best to make sure there
are links to all of them.
I'd love for this to be a reference, but if it's just a fun ride through the country with the 
windows rolled down on a breezy afternoon of the dog days of summer, that's a worthy consolation!

---

# Recap of the Ontology:

Architects generate three categories of artifacts:
1. Process
2. Autonomous Artifact
3. Assembly Artifact 

### Process Artifacts

A process can be something built from scratch, but more often than not we are talking about change or optimization. 
I used the term **change agent** to describe an architect whose role is wholly defined by a change effort.
I also discussed how many architects, through leadership and collaboration help approach change with broader strokes.

### Autonomous Artifacts

We discussed definitions of **artifact** and the nature of **newness** in order to expose some of the challenges of
ambiguity by defining roles only by the scope of what they generate.
I also discussed the notion of the three I's (Invention, Iteration, Innovation) to outline a deeper perspective into
how architecture technologists may approach the artifacts that they create.
This ties back to the concept of process. 

I also discussed The Autonomous Artifact Test as a means for defining what an autonomous artifact is. 
This was defined in order to help foreshadow the third category of architect.
I also discussed the compositional nature of technology, 
to help provide a clear demonstration of the manner in which problems might be approached depending on the
characteristics of an organization and those problems they intend to solve. 

### Assembly Artifacts

The third category was defined as a form of constructing output based on opaque components, where the value isn't from
the creation of something new, but rather the aggregate output of those components. 


----

Without further ado, let's get started...

# Architects and Engineers

I have to emphasize that there is no absolute set of guidelines. 
This view and perspective is to establish context for discussion.

## Directional Technologists: Horizontals and Verticals. 

There are many euphemisms, analogies, metaphors and phrases used to differentiate the concepts of depth and breadth in
technological value streams.
I'm sure you've heard reference to the "T-shaped" organization, or skill sets "a mile wide and an inch deep".
Perhaps you might have heard the phrase "jack of all trades, master of none".

All too often, we get caught up in the title rather than the responsibilities of a role. 

### Depth: The Vertical Skill Set.

Many of us began our career journeys fixing bugs.
Prior to the accessibility and maturity of code analysis tools such as [SonarQube](https://www.sonarqube.org/),
the foray into programming often began with a game of follow-the-leader.
Junior engineers spent time investigating defects.
The ultimate value was that in the pursuit of resolving accidental errors, they were building 
good practices through code study from presumably more experienced engineers. 

There were a number of challenges with this approach. 
- The process was contradictory as junior engineers were studying the code written by those who had performed the errors
under investigation: This was a conflict of interests,
  creating doubt over the degree of "good" amongst the good practices being learned.
- The nature of "good practices" was subjective, anecdotal and based on the assumption that the code was of high quality,
the person writing the code was more experienced, etc. 

Think back to a process of paying dues by working your way through teams like "sustaining engineering" or "customer 
engineering" or even QA teams before you were assigned to work on a dev team (or to write new code).
Systems Engineers often spent their time as Systems Administrators or mission critical support representatives
(Does anyone remember Product IT?) before becoming "generative" technologists. 

If we fast forward to modern streams, we'll find more entry level devs and ops engineers generating non-defect related
contributions due to the advent of the aforementioned tooling.
[DevOps](https://www.youtube.com/watch?v=LdOe18KhtT4), and the concept of "bringing the pain forward" 
or "shift left" brings test automation and code analysis so early into the pipeline and development stage, that it has 
truly reinvented not only the way we develop, but the way that developers build and evolve their own skill sets. 

Code analysis tools no longer represent an opinionated approach of a select few senior engineers across an organization.
Instead, it represents industry-wide good practices that become cemented into the way we create technological content.

#### Code Review: Then and Now

Think back to Code Reviews of yesteryear.
Prior to modern tooling,
there was a period of convergence required of dev teams and organizations to agree upon what was readable code.
Encyclopedic style guides were created that endured the jagged life of going stale, being updated, going stale, 
being updated, ad infinitum
(Usually, each cycle resulted in a greater percentage of leftover typos, staleness, and errors)

These code reviews became interrupt driven, and conflict riddled due to the tension of personal opinions, unstable
documentation practices, and the entropy of the industry as a larger population. 

Now, with modern tooling, style is enforced mechanically, creating a configuration driven watchdog for readability and
syntax.
They don't catch every mistake, but they do help us catch the dumb ones, which are usually the ones our eyes miss the
most. 
Very much like the difference between artifact and assembly,  modern code reviews are concerned less with 
peripheral aspects of the business, honing in on the patterns, technologies, algorithms and approaches that present
the shortest possible distance from problem to solution. 

Learning and context, as a function of career growth,has increased considerably.
Pull requests and code reviews have become
dinosaurs, as the tooling prevents breakage and simple error from entering production.
There is less need to spend time reviewing code looking for errors that will be found by customers in production,
as these tools and automation spits simple failure back onto its creators. 

Newer methodologies such as desk check, showcase, increased test automation and so on find ways to isolate and verify
more advanced, problem specific concepts within the codebase.

#### So what does this have to do with depth?

Engineers spend less time in meta-practices, and more time entrenched in the problem space.
Their focus and sponge-like minds are spent in these spaces much longer than they would otherwise.
An engineer working on a team that has been built around a specific problem will quickly become competent and expert at 
that given problem with the capacity for more pointed depth than the engineers of prior generations due to the removal
of obstacles and ancillary details.

Imagine, if you will, a cone or cylinder of buried treasure embedded deep into the Earth's crust, such that the value of
the buried treasure increases proportional to its depth.
This is the life of an engineer on a dev team.
As they spend more time on a given team,
their understanding of the problem that team has been constructed to solve increases in detail and articulation.
However, just the same, this is a hole.
That depth often (but not always) will come at the cost of seeing the problems of other holes (or dev teams). 

Humans have a finite capacity to retain information, ie. "Use it or lose it."
Given such finite mental capacity,
it is logical to suggest that endeavors focused on vertical or depth-driven knowledge,
may come at the cost of a horizontal or breadth-driven perspective. 


### Breadth: Horizontal Skill Set

Education, especially one established in traditional liberal arts, is an iterative approach that continues to 
present deeper, more detailed, concepts year over year. 
Computer science isn't entirely different.
There are several pillars of knowledge considered essential to a given career pursuit.
Prospective engineers chase the educational hierarchy throughout college, bootcamps, etc.
Once we start earning a paycheck, that pursuit continues.
Sometimes depth driven learning continues out of sheer momentum.
Once a task is placed in front of us, we focus and conquer!
And then another, and then another. 

The human brain is simply amazing.
Some people can focus on tasks ad infinitum without losing interest or wavering in any way shape or form.
Others don't. 

What drives someone to switch gears or skills on a frequent enough basis to construct multi-tooled repertoires? 
- Is it a high aptitude? 
- Is it possible that someone just "gets it", and further descent on a subject provides no further intrinsic growth or development?
- Is it boredom?
- Is there just some chemical difference in some people's brains
  that creates an ever-increasing itch to pull their heads up from the repetition of deepening tasks?
- Is it fear? or anxiety? or wanderlust? 
- Do we just have to move around? 

- Or is it some combination of these and other possibilities? 

#### Is it the picture in the puzzle, or the puzzle itself? 

Over time, I've had the luxury of working with a lot of very talented and smart technologists.
As a function of that time, 
I'm now old and have had the additional luxury of watching the evolution of those technologists.
Some people have an innate passion about solving a specific problem.
Maybe they love selling things, or [CAD](https://en.wikipedia.org/wiki/Computer-aided_design), or video games. 
Others have a passion for a specific category of problem.
Maybe they love web design or databases.
Some people have a specific passion for a certain tech stack, 
like [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) or 
[C](https://en.wikipedia.org/wiki/C_(programming_language))/[C++](https://cplusplus.com/). 


These people tend to hover around those core interests.
The standard deviation from that core varies in proportion to the degree of interest for the core.
Change is possible, and it certainly does happen.
In fact, when they make a change, you might find that it is sometimes quite abrupt.
The person who has spent 20 years in web design suddenly leaps to another endeavor after a sense of completion or finality.
Perhaps it is similar to the likes of a thespian who ends a 
decade-long run as a fan-favorite character? 

Then there is the person who just loves puzzles.
If I can wax romantic for a moment, this is the type of person who
likes the fresh smell of cardboard on the puzzle box, and the sound of the pieces scattering on the table as they dump
them out with cherubic glee.
The domain, language, category probably doesn't matter.
Over time, they'll rule out things that they don't care for, but for the most part, their interests remain open.
This is very much like the hunter who loves the hunt rather than the trophy. 

--- 

If you step back for a moment and look at these mindsets, they both tend to approach some central point of cosmic 
harmony, but from very different perspectives. 

The extreme vertical technologist is oven looking for truth and expertise in the fashion of a straight line. 
Their career journey is as unbending and uninterruptible as possible. 
Deviations can be seen as frustrating and bothersome. 
Decision isn't necessarily a conscious action,
but rather an obvious and logical path set by it's Dijsktra-esque shortest path to their ultimate goal. 

In contrast, the extreme horizontal technologist is driven almost by a FOMO (fear-of-missing-out) perspective.
They must map out every perspective and angle.
In the path to the center,
they must find and map every path and traversable region from the starting point to the inevitable goal. 

In reality, I doubt that a person is represented in totality by only one of these traits.
I imagine that we are a free- flowing ratio that changes over time. 

What changes that ratio is beyond my comprehension.
I've simply seen so many different wonderful people approach technology in different ways,
that I couldn't possibly begin to even opine what drives a personal journey.
I can only enjoy the view, and help someone find their way if they ask.

### Is one better than the other? 

Yes...and No!

Whichever one is right for you is the better one for you.
I want to emphasize this because I think that it is lost on 
many leaders and organizations to encourage one's personal journey without presenting barrier to that discovery.
Find your fit.
Play your game.
Be yourself. 

In terms of an organization?
No.
In fact, in all but the most extremely niche circumstances, we ultimately need both. 
The size and scope of modern distributed systems are so broad they can not possibly be created without a balance of 
both. 

The concept of 
[two-pizza teams](https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/two-pizza-teams.html) 
(or [delivery teams](https://www.bizops.com/blog/the-software-delivery-team)),
supported by [Conway's Law](https://en.wikipedia.org/wiki/Conway%27s_law), is driven by the value of solving
problems at depth.
Frankly, its as logical and intuitive as basic algebra: group the components of equations by the like terms.
Compartmentalization of domain context within a single team helps foster expertise towards an enriched 
understanding of that context.
However, in order to ensure that this component can function as an organ of a larger body of work,
we must have the cross-functional understanding that provides context for interaction of all organs within 
their part-whole relationship of that larger body. 

### Who does what? 

When you consider the matrix of organizations, both as a function of title and level, the concept of horizontal 
technologists and vertical technologists becomes a puzzle unto itself. 

In an ideal world, we would be able to simply write up job descriptions for certain roles, and affix them on top of 
each other to create coverage for the depth and breadth we need for an optimal outcome.
Realistically, based on all of the concepts I've discussed up until now, it isn't that easy. 

People are messy.
Time passes and people change.
Organizations have conflict, and too much depth might offset breadth or vice versa.
By the time we create our utopian matrix, the engineers who had x-level of depth may have reached x * 10 
level of depth, or maybe we've discovered that we hired someone for their depth only to learn they wanted breadth, and
so on.

Artifacts are moving, living, breathing, growing animals. 
Organizations take on a personality, and even with the best laid
plans it is often not identical to the vision that a leader has planned for as they began to build such teams.
The best leaders figure out what matters the most and guide rather than demand,
while allowing non-critical characteristics to evolve and grow as a function of the organization as an organism. 

In short, engineers engineer and architects architect.
Traditionally,
engineers are the depth-focused technologists
who tend to increase their depth with greater passion than their breadth over time.
Likewise,
architects are usually breadth-focused technologists
who have emerged from engineering to grow their breadth with greater passion than their
depth over time.
BUT!
It isn't always true.
There are exceptions. 

However, time and skill is relative.
It isn't uncommon to find an experienced engineer with greater breadth than an inexperienced architect and vice versa. 

If I can reframe the focus of this article on it's ultimate intent: building teams is more about the people than the
documents that describe what they do.
In that regard, I'm going to challenge common thought about the expendability of
employees.
I don't believe they are. 

You can replace a piece of paper.
You can even replace what that piece of paper defines and describes (specifically speaking of a job description).
However you can't replace the entirety of what a person brings to an organization.
The character, relationships, highs, lows, quirks and wonderful weirdness that each person brings to work with them is
not replaceable. 

Consider this when creating a role and job description.
What characteristics do you want to attract?
What relationships do you want to encourage and cultivate?
What highs and lows do you want to see?
Things are always going to be weird.
Make sure it's a fun kind of weird!

### Time: Technology in Three Dimensions

Analysis is often cross-sectional.
Studying biological cells, rates of change in calculus or even diving through logs is often an
exercise in reducing the dimension of time to a halt so we can see what the heck is (was) going on.
Predictive analysis absolutely requires reductive effort to optimize compute resources so that questions get answered
in a reasonable (i.e. useful) amount of time.
It also helps our tiny human brains wrap around concepts that are otherwise hard to visualize or understand.
The previous section is a gargantuan effort
at looking at the matrix of a technology organization's skill sets through dimensions of technical depth and breadth. 

I've touched on time (sparingly) I mentioned briefly at the end of the previous section that these skill sets are in
flux.
Technologists learn new things, forget things they've stopped using and even develop new interests.
This isn't entirely due to the nature of the person or the organization. 

Time is defined in different contexts everywhere. 

There are x working hours in the day, y days in an iteration and z technologists assigned to the work signed off on
for that iteration.
x * y * z = what?
It depends. 

How were the roles defined?
What were the expectations set for each technologist within the organization.
How do
those definitions complement one another such that it provides the necessary coverage for "work to be done"? 

Did the technologists enter the iteration with all of the necessary skills?
Did we account for learning, ramp up time, 
etc.? 

Another aspect of time is career growth. As many iterations pass, technologists level up, move on, are promoted, etc. 

What about the almost entropic pace of innovation?
Many organizations have described the goal of technological innovation
to be "disruptive".
This akin to Mike Tyson's paraphrased statement: "Everyone has a plan until they get hit in the face".

Just as I cited in the section on process, effective technological direction is often measured by the most desirable
characteristics: value, cost, performance, reliability, maintainability, (many-ilities).
Even if you are the poster child for the best of breed today, new technologies can emerge tomorrow.
If that shiny new technology is adopted by your
competitors, you may be forced to course correct to avoid losing economic advantage or stability. 

And yet, there is still more time.
I also mentioned the concept of "standing on shoulders of giants".
As we scramble to understand shiny new technologies, we begin to understand and recognize new patterns.
Those patterns become tested and exercised by almost ritualistic experimentation and application to business problems.
Yesterday's house of cards is tuned to become today's bedrock.

---

## Tacticians vs. Strategists. 

Another bi-dimensional way to view architects is how close they are to the work being done.
Tactical architects tend
to describe roles that have more depth than breadth, and are closer to the details of work being done as opposed to
process, governance and longer-term outlooks.
These roles may be focused on work being done a few sprints ahead, with
a general view of the targeted goals. 

Conversely, strategic architects may be more focused on process and long term goals.
Their focus might be more on business goals, presenting status and challenges to stakeholders, 
gaining alignment from those stakeholders and so on.

### What is (a good) strategy? 

Strategies are "plan artifacts" that are the result of considerable thought and research.
Important characteristics 
of these kinds of artifacts are:
- clearly defined goals that have been carefully and collectively scrutinized by leadership teams.
- strong, verifiable data points that guide decision making. 
- contingencies in the event of failure or the inability to move forward, preferably ordered by probability of success,
or risk. 

Without clear goals, the end state of any business effort will be translucent or even opaque.
If we don't know where we are going, then we won't be able to optimize time researching ways to get there.
Our data points may be strong, but they may not defend the paths necessary to achieve the goals we strive for.
Without clear goals, our primary path will be questionable, let alone any alternate routes. 

If goals aren't clear, then we are far more likely to be plotting a course to failure than success. Failure is easy. 

### What are (good) tactics? 

- Tactics are specific, decomposed compartments that help us get to a strategy.
  Like any big problem, it is easier to understand and act against smaller simpler tasks.
  Take the time to do so. 

- Aim small, fail small.
  As an addendum to the previous note, smaller tasks are easier to recover from.
  The less time we spend, the less time we have lost if the action goes awry.
  While we are on the topic of time, good tasks are time bound.
  When we are working towards goal, our most valuable commodity is time.
  Don't let tasks go on forever.
  If work starts to drag out, stop and figure out why.
  Fix it. 

- Track your progress.
  As you work towards your goal, very much like a GPS system, you want to make sure that you haven't veered off course.
  Using OKRs is one (best?) example of creating a relationship between the short term work and longer term goals. 

### Strategy & Tactics vs. Previous Concepts...

The significance of this additional view is to consider how different architects might fit into an organization or
technological value stream given the aggregation of these dimensions against categorical features such as leveling or
tenure. 

Generally, when we think of tactics, we think of individual contributors or line level management, whereas strategy is
often an increasing responsibility as one climbs the corporate ladder. 

This isn't altogether different from common patterns reflecting the focus of depth against breadth. 
It is really just another lens from which to evaluate a role or organization of tasks and how those tasks can provide
vision and value to the rest of the organization.

### What comes first... the chicken or the strategy? 

(Ok. I mean strategy and tactics!)

Usually, when an organization starts there is a strategy and a business plan that kicks things off.
Once a company begins to execute on that plan, ideally the process becomes cyclical. 

Tactical efforts are more than just steps of execution.
They are probes into efficacy that, with good practices,
can be constructed into a feedback mechanism that helps us fine tune strategic properties over time.
This is the core principle of continuous improvement
and it is one of the simplest tools in our repertoire for binding technical
direction to business planning. 

---

Thanks for joining me for this word salad extravaganza that is part 2 of my foray into a discussion about architects. 

In part 3, I aim to apply the concepts provided here across some of the more common job roles I've seen posted or
defined across job sites, businesses, and even standards organizations.