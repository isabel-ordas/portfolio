---
title: "Wallapop — Activating Dormant Sellers: A Segmentation & Prioritization Exercise"
slug: wallapop
description: "Quantitative segmentation, prioritization framework, and experiment design to activate dormant sellers on a C2C marketplace."
status: "analytical exercise, not built"
role: "Self-initiated, solo"
stage: ["Discovery", "Prioritization"]
product_skills: ["Quantitative Reasoning", "User Segmentation", "Prioritization Frameworks", "Experiment Design", "Business Case Modeling"]
tools_frameworks: ["Segmentation matrix", "Weighted scoring (ICE-style)", "A/B test design"]
domain_impact_area: ["Marketplace / C2C", "E-commerce"]
---

<!--
NOTE FOR IMPLEMENTATION:
This case study is scoped to: problem reframe -> segmentation -> prioritization
matrix -> final decision -> ONE example experiment (B2a, the #1 priority).
Deliberately excludes the other two experiments, the full solution catalogue
for lower-scoring options, the detailed economic breakdown per scenario, and
the glossary of terms. Keep the prioritization matrix as the visual centerpiece.
Source: self-initiated exercise, started from a problem Isabel noticed as a
Wallapop user. Do not reference mentoring or any external guidance anywhere
in this case study.
-->

## Context note (show near the top, small/muted style)
*As a Wallapop user myself, I kept noticing how many people around me had registered accounts but never actually listed anything. That observation turned into this exercise: a structured analysis of a real, publicly known marketplace problem, rather than a project I shipped or primary research I ran with real users. What it demonstrates is the reasoning behind segmentation, prioritization, and experiment design.*

## My Role

This was a self-initiated exercise. I identified the problem myself as a user of the platform, then worked through the segmentation, the prioritization framework, and the experiment design on my own.

## Problem

Registered Wallapop users aren't listing items for sale.

## Reframe

The problem isn't really that most registered users don't sell. That's normal and expected on any C2C marketplace. The real issue lives in three specific segments with latent or blocked intent to sell, who end up being lost to low consideration, friction in the process, or a bad first experience. On a platform the size of Wallapop, that percentage adds up to millions of unlisted items.

## Segmentation

Estimates are based on typical C2C marketplace benchmarks from Vinted, eBay, and Depop, applied to Wallapop's roughly 23M MAUs (Q1 2026, the first quarter after the Naver acquisition), rather than on internal Wallapop data.

| Segment | Description | Est. % | Actionable? |
|---|---|---|---|
| **A1** — Conscious buyers only | Registered to buy, aware of the selling option, just not interested | ~25-30% | No |
| **A2** — Default buyers | Never connected "I have things at home" with "I could sell them here" | ~15-20% | Yes, a consideration problem |
| **A3** — Blocked intent | Wanted to sell, but something stopped the process before listing | ~5-10% | Yes, a friction problem |
| **B1** — Out of stock | Sold what they had early on and simply have nothing left | unknown | No |
| **B2** — Bad experience | Listed early, didn't succeed, and never came back | unknown | Yes, an experience problem |
| **C** — Active sellers | Sell recurrently and sustain the platform's supply side | ~10-15% | No, the goal here is to retain them |

**Potential impact:** activating A2, A3, and B2 (an estimated 8.5M addressable users) could unlock somewhere between €2.66M and €7.97M in potential revenue, under conservative activation scenarios of 5% to 15%.

## Prioritization matrix

Each candidate solution was scored on three criteria, each on a 1 to 3 scale: hypothesis confidence (1 for intuition, 3 for having direct data available), validation cost (1 for expensive or complex, 3 for cheap and fast), and solution cost (1 for very complex, 3 for simple). Those three scores are summed into a total. Economic impact is used only as a tiebreaker between solutions that score the same, not as an input to the scoring itself.

| Rank | Solution | Segment | Total score |
|---|---|---|---|
| 1 (tie) | Second-chance message plus a free PRO trial | B2b, sold once but had a bad experience | 8 |
| 1 (tie) | High-demand item suggestions | B2a, listed but had zero sales | 8 |
| 3 | Post-purchase trigger with social proof | A2a, never considered selling | 7 |

A handful of lower-scoring candidates (express AI listing, express auction, a consignment model, and various flow-friction fixes) are documented in the full analysis but left out here, since they're out of scope for now.

## Final decision

The tiebreaker between the two top-scoring solutions came down to marketplace liquidity. A C2C marketplace needs supply just as much as it needs demand: if there's demand for a category but no matching supply, Wallapop simply loses that transaction to a competitor. Activating sellers around high-demand items solves a structural marketplace problem, not just an individual retention one.

Build order:
1. High-demand item suggestions (B2a). This reactivates sellers who already have items the market is actively searching for, with a fairly direct impact on liquidity and GMV. Both the segment and the data needed to target it are already available, with no prior development required.
2. Second-chance message plus free PRO (B2b). This reactivates sellers who already completed at least one transaction, arguably the most valuable profile of the three, since they've already proven out the full sell cycle once.
3. Post-purchase trigger with social proof (A2a). This grows the seller base over the longer term, among buyers who never considered selling in the first place. It needs a cheap validation survey to run first, so the message doesn't end up reaching people who consciously ruled selling out.

Deliberately not building right now:
- Fixes to friction in the listing flow (A3), which are blocked on a real prerequisite: the flow isn't instrumented yet, so any solution here would be built without real data behind it.
- The higher operational-complexity ideas, like a consignment model, an express auction, or AI-assisted listing. They have real potential, but they're hard to justify before validating simpler, higher-confidence hypotheses first.

## Example experiment: validating the top priority (B2a)

**Problem hypothesis:** sellers who listed an item but never made a sale tend to leave because that first experience was a quiet one. Nobody bought, nobody asked a question, and without understanding why the listing didn't sell, whether it was the price, the photos, or a low-demand category, the user has no real way to improve and generally doesn't try again.

**Candidate solution:** based on the categories a user has bought or listed before, suggest other high-demand items they likely have sitting at home.

**Design:** an A/B test on the B2a universe (at least one listing, zero transactions, last listing more than 90 days ago).
- Control group receives no intervention
- Test group receives personalized high-demand item suggestions

**Primary metric:** reactivation rate, meaning the percentage of users who publish at least one new listing within 30 days, compared between test and control.

**Secondary metrics:** the conversion rate of those new listings into sales, and the percentage of new listings published in a suggested high-demand category, which signals whether the suggestion is actually shaping behavior.

**Success criteria:** the test group's reactivation rate is statistically significant compared to control, and the new listings convert to sales at a higher rate than the user's original listings did.

## Reflection

Working through this exercise, the hardest part wasn't building the scoring matrix itself. It was making peace with the gaps in it. Several of the most promising segments, like B1 and B2, only exist as an unknown percentage until a survey actually runs. A framework can rank solutions well enough, but it can't manufacture data that isn't there yet.

What this really taught me is that prioritization isn't about waiting until you have certainty. It's about being explicit about what you don't know yet, and building that gap into the plan instead of hiding it behind a confident-looking number.
