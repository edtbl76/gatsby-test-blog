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




