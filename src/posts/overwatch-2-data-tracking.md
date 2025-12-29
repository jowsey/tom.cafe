---
title: Web scraping to visualise what Blizzard won't
subtitle: Tracking and visualising millions of rows of live game data
date: 2025-12-31
imgSrc: /blog/ow2-data-tracking/OW2_JunoTrial-GameplayTrailer_2.webp
imgAlt: A cinematic shot of Juno from Overwatch 2.
useImageAsBanner: true
---

This post is part post-mortem, part storytelling, and part technical write-up. It's about a project I ran a few months ago to track and visualise real-time and historical data for the live service game "Overwatch 2".

You can check out the live, now-archived site, [here](https://ow2.tom.cafe).

On August 26th, 2025, Blizzard released a new [public frontend](https://overwatch.blizzard.com/en-gb/rates/) for viewing the real-time pick and win-rate data of Overwatch 2 heroes. This was a welcome improvement in transparency, but it had one big drawback: there was no way to view data from the past, meaning no way of knowing if the latest patch made things better or worse!

There was only one thing to do: ~~make a request on the forums~~ take matters into our own hands!

---

# The plan

First things first: the data's updated constantly — every day we spend _not_ working on this is an hour we'll never get back, so let's get up and running straight away, before we even _think_ of finding a way to display this stuff!

## How hard could it be?

We'll first need to figure out how the official site gets its data.

Weirdly, Blizzard seems to have done half a job. The page is hydrated with data on the server, meaning no unnecessary client requests, yet rendering seems completely broken without the use of JavaScript. A shame; as far as I can tell, there's nothing here that couldn't fall back to static styles.

Anyway — more importantly, subsequent filter changes call this [conveniently open API endpoint](https://overwatch.blizzard.com/en-gb/rates/data/?input=PC&map=all-maps&region=Europe&role=All&rq=0&tier=All) and update in-place. Just what we're looking for!

![GET request UI showing the titles and values of various query parameters.](/blog/ow2-data-tracking/endpoint.png)

<small>^ An example filtered API endpoint.</small>

Now we've got a way of getting all the data we need for a given set of filters. Perfect! One small problem, there's a lot of these filters.

Some quick maths tells us that with two game modes, two input types, thirty-one maps, three regions, and eight competitive ranks, we'll need to make _thousands_ of individual requests if we want to have the same level of filtering as the official site (and we do!).

To make matters worse, the API doesn't have the decency to tell us _which_ filters are available. Won't somebody think of the unauthorised-but-well-meaning-I-promise third parties trying to take their data? Heartless.

No bother! The official page has dropdown selects for every filter option, and if you recall, it's server-hydrated, so we can make one initial request to the page, parse the HTML into some proper, typed data, then iterate through each option. There's a few exceptions here — the competitive ranks aren't going to change anything in quick play, and so on — but nothing we can't trivially check for.

![Dropdown elements titled Role, Input, Game Mode, Map, and Region.](/blog/ow2-data-tracking/filter-dropdown.png)

<small>^ Should be easy enough!</small>

## Don't mind me..!

We don't want to make anyone (or any*thing*) at Blizzard mad, human nor machine, but we _do_ need to be gathering our data within as short a time-frame as possible. Given the data updates in mostly real-time, the shorter the time-frame, the more accurate and consistent our snapshots will be. It's time for some _bodging_!

There's a lot of guesswork going on here, given we're interfacing with what is essentially a black box, but after some trial and error, I ended up with a small [Bun](https://bun.sh) script running a [`node-cron`](https://nodecron.com) job that:

1. requests and parses the initial page HTML with [`cheerio`](https://cheerio.js.org/)
2. builds a queue of API requests from every filter combination
3. creates a bunch of [`undici`](https://undici-docs.vramana.dev/) `ProxyAgents` using public proxy IPs pulled dynamically from a public list
4. has each proxy agent pull from the request queue in parallel on a jittered interval
5. writes to the app's local SQLite database with [`drizzle-orm`](https://orm.drizzle.team/) using Bun's built-in driver.

Nothing particularly novel or advanced here. Just a bunch of glue code moving data around — all in all, the gathering script comes out at around ~400 lines of code. Not too bad! I set up a quick systemd service to keep it running on my VPS, and with that churning dutifully away in the background, we can move on to the frontend.

# The frontend

The frontend — as with this site — was built with SvelteKit, because it's small, fast, and fun to work with.
