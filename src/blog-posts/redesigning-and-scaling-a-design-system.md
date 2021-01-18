---

title: Redesigning and scaling a design system across HP
date: January 2019 - Present
company: HP
role: Designer, Design Lead
tags: [
    design, design systems
]

---

# Overview

While I was interning at HP, our team had built and owned a design system named Veneer that we were using for our team projects. Unfortunately, the system did not have adoption outside of our team except for a couple of projects. This lack of adoption was due to some gaps in Veneer as a system, but also in our efforts to work with other teams and other Global Business Units (GBUs) within HP. I made it my goal to drive global adoption of Veneer when I started full-time in January 2019, and that is exactly what I did. 

Coming in, Veneer was in version 2 as a system, and we only had a few developers dedicated to working on the system. All of the designers, including myself, worked on it in any spare time we had away from our projects. Eventually, I was able to be dedicated to it as I worked on our new initiative. This new initiative came from my desire to scale grassroots adoption of the system across the company by redesigning it from the ground up to address all of the main objectives for each business unit. It was appropriately dubbed “Veneer 3”, and was the next evolution of the system.


# Context

To understand the effort as a whole and its objectives, it is important to understand HP’s design culture and overall company structure. HP is split into three GBUs: Personal Systems (PCs and other personal devices), Print (Home and commercial printers), and 3D Print. My team was a part of the Personal Systems (PS) organization, specifically within a group focused on one product. Veneer was primarily used for this product, and cut its teeth dealing with the edge-cases that come alongside that.

However, the founders and I had aspirations of taking the system far beyond being used just for a handful of projects, instead we wanted it to be the official design system for HP. Doing so would give designers and developers much-needed guidance on how to build their software, since there was no guidance up to that point. Business units and even teams within the units were all siloed, building their own standards and their own assets for the product(s) they worked on. 

Obviously, the goal of a design system is to eliminate that siloed work and unite all groups under one banner. However, this challenge proved to be extremely difficult for anyone that tried, primarily because of a lack of guidance from the Brand team. There was no brand foundation that was shared across the company, meaning that it was the wild west for teams to do as they pleased, as long as they were using three things: the HP logo, the HP typeface, and HP’s brand blue. The room for interpretation within those boundaries was humongous. Any and all previous efforts to unify software teams were dead as soon as brand foundation discussions commenced, chalking their disagreements up to “substantial business differences” between PS, Print, and 3D Print. The differences were real, given that the projects did not all hit the same user base, and in some cases their needs were very different from one another. Some teams were developing for consumer, others for commercial, and some for edge-cases like gaming or industrial. No one had built a foundation that was flexible enough to work for all of them.


# Cue: Veneer 3

Veneer was not exempt from those same critiques. Version 2 of the system boasted some flexibility to try and address these needs, but it fell short in a few places. I benefited from getting to see exactly what those shortcomings were, and worked to address them. This effort began with myself leading the charge, getting advice and feedback from the two founders of Veneer on my team: Andrei Garcia and Gilson Hoffmeister.


## Rebuilding the foundation

In order to try and reach the flexibility, accessibility, and scalability that a pan-HP design system needed, we decided to start from the ground level. We revamped our overall system principles to align ourselves with the objective of building for all software across the company. 

From there, we reworked the core of any system: grid, typography, iconography, and colors. This was imperative to get right, given that all other pan-HP efforts had died at this stage. We dubbed these 4 pillars the “Design Language” of Veneer, given that they are the building blocks for the system as a whole. With flexibility in mind, we came up with a typography scale that worked across many different product types, and rigorously tested it. Striving to consider accessibility and flexibility, we rebuilt the color system, expanding the palette drastically and doing so systematically, so that it was extensible and reusable. Accessibility was huge for this stage, and it is at the core of the palette and its surrounding documentation. When we reworked the grid, we set it at 4dp, using a new unit of measure and a smaller increment to promote flexibility and scalability. Using dp (density-independent pixels) meant that we could ensure that the interface elements would be rendered at the same _physical_ size across any device with any pixel density, which was huge for accessibility and consistency. 

Iconography turned into a massive effort, and we used it as a key alignment point with Veneer. It was our first opportunity to gain an ally in the company: the Print organization. Up to this point, Veneer was a system that was built completely inside our team and therefore our Personal Systems organization. Bringing the system to other organizations to ask them to use it was a bit like a foreign conqueror knocking on the door in their minds. They didn’t think Veneer 2 would work for their needs, and they didn’t think that they could contribute to it to better address their concerns. Our goal with Veneer 3 was to dispel that notion entirely. Iconography could be the primary example of that collaborative spirit. So, we identified the Print group as our ally in this, and decided to use their iconography style for Veneer 3, fitting it within the bounds of the system. This work of “fitting” was done primarily by Andrei, one of the Veneer founders. He formalized the icon style and wrote robust documentation on how to properly create the icons. I wrote the documentation on how to properly use them within the system.


## Creating the visual style

Once the foundations were established, it was time to get into the meat of the system: components and patterns. The foundation level is political as it is, but the visual style was even more so, given how subjective it can be. This was extremely important for us to nail, but I felt strongly that we needed more allies for it to work. If people didn’t feel like they had a hand in creating it, they would not want to use it. See: foreign conquerors round 2.

Again, we identified the Print organization as our main ally here. Since the 3D group was still very new to the company, and Print had many legacy requirements, it made sense aligning with Print first. To do this, we scheduled a weeklong workshop in San Diego at the campus where they sat. I did a ton of prep going into this workshop, knowing full well how political discussions like this had been in the past, and knowing how subjectivity in design can kill even the most well-intentioned efforts. 

Once we arrived, we worked for the first two days on refining and agreeing upon the foundations we had established. Then, we moved on to trying to workshop a visual design style, using a design charrette to kickstart the creativity. It is meant to be an exercise to have people try a bunch of ideas, point out things they like in others, and try to implement it in their own. Ideally, after a few rounds, people continue to pull the good ideas from others into their own creation, and eventually everyone aligns. However, the first two rounds of this charrette did not go well at all. People were pointing out things they liked in others work, but there wasn’t much alignment to be found. They were arbitrarily designing their visual style off of their taste, so everyone’s looked very different, and the subjectivity of design prevented anything from getting traction. I thought if we created the style systematically, then it would cross these boundaries and make a style that was above reproach, so I created a first draft of a layer system to anchor each of the visual design elements to a “layer” that represented its level of emphasis on the page. And suddenly, everything clicked! The layer system and my visual design style were unanimously picked for the system moving forward, and we worked to expand it so that it worked as a system for creating components and patterns from scratch in Veneer. 


## Building the rest

In the days and months that followed, we built out a component library for the system using this style. On top of that, we built it so that it was flexible at its core. 

For the first time in Veneer, we added multiple modes: light, dark, and high contrast. Light and dark were creative systematically, using the first draft of what we now call our “System Colors” as the base. High contrast mode was a huge point of emphasis for us in creating an accessible system, and allows products to give the users an option to enable it in a click. WCAG AAA accessibility out of the box proved to be compelling for many teams. 

Also for the first time, we added consideration for “shape” within Veneer, allowing the designers and developers of a project to choose between a round and sharp style for their product. This helped tremendously with teams building products outside of the usual HP style, like gaming and industrial.

(Again) for the first time, we created densities for all of the Veneer components. This meant that commercial or enterprise applications that needed to prioritize screen real-estate and cater to power users could use our “high density” mode, which makes all of the components smaller systematically. Standard density, which is the default, proved to be the perfect size for the majority of products, fitting nicely into the consumer product style. 

As all of this was built out over the course of 9-12 months, we did Beta releases of the system for designers and developers to leverage. In this period, we also rebuilt our Veneer website to use the new components, and prioritized writing good documentation. My role continued to expand as the system scaled and grassroots adoption increased. Eventually, all of the Print organization approved Veneer as their design system of choice, and 3D Print followed suit shortly after. Just like that (while still in Beta!), Veneer was being used by all of the Global Business Units at HP and the majority of the teams within them. This adoption was unlike anything that had been done at HP. Finally, we were able to have myself, Gilson, and Andrei be dedicated fully to working on the system. My role grew even further as we added other designers for me to lead, which helped us deliver a much higher quality product even faster.


## Tools

During this whole process, we had tool considerations to make within our team. Up to Veneer 3, we were primarily using Sketch as our tool of choice within InVision as a hand-off tool. The issue with Sketch is that it is Mac only, which proved to be difficult at a PC manufacturer. We had been looking to move away from it for a while to have more alignment with the company. We saw some folks were using Figma but the majority were using Adobe XD, including our allies over in the Print org. So, as an act of goodwill, we switched our primary tool over to Adobe XD for Veneer 3. This proved to be a mixed bag (a story for another time). As time went on (9-12 months), we saw that other groups were switching to Figma in droves. Seeing this, I decided that we should build for Figma to make sure we were delivering for both tools and all of our users. So, in a few weekends, I built our component library in Figma. In retrospect, I am so glad that I did that.


## Releasing Veneer 3

Finally, we were able to leave Beta and release Veneer 3 as the new version of a fully realized design system. It had been almost 18 months up to this point, and we were thrilled. It had been adopted by most of the teams across the company of their own volition, and we received an extremely positive reception. On the design side, we released all of our assets on Adobe XD and Figma. For the development side, we released a new version of our React library. From this point on, design and development followed the same two week cadence of releases to keep the system up to date. 


# The road goes on

Despite releasing Veneer 3 as the new version of the system, we still had much more work to do. Veneer was still only a design system for the web. On top of maintaining the current system, we set our sights on being truly multi-platform. It was a request from most of the teams we worked with, but we did not have the resources to make it happen until after we released Veneer 3.

Near the end of 2020, we worked with the HP Software Council (the only unifying council across HP software) to announce Veneer as the official design system for HP software. Almost two years of hard work later, my goal was finally accomplished. The grassroots adoption finally gave way to an official designation from a global HP authority.

In the next stage of our wonderful alignment with the Print group, they decided to help us out and contract an agency to help us build out the iOS and Android libraries. As of January 2021, we are currently in the process of wrapping up that work and prepping it to be used as first-party design libraries.


# Work

To see any examples of the work that went into this effort, please reach out to me directly at [austinrobinsondesign@gmail.com](mailto:austinrobinsondesign@gmail.com).
