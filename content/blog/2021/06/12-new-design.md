---
title: "New Site Design"
date: "2021-06-12T00:00:00.169Z"
description: ""
---

We're Live! (insert Bill O'Reilly meme/gif here!)

Welcome to the new site! 

After last month's post on Green Software Engineering, I started doing some research on sustainable engineering. One of 
the resources I ran across was a fantastic [book](https://abookapart.com/products/sustainable-web-design).

Evaluating the sustainability of the site, hosting etc. also allowed me to revisit the frustrations and limitations of 
using a website builder. 

Initially I hosted the site using "WebsiteBuilder1". The design experience was Ok, the price point was exceptional, but 
when it came to support, I got what I paid for. I didn't have any control over the underlying software versions, which 
led to aspects of the site failing here and there. 

I spent a little more to migrate to "WebsiteBuilder2", which was only a little better in terms of support, and it came 
with tradeoffs. There were a lot of neat features (that I didn't need or ask for), and while the experience was low 
code, it came with an editor that seemed dated in terms of user experience. The mobile experience wasn't great which
was a concern for me as 90% of my traffic was coming from mobile devices. 

I'm not much of a front-end coder, so jumping into [reactjs](https://reactjs.org/) was fun. As the copyright line
suggests, this was built with [Gatsby](https://www.gatsbyjs.com/).

I had put it on "my list of things to do" to investigate frameworks like Jekyll, Hugo, Gatsby, NextJs, etc.

I didn't give Jekyll much time. I'm not a big fan of Ruby, and the industry trends always from it less compelling in 
terms of time to invest. Hugo is very powerful, fast, but the learning curve was steeper than it's js counterparts. I
also found the lack of documentation and loose-standards in terms of templatization a bit frustrating to work with.

I played with Next and Gatsby concurrently, measuring them in terms of developer productivity and sustainability.
Personally, I really really liked NextJs. It was easy to use, simple to deploy, and it offered a substantial amount 
of flexibility. I noticed that it seemed to be losing steam though. As I investigated further, it really seemed that 
when the degree of flexibility that NextJs offered was desirable, developers simply opted to use reactjs directly. 

Gatsby provides a better happy medium. I don't have to spend too much time writing react code, but I have enough 
flexibility to manage a blog, and its content, the way I want to.

So without further ado, written in markdown, emangini 2.0 is here! 

