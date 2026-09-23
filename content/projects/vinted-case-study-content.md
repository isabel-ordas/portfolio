---
title: "Vinted — Ask Before You Buy: A Vibe Coding Interview Simulation"
slug: vinted-ask-before-you-buy
description: "A timed product sense exercise followed by rapid AI-assisted prototyping across two tools, simulating a vibe coding interview for Vinted."
status: "prototyping exercise, not built"
role: "Self-initiated, solo"
stage: ["Discovery", "Build"]
product_skills: ["Product Sense", "Structured Problem Framing", "PRD Writing", "Rapid Prototyping", "AI-Assisted Design", "Prototyping Tool Evaluation"]
tools_frameworks: ["FigJam", "Claude Code", "Magic Patterns"]
domain_impact_area: ["Marketplace / C2C", "E-commerce"]
---

<!--
NOTE FOR IMPLEMENTATION:
This case study simulates a "vibe coding interview": a timed product sense
exercise followed by rapid AI-assisted prototyping. It is the strongest case
for the "Build" pillar of Expertise (Product Thinking / Build / Climate
Impact), a gap the Bondly and Wallapop case studies don't cover.

Reflection angle for this case: knowing when to reach for a fast, divergent
prototyping tool versus a polished, narrative-ready one. Don't reuse the
Bondly angle (engineer-to-PM mindset) or the Wallapop angle (deciding with
incomplete data).

Assets provided, stored in assets/projects/vinted/ (resized to JPG, "vinted-" prefix dropped):
- vinted-product-sense-board.png: the FigJam reasoning board (Context section)
- vinted-exploration-grid.png: composite of the 5 Claude Code storyboards
  (Quick Ask, Ask and Wait, Smart Ask, Others Asked, Reply Radar), stacked
  into a single gallery image. Tall image, use in a scrollable or expandable
  block, not full-bleed.
- vinted-magicpatterns-01-cover.png, -02-flow-overview.png,
  -03-step-discover.png, -04-step-understand.png, -05-closing-stats.png:
  a trimmed selection (5 of 10) from the Magic Patterns deck, used as the
  polished-output section. The other 5 pages of that deck are not included
  here deliberately, to keep the case from overloading; they exist in the
  source deck if more detail is wanted later.

Source: self-initiated exercise, solo, no external guidance. Personal
motivation (sister's real hesitation buying cross-border on second-hand
platforms) can be reused as the opening hook for a LinkedIn post version of
this case, but keep it brief and factual here, this is a portfolio case
study, not the post itself.
-->

## Context note (show near the top, small/muted style)
*This is a simulated vibe coding interview: a timed product sense exercise, followed immediately by rapid AI-assisted prototyping. I ran it solo, as practice for real product interviews that increasingly include a prototyping round.*

## My Role

Solo, start to finish. I framed the problem and wrote the PRD myself under a time box, then prompted Claude Code to prototype the solution, and separately took the same direction into Magic Patterns to see how a second AI tool would interpret the same brief.

## Problem

The starting point was personal: my sister hesitates to buy from sellers in other EU countries on second-hand platforms, mainly because of the language barrier and uncertainty around international shipping. That hesitation is a real, common failure point in cross-border C2C, and it's what I chose to frame and prototype a fix for.

## Product sense, under a clock

Before opening any prototyping tool, I gave myself 30 minutes to frame the problem properly on a FigJam board, the way a real vibe coding interview would start.

**Clarifying the scope first.** I treated cross-border as intra-EU for this exercise, and noted early that trust affects buyers and sellers differently, which shaped where I looked for the sharpest problem.

**Segmenting the cross-border user.** Roughly 5% of a marketplace's users buy cross-border, and within that group the motivation splits three ways: price-driven (cheaper abroad), selection-driven (not available locally), and curiosity, with no strong intent. That split mattered for scoping the solution to the segments actually worth solving for.

**The reframe.** Three candidate problems came out of this: trust in pre-purchase communication (different language, and what happens if something goes wrong), unfamiliar sizing and brands (a comprehension issue, not a trust issue), and missing delivery information post-purchase (a seller-side, post-purchase issue). I prioritized pre-purchase communication trust, because it blocks the buying decision before commitment, while the other two sit either later in the journey or outside what a buyer needs resolved before they'll click buy.

**The PRD, scoped tightly.** Goal: reduce buyer hesitation on cross-border purchases by giving them a fast, language-barrier-free way to resolve key questions with the seller before committing. In scope: 3 to 4 predefined, tappable questions. Explicitly out of scope: free-form translated chat, custom buyer-written questions, and post-purchase delivery, since a real interview rewards precise scoping, not an unbounded feature. Success was framed with a leading metric (percentage of question threads that end with the buyer adding the item to cart or starting checkout) and a lagging one (cross-border purchase conversion rate).

## Prototyping, in minutes

This is the part of the exercise I most wanted to demonstrate: a well-scoped PRD turns prototyping into something that takes minutes, not days, which is exactly what lets you test whether an idea actually resonates before investing further.

**Claude Code: five directions, fast.** I prompted Claude Code to prototype the PRD, and rather than settling on one interpretation, it produced five distinct directions in the same short window: a tappable question band on the listing (Quick Ask), a reply-time-estimate framing before asking (Ask and Wait), instant category-based FAQ answers with no live message at all (Smart Ask), social proof from other cross-border buyers' questions (Others Asked), and a seller-responsiveness trust signal (Reply Radar). Seeing five working interpretations of the same brief, that fast, was the clearest signal of how far a tight PRD can stretch a prototyping tool.

**Magic Patterns: the same direction, polished.** I then took "Ask before you buy," the direction closest to the PRD's core scope, into Magic Patterns to see how a second tool would handle it. The output was noticeably more presentation-ready: a full walkthrough of a buyer discovering the prompt on the listing, seeing answers other buyers already got, tapping a ready-made question, watching it translate and send, and reading the seller's reply back in their own language.

## What I'd take from comparing the two

Claude Code was better for divergence: cheap enough to explore five real directions and compare them side by side before committing to one. Magic Patterns was better for convergence: turning the chosen direction into something closer to what you'd actually put in front of a stakeholder or a user. Neither tool is strictly better, they're suited to different points in the process, and knowing which one to reach for at each stage is itself a skill worth having as AI-assisted prototyping becomes a normal part of product work.

## Reflection

What stood out most wasn't the prototypes themselves, it was how much the upfront product sense work did for the speed of everything after it. A clear problem, a tight PRD, and an explicit out-of-scope list meant the prototyping stage barely had to think, it just had to execute against a brief that was already unambiguous. That's the real takeaway for how I want to work: the fastest prototyping tool still depends entirely on the quality of the thinking you hand it.
