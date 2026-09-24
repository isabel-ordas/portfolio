---
title: "ClimateTrade — Product Decisions from Inside a Developer Squad"
slug: climatetrade-product-decisions
description: "Leading a developer squad as Tech Lead for a blockchain-based carbon credit marketplace, and the product decisions, collaborative and solo, that came with it."
status: "shipped, in production"
role: "Tech Lead of a developer squad. Company-wide initiatives, like the billing redesign, were decided collaboratively with Product, Finance, and other stakeholders. Squad-level prioritization, data-informed recommendations, and tooling adoption were mine to decide."
stage: ["Strategy", "Build", "Launch", "Growth"]
product_skills: ["Cross-functional Leadership", "Cross-functional Decision-Making", "Stakeholder Management", "Prioritization Frameworks", "Data-Informed Decision Making", "Developer Mentoring", "AI-Assisted Team Workflows"]
tools_frameworks: ["SQL", "Data Warehouse / Metabase", "AWS", "B2B API integrations", "Cursor"]
domain_impact_area: ["Climate Tech", "Carbon Markets", "B2B/B2C Marketplace"]
---

<!--
NOTE FOR IMPLEMENTATION:
Second correction from earlier drafts. The billing redesign was a
collaborative decision: Engineering (Isabel, as Tech Lead), Product,
Finance, and other stakeholders decided together to bill clients directly
instead of routing invoicing through providers. This is legitimately part
of Isabel's story, she was in the room and contributed the technical
feasibility view, then led the squad that built it. Do not frame this as
"not really her achievement" or soften her credit for it, and do not use
language like "not every case study needs to be a decision I made myself,"
that reads as diminishing rather than honest.

The other three beats (Google login deprioritization, funnel analysis,
leading AI tool adoption) remain decisions that were fully hers, within her
own scope as Tech Lead, distinct from the collaborative billing decision.

This is Isabel's first case study with real shipped impact and real
production metrics, and the first with genuine Climate Impact relevance
(the third pillar of Expertise, alongside Product Thinking and Build).

Reflection angle: moving credibly between collaborative, cross-functional
decisions and decisions made solo within her own scope, and being precise
about which is which without underclaiming either.
-->

## Context note (show near the top, small/muted style)
*ClimateTrade is a blockchain-based carbon credit marketplace, with a B2B API for corporate integrators and a B2C marketplace for individual buyers. I was Tech Lead of the developer squad, and part of the cross-functional group behind the decisions below.*

## My Role

Tech Lead of a developer squad. I mentored the developers on the squad and coordinated across marketing, engineering, systems and delivery, and data analysts. For company-wide initiatives like the billing redesign below, decisions were made collaboratively with Product, Finance, and other stakeholders, and I represented the engineering and technical feasibility view in that group. Within my own scope as Tech Lead, I owned the squad's prioritization calls, the data-informed recommendations behind them, and the adoption of new tooling on the team.

## The problem

Clients had to wait days to receive their invoice after buying carbon credits, and the friction wasn't only theirs. Internally, our own billing process depended on first claiming and receiving an invoice from the provider we'd sourced the credits from, before we could issue anything to the client. Every client invoice was hostage to someone else's paperwork first.

## The reframe

The instinct could have been to just chase providers faster. But the real fix wasn't speed, it was removing the dependency altogether: rather than routing every client invoice through a provider's invoice first, the company could bill the client directly.

## The decision

Together with Product, Finance, and other stakeholders, we decided the company would invoice clients directly, decoupling client billing from the provider invoice cycle entirely. I brought the technical feasibility view to that decision, and then led the squad that built the new billing model. Wait time went from days to instant.

## Beyond the flagship decision

Other decisions from this period:

**Prioritization with an explicit trade-off.** Assessing implementation complexity against user benefit, I made the call to deprioritize a Google login integration that sat in the squad's backlog, redirecting that engineering capacity to higher-value work instead.

**Turning funnel data into direction.** I analyzed B2C marketplace funnel data in SQL to find where users were dropping off, and synthesized the findings into recommendations that directly shaped what the squad prioritized next.

**Leading AI-assisted development on the squad.** I introduced AI-assisted workflows (ChatGPT, Claude, Cursor) to the team. Two of five developers adopted Cursor, with an estimated 25% reduction in development time and roughly 50% faster log analysis for metrics and incident review.

## Reflection

This period sharpened two muscles I use constantly now. Shaping the billing redesign with Finance and Product sharpened how I build a case for a technical trade-off in front of non-engineers. Owning the calls that were fully mine, prioritization trade-offs, what the data said to build next, which tools the team adopted, sharpened my instinct for making that call myself and standing behind it.
